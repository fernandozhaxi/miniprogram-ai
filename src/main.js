
import { createSSRApp } from 'vue';
import App from 'src/App.vue';
import store from './store';

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);
    return {
      app,
    };
}
