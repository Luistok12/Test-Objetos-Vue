<template>
    <p>Practica de animacion!!!</p>
</template>

<script>

export default {
    name: 'HomePage',
    // data(){
    //     return{

    //     }
    // }
}

</script>

<style lang="scss" scoped>
p {
    font-size: larger;
    animation-name: smallToBig;
    animation-duration: 20s;
    padding: 10px;
    background-color: blue;
    color: yellow;
    border-radius: 10px;
}

@keyframes smallToBig { // pequeñoAGrande
    //Inicio
    from {
        font-size: smaller;
        color: red;
        background-color: white;
    }
    //Mitad
    50%{
        background-color: black;
    }
    //Final
    to {
        font-size: larger;
        padding: 10px;
        background-color: blue;
        color: yellow;
        border-radius: 10px;
    }
}
</style>