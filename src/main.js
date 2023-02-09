import { createApp } from "vue";
import { createPinia } from "pinia";

import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import VueAwesomePaginate from "vue-awesome-paginate";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueAwesomePaginate);

app.mount("#app");
