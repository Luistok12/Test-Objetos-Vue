<template>
    <h1>Usando Vuex</h1>
    <section id="usando-vuex">
        <ListaElementos :items="productos" />
        <ListaElementos :items="productos2" />
        <ManipulandoVuex :store="moduloProducto"/>
    </section>
</template>

<script>
import ListaElementos from '../Content/ComponentsExtras/ListaElementos.vue';
import ManipulandoVuex from '../Content/ComponentsExtras/ManipulandoVuex.vue';

// import { useStore } from 'vuex-composition-api';     // Esto es para Vue 2
// import { useStore } from 'vuex';    // Para acceder a un store (Vuex)
import { mapState, mapActions } from 'vuex';  // mapState: Mapear estado de modulos, mapActions: Mapear actions de mod.

export default {
    name: 'Prueba2-app',
    components: {
        ListaElementos,
        ManipulandoVuex,
    },
    computed: {
        ...mapState('moduloProducto', ['productos', 'productos2']),
    },
    methods: {
        ...mapActions('moduloProducto', ['AGREGAR_PRODUCTO', 'ACTUALIZAR_PRODUCTO', 'ELIMINAR_PRODUCTO']),
    },
    // setup() {
    //     // setup() para codigo que requiera de un paquete o dependencia, para usar con useStore!
    //     const storeNormal = useStore();
    //     const productos = storeNormal.moduloProducto.state.productos;
    //     // const productosActions = storeNormal.reducers.productos;

    //     return { productos };   // Valor de la prop!

    //     // return {productos: storeNormal.state.productos};
    // },
}

</script>

<style lang="scss"></style>