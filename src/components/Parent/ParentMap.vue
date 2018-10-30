<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow-m" style="background-color: #98c22b;">
            <a href="#">
                <img src="../../assets/logo.png" height="60" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/parent-advice">
                            <i class="fas fa-bullhorn"></i> Avisos de falta</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/parent-assistance">
                            <i class="fas fa-clipboard-list"></i> Asistencia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="logout">
                            <i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </nav>

        <Map appId="kjUJtSCkxIEv0qQOYCUE" appCode="3lVlTVLLiPXEesKAAu1HgQ" location=" Benito Juarez, CDMX" lat="19.3983994" lng="-99.1576614" width="100%" height="500px" />
    </div>
</template>

<script>
import Map from "../Map.vue";
const fb = require("../../firebaseConfig.js");

const platform = new H.service.Platform({
  app_id: "kjUJtSCkxIEv0qQOYCUE",
  app_code: "3lVlTVLLiPXEesKAAu1HgQ"
});

export default {
  name: "ParentMap",
  components: { Map },
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
        this.$router.replace("login");
      });
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
