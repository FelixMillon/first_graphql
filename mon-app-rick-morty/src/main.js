import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import apolloClient from './apollo/apollo-client.ts';
import { DefaultApolloClient } from '@vue/apollo-composable';

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.use(router).mount('#app');
