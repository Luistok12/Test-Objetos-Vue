// import Vue from 'vue';
// import VueRouter from 'vue-router';

// import Categorias from '/src/components/Content/home-app.vue';
// import Categorias from '/src/components/Content/categorias-app.vue';
// import Sucursales from '/src/components/Content/sucursales-app.vue';
// import Contactos from '/src/components/Content/contactos-app.vue';
// import Galeria from '/src/components/Content/galeria-app.vue';
// import Practica1 from '/src/components/Content/practicaConArrays-app.vue';
// import Practica2 from '/src/components/Content/practicaConArraysDeObjetos-app.vue';

// import Autos from '/src/components/Content/Subcategorias/autos-app.vue';
// import Motos from '/src/components/Content/Subcategorias/motos-app.vue';
// import Bicicletas from '/src/components/Content/Subcategorias/bicicletas-app.vue';

import Grid1 from '/src/components/Content/grid1-app.vue';
import Grid2 from '/src/components/Content/grid2-app.vue';
import { createRouter, createWebHistory } from 'vue-router'; 

// Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('/src/components/Content/home-app.vue') },
  { path: '/categorias', 
    component: () => import('/src/components/Content/categorias-app.vue') ,
    children: [
      { path: 'autos' , component: () => import('/src/components/Content/Subcategorias/autos-app.vue') },
      { path: 'motos' , component: () => import('/src/components/Content/Subcategorias/motos-app.vue') },
      { path: 'bicicletas' , component: () => import('/src/components/Content/Subcategorias/bicicletas-app.vue') }
    ],
  },
  { path: '/sucursales', component: () => import('/src/components/Content/sucursales-app.vue') },
  { path: '/contactos', component: () => import('/src/components/Content/contactos-app.vue') },
  { path: '/galeria', component: () => import('/src/components/Content/galeria-app.vue') },
  { path: '/practica1', component: () => import('/src/components/Content/practicaConArrays-app.vue') },
  { path: '/practica2', component: () => import('/src/components/Content/practicaConArraysDeObjetos-app.vue') },

  { path: '/grid1', component: Grid1 },
  { path: '/grid2', component: Grid2 },

  // { path: '/autos', component: Autos },
  // { path: '/motos', component: Motos },
  // { path: '/bicicletas', component: Bicicletas },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;

// Borrar si o si esas 2 importaciones y el vue.use