<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="logo">
          <figure class="image is-square">
            <img alt="Vue logo" src="./assets/logo.png">
          </figure>
        </div>
        <h1 class="title">Vue.js Component Library</h1>
        <div class="elements-demo">
          <p class="title is-4">
            In Progress
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .section {
    .container {
      div {
        margin: auto;
      }
      .logo {
        max-width: 200px;
        max-height: 200px;
      }
      .elements-demo {
        max-width: 600px;
      }
    }
  }
}
</style>
