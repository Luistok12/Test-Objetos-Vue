<template>
    <h1>Practica final de Arrays con objetos</h1>
    <ul>
        <li v-for="elemento in objetos" :key="elemento">
            <span v-if="elemento.apodo !== 'Chavo'" :class="{ 'elementoOk': elemento }">{{ elemento.nombre }} => {{ elemento.apodo }}</span>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'contactos-app',
    data() {
        return {
            objetos: [
                { nombre: "Don Ramon", apodo: "Monchito" },
                { nombre: "Federico", apodo: "Kiko" },
                { nombre: "?", apodo: "Chavo" },
                { nombre: "Jirafales", apodo: "Longaniza" }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
ul {
    min-height: 50%;
    min-height: max-content;
    background-color: #fff;

    li .elementoOk {
        border: 1px solid black;
        list-style: none;
        display: flex;
    }
}
</style>