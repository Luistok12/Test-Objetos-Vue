<template>
    <nav>
        <ul class="menu">
            <li>Inicio</li>
            <li class="submenu-container">
                Categorias
                    <ul class="submenu">
                        <li>Auto</li>
                        <li>Moto</li>
                        <li>Bicicleta</li>
                    </ul>
            </li>
            <li>Contactos</li>
            <li>Agregar objeto</li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'header-app'
}

</script>

<style lang="scss" scoped>
nav {
    background-color: grey;
    opacity: 0.8;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    .menu {
        display: flex;
        justify-content: center;
        position: relative;
        // list-style: none;

        // li general
        li {
            background-color: rgb(104, 103, 103);
            padding: 10px;
            border-radius: 10px;
            position: relative;
            cursor: pointer;
            list-style: none;
            margin: 0 3px 0 3px;
            transition: background-color 0.3s ease-in-out;
            /* Agregamos transición */


            &:hover {
                background-color: rgb(189, 183, 183);

                // li diferente que cambia al pasarle el puntero por encima
                &.submenu-container {
                    border-radius: 10px 10px 0 0;

                    .submenu {
                        display: block;
                        position: absolute;

                        li {
                            border-radius: 0;
                        }
                    }
                }

            }

            .submenu {
                display: none;
                position: absolute;
                width: 106%;
                top: 100%; // Importantisimo, para acomodar el submenu
                // left: 0;    // Importantisimo, para acomodar el submenu
                left: -41%;


                li {
                    display: block;
                    border-top: 1px solid black;
                }
            }
        }
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.5s ease-in-out;
    }

    .slide-enter {
        transform: translateY(-100%);
    }

    .slide-leave-to {
        transform: translateY(100%);
    }
}
</style>