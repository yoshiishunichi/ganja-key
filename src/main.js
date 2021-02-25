import { createApp } from 'vue';
import App from './index.vue';

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('chrome') != -1) {
  //
} else {
  alert('ご覧のブラウザは対応しておりません\nChromeをお使いください');
}

createApp(App).mount('#app');
