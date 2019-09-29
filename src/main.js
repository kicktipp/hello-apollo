import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://fakeql.com/graphql/cfd966cf7bdcbf9bd17638b99acb7053'
});

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
});

Vue.use(VueApollo);
Vue.config.productionTip = false;

new Vue({
  apolloProvider: apolloProvider,
  render: h => h(App)
}).$mount('#app');

