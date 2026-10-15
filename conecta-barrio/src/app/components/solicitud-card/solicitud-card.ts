import { Component, input, Input } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';

@Component({
  imports: [],
  selector: 'app-solicitud-card',
  styleUrl: './solicitud-card.css',
  templateUrl: './solicitud-card.html',
})
export class SolicitudCard {
  @Input() id = 0;
  @Input() userId = 0;
  @Input() title = '';
  @Input() body = '';

  solicitud = input.required<Solicitud>();
}
