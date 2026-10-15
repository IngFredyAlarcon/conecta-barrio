import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
    },
    {
        path: 'solicitudes',
        loadComponent: () =>
        import('./pages/solicitudes-listado/solicitudes-listado').then(m => m.SolicitudesListado)
    }
];
