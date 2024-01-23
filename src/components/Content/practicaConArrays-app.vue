<template>
    <p id="presentacion">Practica final de Arrays, agregando elementos al DOM</p>
    <main>
        <aside>
            <label for="elemento">Elemento: </label>
            <input type="text" placeholder="Ingrese elemento a agregar" id="element-input" v-model="nuevoElemento" />
            <input type="number" placeholder="Ingrese cantidad a agregar" id="element-input" v-model="nuevaCantidad" />
            <button class="btn" @click="agregarElementoFinal">Agregar elemento al final</button>
            <button class="btn" @click="agregarElementoInicio">Agregar elemento al inicio</button>
            <button class="btn" @click="eliminarElementoInicio">Eliminar primer elemento</button>
            <button class="btn" @click="eliminarElementoFin">Eliminar ultimo elemento</button>
            <label for="indice">Ingrese indice:</label><input type="number" v-model="indice" placeholder="Ingrese indice" />
            <button class="btn" @click="eliminaPorIndice">Elimine por indice</button>
        </aside>
        <section>
            <div>
                <p>Elementos:</p>
                <ul v-for="elemento in elementos" :key="elemento">
                    <li>{{ elemento.nombre }}</li>
                </ul>
            </div>
            <div>
                <p>Cantidades:</p>
                <ul v-for="elemento in elementos" :key="elemento">
                    <li>{{ elemento.cantidad }}</li>
                </ul>
            </div>
            <div>
                <p>Ids:</p>
                <ul v-for="elemento in elementos" :key="elemento">
                    <li>{{ elemento.id }}</li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: 'Prueba1-app',
    data() {
        return {
            elementos: [
                { id: 1, nombre: "Lays", cantidad: 10 },
                { id: 2, nombre: "Coca-Cola", cantidad: 3 },
                { id: 3, nombre: "Neumatico", cantidad: 4 },
                { id: 4, nombre: "Estereo", cantidad: 1 },
                { id: 5, nombre: "Alfajor", cantidad: 30 },
                { id: 6, nombre: "Notebook", cantidad: 1 },
                { id: 7, nombre: "Mouse", cantidad: 2 },
                { id: 8, nombre: "Auriculares", cantidad: 4 },
                { id: 9, nombre: "Viaje", cantidad: 7 }
            ],
            siguienteElemento: "",
            siguienteCantidad: 0,
            siguienteId: 9
        }
    },
    methods: {
        agregarElementoFinal() {
            if (this.nuevoElemento.trim() !== "" && this.nuevaCantidad !== 0) {
                this.siguienteId++;
                this.elementos.push({id: this.siguienteId, nombre: this.nuevoElemento, cantidad: this.nuevaCantidad });
            }
            else alert("Datos invalidos. Verifique y vuelva a intentarlo");
        },
        agregarElementoInicio() {
            if (this.nuevoElemento.trim() !== "" && this.cantidad !== 0) {
                this.elementos.unshift({ nombre: this.nuevoElemento, cantidad: this.nuevaCantidad });
                this.siguienteId = 0;
                this.elementos.forEach(elemento => {
                    elemento.id = this.siguienteId;
                    this.siguienteId++;
                });
            }
            else alert("Datos invalidos. Verifique y vuelva a intentarlo");
        },
        eliminarElementoInicio() {
            if (this.elementos.length !== 0) {
                this.elementos.shift();
            }
        },
        eliminarElementoFin() {
            if (this.elementos.length !== 0) {
                this.elementos.pop();
            }
        },
        eliminaPorIndice() {
            if (this.indice >= 0 && this.indice < this.elementos.length) {
                this.elementos.splice(this.indice - 1, 1);
            }
            else alert("Ingreso un indice que no existe");
        }
    }
}

</script>

<style lang="scss" scoped>
#presentacion {
    text-align: center;
    margin: 10px 10px 30px 10px;
    text-decoration: underline;
}

main {
    display: flex;

    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 600px;
        border-right: 1px solid black;

        #element-input,
        .btn {
            width: 50%;
            margin:5px;
        }
    }

    section {
        width: 70%;
        // margin-left: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin:10px 10px 10px 100px;

        p {
            margin: 20px 0;
        }
    }
}
</style>