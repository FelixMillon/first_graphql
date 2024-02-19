<template>
  <div class="detail-container page-content">
    <h1>Détails du Personnage</h1>
    <div v-if="loading">
      Chargement...
    </div>
    <div v-else-if="error">
      Une erreur est survenue.
    </div>
    <div v-else-if="result && result.character">
      <div>
        <h2>{{ result.character.name }}</h2>
        <img :src="result.character.image" alt="Image du personnage" style="width: 100%; max-width: 400px;">
        <p><strong>Status:</strong> {{ result.character.status }}</p>
        <p><strong>Species:</strong> {{ result.character.species }}</p>
        <p><strong>Type:</strong> {{ result.character.type || "N/A" }}</p>
        <p><strong>Gender:</strong> {{ result.character.gender }}</p>
        <p><strong>Origin:</strong> {{ result.character.origin.name }}</p>
        <p><strong>Location:</strong> {{ result.character.location.name }}</p>
        <div>
          <strong>Episodes:</strong>
          <ul>
            <li v-for="episode in result.character.episode" :key="episode.name">{{ episode.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      Aucun détail disponible pour ce personnage.
    </div>
    <router-link to="/" class="back-button">Retour à l'accueil</router-link>
  </div>
</template>


<script>
import { useQuery } from '@vue/apollo-composable';
import { gql } from '@apollo/client/core';

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
      }
    }
  }
`;
export default {
  name: 'DetailView',
  props: ['id'],
  setup(props) {
    // Utiliser l'ID du personnage passé en prop pour effectuer la requête
    const { result, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
      id: props.id,
    });

    return { result, loading, error };
  },
}
</script>

<style scoped>
.detail-container p,
.detail-container ul {
  margin: 10px 0;
}

.detail-container ul {
  list-style-type: none;
  padding-left: 20px;
}

.detail-container li {
  line-height: 1.6;
}
</style>
