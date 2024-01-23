<template>
    <div className="ListaElementos">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.cantidad }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'ListaElementos',
    // Es la forma en la que el componente pueda "cargar" la prop que le asignaron! 
    // Ya que aca hay un template y no podemos colocar la prop ahi dentro.
    props: {
        // Aca le damos el nombre de la prop, que recibe un array y si o si se requiere que exista ese array
        // Esta es la variable a la que se le asignara la prop!!
        items: {
            type: Array,
            required: true,
        },
    },
}

</script>

<style lang="sass">
</style>