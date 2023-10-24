<template>
    <section id="grid-container">

        <article v-for="character in todosLosPersonajes" :key="character.id">
            <img :src="character.image" alt="avatar" />
            <h1>{{ character.name }}</h1>
        </article>

    </section>
</template>

<script>

export default {
    name: 'grid2-app',
    props: [

    ],
    data() {
        return {
            todosLosPersonajes: [],

        }
    },
    mounted() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())  // funcion flecha -> Una linea   -- para parsear/convertir a json
            .then(data => {                     // funcion flecha -> Mas de una linea    -- para manipular datos
                console.log("Api cargada de personajes", data);
                this.todosLosPersonajes = data.results;
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    }

    // mounted(){
    //     let page = 1;
    //     let totalPage = 0;
    //     fetch("https://rickandmortyapi.com/api/character/")
    //         .then(response => response.json())
    //         .then(data => {     // Siempre manipular datos aca
    //             totalPage = data.info.pages
    //             console.log("Api",data)
    //             console.log("Api para cargar la cantidad de paginas", totalPage);
    //         })

    //     console.log("Cargo el totalPage perfectamente",totalPage)

    //     while(page !== 42){
    //         console.log("Entro al While")
    //         fetch("https://rickandmortyapi.com/api/character/?page=${page}")
    //             .then(response => response.json())
    //             .then(data => {
    //                 this.todosLosPersonajes = this.todosLosPersonajes.concat(data.results)
    //                 console.log("Personajes cargados", this.todosLosPersonajes)
    //             })
    //         page++
    //     }

    // }
}

</script>

<style lang="scss">
#grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 10px;
    gap: 10px;


    article {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background-color: black;
        cursor: pointer;

        &:hover {
            // animation-name: imgZoom;
            // animation-duration: .3s;
            // animation-fill-mode: forwards;
            img {
                animation-name: imgZoom;
                animation-duration: .3s;
                animation-fill-mode: forwards;
            }

            h1{
                animation-name: textMove;
                animation-duration: 0.5s;
                animation-fill-mode: forwards;
            }
        }


        img {
            width: 100%;
            height: fit-content;
            border-radius: 5px 5px 0 0;
            padding: 5px;

        }

        h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            color: green;
            // background-color: black;
            border-radius: 0 0 5px 5px;
            height: 55px;
        }
    }
}

@keyframes imgZoom {
    to {
        padding: 1px;
    }
}

@keyframes textMove{
    33%{
        margin-left: 30px;
    }
    66%{
        margin-right: 15px;
    }
    100%{
        margin: 0;
    }
}
</style>