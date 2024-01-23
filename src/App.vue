<template>
  <div id="app">
    <header>
      <!-- <headerApp /> -->
      <header2App />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<!-- Si usamos vue-cli y no nos dio la opcion de que tipo de estilo usar: (Sass) -> npm install node-sass --save-dev
                                                                                    npm install sass-loader --save-dev 
correr el servidor en una nueva terminar nuevamente : npm run serve                                -->

<script>
// import headerApp from "../src/components/Header/header-app.vue";
import header2App from "../src/components/HeaderConDirectiva/header2-app.vue"

export default {
  name: 'App',
  components: {
    // headerApp,
    header2App,
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: linear-gradient(45deg, red, orange, yellow, violet);
  background-repeat: no-repeat;
}

#app{
  main{
    display: grid;
    place-items: center;
    min-height: 100vh;
  }
}


</style>
