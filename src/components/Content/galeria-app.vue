<template>
    <h1>Practica final de Arrays en VUE</h1>
    <ul>
        <li v-for="elemento in lista" :key="elemento">{{ elemento }}</li>
    </ul>
    <p>No puede haber v-for y un v-if en una etiqueta, para eso debemos usar un v-if dentro de una etiqueta span.</p>
    <h2>IMPORTANTE!!! : en VUE al hacer un for debe tener si o si una "clave" o "key", esta puede ser normalmente un ID del elemento o solamente elemento (Cuando llamamos "elemento" a los elementos de un array).</h2>
    <h3>Esta comentado la forma para hacerlo en Typescript!</h3>
</template>

<script>

export default {
    name: 'galeria-app',
    data(){
        return{
            lista : ["Hola", "Chau", "Vue"]
        }
    }
}

</script>


<!-- <script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class MiComponente extends Vue {
  miArray: number[] = [1, 2, 3, 4, 5];
}
</script> -->

<style lang="scss">

ul{
    list-style: disc;
}

h2{
    margin: 20px;
}

</style>