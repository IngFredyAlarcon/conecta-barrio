import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Solicitudes } from './services/solicitudes';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conecta-barrio');
  private solicitudesService = inject(Solicitudes);
}
