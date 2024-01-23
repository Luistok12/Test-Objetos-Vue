// import { createStore } from 'vuex';

// // El estado representa un estado global de la aplicacion web
// const state = {
//   items: [
//     {id:1, nombre:"Fiat Siena", cantidad:1},
//     {id:2, nombre:"Volswagen Gol", cantidad:1},
//     {id:3, nombre:"Renault Fluence", cantidad:1}
//   ],
//   mensaje: "Hola, vuex se esta usando",
//   nombre: "Fulanito",
// };

// // Las mutaciones son los cambios en el estado global
// const mutations = {
//   addItem(state, item) {
//     state.items.push(item);
//   },
// };

// // Las acciones se comunican con las mutaciones y recien esta puede mutar.
// const actions = {
//   addItem({ commit }) {
//     const item = {
//       id: Date.now(),
//       name: 'John Doe',
//       cantidad: 5,
//     };
//     commit('addItem', item);
//   },
// };

// // Para retornar un estado,
// const getters = {
//   items(state){
//     return state.items;
//   },
//   mensaje(state){
//     return state.mensaje;
//   },
//   mensajeCompleto(state){
//     return `${state.mensaje} ${state.nombre}`;
//   }
// }

// const storeNormal = createStore({
//   state,
//   mutations,
//   actions,
//   getters,
// });

// export default storeNormal;

// ----------------------- Esta forma es la forma mas vieja, y no es tan profesional (Arriba) ----------------------------


// moduloProducto.js

const state = {
  productos: [
    { id: 1, nombre: "Fiat Siena", cantidad: 1 },
    { id: 2, nombre: "Volswagen Gol", cantidad: 1 },
    { id: 3, nombre: "Renault Fluence", cantidad: 1 }
  ],
  productos2:[
    { id: 1, nombre: "Producto extra 1", cantidad: 1 },
    { id: 2, nombre: "Productos extra 2", cantidad: 1 },
    { id: 3, nombre: "Producto extra 3", cantidad: 1 }
  ]
}

const mutations = {
  AGREGAR_PRODUCTO(state, payload) {
    state.productos.push(payload);
  },
  ACTUALIZAR_PRODUCTO(state, payload) {
    // console.log("Esta en la mutations 'actualizar'",payload);
    const producto = state.productos.find((p) => p.id == payload.id);
    producto.nombre = payload.nombre;
    producto.cantidad = payload.cantidad;
    
  },
  ELIMINAR_PRODUCTO(state, payload) {
    // console.log("Esta en la mutations 'eliminar'",payload);
    state.productos = state.productos.filter((p) => p.id != payload);
  }
};

export default {
  namespaced: true,   // evita colisiones de nombres si tienes múltiples módulos.
  state,
  mutations,
};