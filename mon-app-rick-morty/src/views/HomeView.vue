<template>
  <div class="home-container page-content">
    <h1 class="home-title">Rick & Morty</h1>
    <div v-if="loading">
      Chargement...
    </div>
    <div v-else-if="error">
      Une erreur est survenue.
    </div>
    <div v-else-if="result && result.characters">
      <div class="questions-overview">
        <h2 class="overview-title">Liste des Personnages</h2>
        <ul class="questions-list">
          <li v-for="character in result.characters.results" :key="character.id">
            <router-link :to="{ name: 'detail', params: { id: character.id }}">
              <img :src="character.image" alt="" style="width: 50px; height: auto;"> {{ character.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      Aucun personnage trouvé.
    </div>
  </div>
</template>


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
