<template>
    <div className="ManipulandoVuex">
        <!-- <form @submit.prevent="enviarFormulario"> -->
        <p>Agregar nuevo elemento:</p>
        <div id="write-container">
            <input type="numbre" v-model="id">
            <input type="text" v-model="nombre" placeholder="Ingrese nombre" required />
            <input type="number" v-model="cantidad" placeholder="Ingrese cantidad" required />
            <div id="buttons">
                <button @click="agregarProducto">Agregar elemento</button>
                <button @click="eliminarProducto">Eliminar elemento</button>
                <button @click="actualizarProducto">Actualizar elemento</button>
            </div>
        </div>
        <!-- </form> -->
    </div>
</template>

<script>

export default {
    name: 'ManipulandoVuex-app',
    // Para darle un valor inicial al campo del formulario.
    data() {
        return {
            id: this.$store.state.moduloProducto.productos.length + 1,
            nombre: '',
            cantidad: '',
        }
    },
    methods: {
        agregarProducto() {
            // Crear un objeto con los datos del formulario
            const datosNuevos = {
                id: this.id,
                nombre: this.nombre,
                cantidad: this.cantidad,
            };

            // Llamar a la mutación con el objeto como payload/datosFormulario
            this.$store.commit('moduloProducto/AGREGAR_PRODUCTO', datosNuevos);

            // Resetear formulario
            this.resetForm();
        },
        actualizarProducto() {

            const datosActualizados = {
                id: this.id,
                nombre : this.nombre,
                cantidad : this.cantidad
            }

            this.$store.commit('moduloProducto/ACTUALIZAR_PRODUCTO', datosActualizados);

            this.resetForm();
        },
        eliminarProducto() {
            const idEliminar = this.id;

            this.$store.commit('moduloProducto/ELIMINAR_PRODUCTO', idEliminar);

            this.resetForm();
        },

        // Restablecer el formulario después de enviar los datos
        resetForm() {
            this.id = this.$store.state.moduloProducto.productos.length + 1;
            this.nombre = '';
            this.cantidad = '';
        }
    }
}

</script>

<style lang="scss">
.ManipulandoVuex {
    margin: 10px;
    background-color: black;
    padding: 5px 100px;
    color: white;
    text-align: center;

    #write-container {
        display: flex;
        flex-direction: column;

        input {
            margin: 5px;
        }

        #buttons {

            button {
                margin: 0 5px;
            }
        }
    }
}
</style>