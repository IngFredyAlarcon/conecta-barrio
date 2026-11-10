import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Conecta-Barrio · Conectanto comunidades y vecinos',
    loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio),
  },
  {
    path: 'solicitudes',
    title: 'Conecta-Barrio · Solicitudes de Atención',
    loadComponent: () =>
      import('./pages/solicitudes-listado/solicitudes-listado').then((m) => m.SolicitudesListado),
  },
  {
    path: 'solicitud-nueva',
    title: 'Conecta-Barrio · Nueva Solicitud de Atención',
    loadComponent: () =>
      import('./pages/solicitud-nueva/solicitud-nueva').then((m) => m.SolicitudNueva),
  },
  {
    path: 'solicitudes/:id',
    title: 'Conecta-Barrio · detalle de la Solicitud de Atención',
    loadComponent: () =>
      import('./pages/solicitud-detalle/solicitud-detalle').then((m) => m.SolicitudDetalle),
  },
  {
    path: 'lideres',
    title: 'Conecta-Barrio · Líderes por Barrio',
    loadComponent: () =>
      import('./pages/lideres-listado/lideres-listado').then((m) => m.LideresListado),
  },
  {
    path: '**',
    title: 'Página no encontrada · Conecta-Barrio',
    loadComponent: () => import('./pages/no-encontrada/no-encontrada').then(m => m.NoEncontrada)
  }
];
