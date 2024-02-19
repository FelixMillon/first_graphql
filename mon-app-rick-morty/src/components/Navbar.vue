<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/question1">Question 1</router-link></li>
        <li><router-link to="/question2">Question 2</router-link></li>
        <li><router-link to="/question3">Question 3</router-link></li>
        <li><router-link to="/question4">Question 4</router-link></li>
        <li><router-link to="/question5">Question 5</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    padding: 10px 0;
  }
  
  .navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .navbar li {
    padding: 5px 10px;
  }
  
  .navbar a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }
  
  .navbar a.router-link-exact-active, .navbar a:hover {
    color: #42b983;
  }
  
  @media (max-width: 768px) {
    .navbar ul {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar li {
      padding: 10px;
    }
  }
  </style>
  