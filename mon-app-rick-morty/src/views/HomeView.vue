<template>
  <div class="home-container">
    <h1 class="home-title">Bienvenue sur mon Projet de Développement Durable</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
}

.home-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.home-intro, .home-footer {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
} 

.questions-overview {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.overview-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}

.questions-list {
  list-style: none;
  padding-left: 0;
  font-size: 18px;
}

.questions-list li strong {
  font-weight: bold;
}

@media (max-width: 768px) {
  .home-container {
    padding: 20px;
  }

  .home-title {
    font-size: 26px;
  }

  .overview-title {
    font-size: 20px;
  }
}
</style>
