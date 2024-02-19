<template>
  <div id="app-container">
    <div id="app-content">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/question1">Question 1</router-link> 
      </nav>
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

nav {
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background-color: #f3f3f3;
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
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

@media (max-width: 600px) {
  nav {
    flex-direction: column;
  }

  nav a {
    margin-bottom: 10px;
  }
}
</style>
