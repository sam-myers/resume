import Vue from 'vue'
import App from './App.vue'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

import vueHeadful from 'vue-headful';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font awesome icons
library.add(faEnvelope);
library.add(faMapMarkerAlt);
library.add(faPhone);

// Register Vue components
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('vue-headful', vueHeadful);

// uikit
Vue.use(Vuikit);
Vue.use(VuikitIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
