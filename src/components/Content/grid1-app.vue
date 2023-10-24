<template>
    <section>
        <ul v-for="articulo in articulos" :key="articulo">
            <li>{{ articulo.nombre }}</li>
        </ul>
    </section>
</template>

<script>
// import tarjetaApp from '../Content/Tarjeta/tarjeta-app.vue';

export default {
    name: 'grid1-app',
    methods: [
        // tarjetaApp,
    ],
    data() {
        return {
            articulos: [
                { nombre: "Lays", cantidad: 10 },
                { nombre: "Coca-Cola", cantidad: 3 },
                { nombre: "Neumatico", cantidad: 4 },
                { nombre: "Estereo", cantidad: 1 },
                { nombre: "Alfajor", cantidad: 30 },
                { nombre: "Notebook", cantidad: 1 },
                { nombre: "Mouse", cantidad: 2 },
                { nombre: "Auriculares", cantidad: 4 },
                { nombre: "Viaje", cantidad: 7 }
            ]
        }
    }
}

</script>

<style lang="scss"></style>