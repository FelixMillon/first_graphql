<template>
  <div id="app-container">
    <div id="app-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app-content {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
