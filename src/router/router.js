// import Vue from 'vue';
// import VueRouter from 'vue-router';
import Home from '/src/components/Content/home-app.vue';
import Categorias from '/src/components/Content/categorias-app.vue';
import Sucursales from '/src/components/Content/sucursales-app.vue';
import Contactos from '/src/components/Content/contactos-app.vue';
import Galeria from '/src/components/Content/galeria-app.vue';
import Practica1 from '/src/components/Content/practicaConArrays-app.vue';
import Practica2 from '/src/components/Content/practicaConArraysDeObjetos-app.vue';
import Autos from '/src/components/Content/Subcategorias/autos-app.vue';
import Motos from '/src/components/Content/Subcategorias/motos-app.vue';
import Bicicletas from '/src/components/Content/Subcategorias/bicicletas-app.vue';
import { createRouter, createWebHistory } from 'vue-router'; 

// Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/categorias', component: Categorias },
  { path: '/sucursales', component: Sucursales },
  { path: '/contactos', component: Contactos },
  { path: '/galeria', component: Galeria },
  { path: '/practica1', component: Practica1 },
  { path: '/practica2', component: Practica2 },
  { path: '/autos', component: Autos },
  { path: '/motos', component: Motos },
  { path: '/bicicletas', component: Bicicletas },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;

// Borrar si o si esas 2 importaciones y el vue.use