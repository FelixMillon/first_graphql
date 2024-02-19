<template>
  <div class="home-container page-content">
    <h1 class="home-title">Rick & Morty</h1>
    <div v-if="loading" class="loading-message">
      Chargement...
    </div>
    <div v-else-if="error" class="error-message">
      Une erreur est survenue.
    </div>
    <div v-else-if="result && result.characters" class="questions-overview">
      <h2 class="overview-title">Liste des Personnages</h2>
      <div class="character-grid">
        <div v-for="character in result.characters.results" :key="character.id" class="character-item">
          <router-link :to="{ name: 'detail', params: { id: character.id }}">
            <img :src="character.image" alt="" class="character-image">
            <p class="character-name">{{ character.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="no-characters-message">
      Aucun personnage trouvé.
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.home-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.loading-message, .error-message, .no-characters-message {
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
}

.questions-overview {
  margin-top: 20px;
}

.overview-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.character-grid {
  display: flex;
  flex-wrap: wrap;
}

.character-item {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  margin-right: 20px;
  box-sizing: border-box;
}

.character-image {
  width: 100%;
  height: auto;
}

.character-name {
  text-align: center;
  margin-top: 10px;
}
</style>



<script>
import { useQuery } from '@vue/apollo-composable';
import { gql } from '@apollo/client/core';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export default {
  name: 'HomeView',
  setup() {
    const { result, loading, error } = useQuery(GET_CHARACTERS);
    return { result, loading, error };
  },
}
</script>
