import Vue from 'vue';
import Buefy from 'buefy';
import _ from 'lodash';
import App from '@/views/App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';


Vue.config.productionTip = false;

// Import Buefy
Vue.use(Buefy, {
    defaultIconPack: 'fas',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
