import { Component, computed, inject, signal } from '@angular/core';
import { Solicitudes } from '../../services/solicitudes';
import { RouterLink } from '@angular/router';
import { SolicitudCard } from '../../components/solicitud-card/solicitud-card';

@Component({
  imports: [RouterLink, SolicitudCard],
  selector: 'app-solicitudes-listado',
  styleUrl: './solicitudes-listado.css',
  templateUrl: './solicitudes-listado.html',
})
export class SolicitudesListado {

  private solicitudesService = inject(Solicitudes);

  solicitudes = this.solicitudesService.solicitudes;
  cargando = this.solicitudesService.cargando;
  error = this.solicitudesService.error;
  busqueda = signal('');

  solicitudesFiltradas = computed(() => {

    const texto = this.busqueda()
      .trim()
      .toLowerCase();

    if (!texto) {
      return this.solicitudes();
    }

    return this.solicitudes().filter(solicitud =>
      solicitud.title.toLowerCase().includes(texto)
    );
  });

  constructor() {
    this.solicitudesService.cargarSolicitudes();
  }
}
