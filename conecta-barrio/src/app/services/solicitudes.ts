import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Injectable({
  providedIn: 'root',
})
export class Solicitudes {
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private listaSolicitudes = signal<Solicitud[]>([]);
  private cargandoSignal = signal<boolean>(true);
  private errorSignal = signal<string | null>(null);

  solicitudes = this.listaSolicitudes.asReadonly();
  cargando = this.cargandoSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  constructor() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {

    //Para el manejo de mensajes cuando se este cargando o falle la carga
    this.cargandoSignal.set(true);
    this.errorSignal.set(null);

    this.http.get<Solicitud[]>(this.apiUrl).subscribe(
      (datos) => {
        this.listaSolicitudes.set(datos);
        this.cargandoSignal.set(false);
      },
      (error) => {
        console.error('Error al cargar solicitudes:', error);
      },
    );
  }
}
