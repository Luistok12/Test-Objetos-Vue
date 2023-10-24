<template>
    <nav class="menu-container">
        <ul class="menu">
            <li class="item-list"><router-link to="/" class="link">Inicio</router-link></li>
            <li class="submenu-container item-list" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
                <router-link to="/categorias" class="link">Categorias</router-link>
                <!-- <transition name="slide"> -->
                <ul class="submenu" v-show="showSubmenu">
                    <li class="item-list"><router-link to="/autos" class="link-submenu">Auto</router-link></li>
                    <li class="item-list"><router-link to="/motos" class="link-submenu">Moto</router-link></li>
                    <li class="item-list"><router-link to="/bicicletas" class="link-submenu">Bicicleta</router-link></li>
                </ul>
                <!-- </transition> -->
            </li>
            <li class="item-list"><router-link to="/sucursales" class="link">Sucursales</router-link></li>
            <li class="item-list"><router-link to="/galeria" class="link">Array v-for en li VUE</router-link></li>
            <li class="item-list"><router-link to="/contactos" class="link">Array de objetos con v-for</router-link></li>
            <li class="item-list"><router-link to="/practica1" class="link">Practica con Arrays</router-link></li>
            <li class="item-list"><router-link to="/practica2" class="link">Practica con Arrays de Objetos</router-link></li>
            <li class="item-list"><router-link to="/grid1" class="link">Tarjetas con GRID</router-link></li>
            <li class="item-list"><router-link to="/grid2" class="link">Galeria con GRID</router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'header2-app',
    data() {
        return {
            showSubmenu: false,
        };
    },
}

</script>

<style lang="scss" scoped>
.menu-container {
    margin: 10px;
    background-color: grey;
    opacity: .8;
    border-radius: 10px;
    padding: 20px;

    .menu {
        display: flex;
        justify-content: center;

        .item-list {
            list-style: none;
            background-color: rgb(99, 99, 99);
            border-radius: 10px;
            // padding: 1px;        // Nunca 
            margin: 0 3px 0 3px;
            cursor: pointer;

            &:hover,
             :focus {
                background-color: rgb(173, 171, 171);
                transition: background-color 0.2s ease-out;
            }

            .link {
                color: white;
                text-decoration: none;
                padding: 10px;
                display: inline-block;  // Importantisimo el display: inline-block;
                border-radius: 10px;
                // border: 1px solid black;
            }
        }

        .submenu-container {
            position: relative;

            &:hover {
                border-radius: 10px 10px 0 0;
                animation-name: slideDown;
                animation-duration: 2s;
                animation-fill-mode: forwards;  /* Mantener estado final */
            }

            .submenu {
                position: absolute;
                list-style: none;
                top: 100%;
                left: -3%;
                width: 105.5%;
                border-radius: 10px;

                .item-list {
                    border-radius: 0;
                    // padding: 7px;        // Chau
                    border-top: 1px solid black;

                    &:last-child {
                        border-radius: 0 0 5px 5px;
                    }

                    .link-submenu{
                        display: inline-block;
                        width: 100%;
                        padding: 7px;
                        // box-sizing: border-box; // Para bloquear que elemento se pase de ese bloque

                        // display: flex;
                        // padding: 10px;
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}

@keyframes slideDown {
    from {
        max-height: 0;
    }

    to {
        max-height: 1000px;
    }
}</style>
