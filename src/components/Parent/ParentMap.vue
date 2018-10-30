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
              <a class="nav-link" href="/parent-advice"><i class="fas fa-bullhorn"></i> Avisos de falta</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/parent-assistance"><i class="fas fa-clipboard-list"></i> Asistencia</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");

export default {
  name: "ParentMap",
  methods:{
      logout() {
          fb.auth.signOut()
          .then(() =>{
              this.$router.replace("login");
          });
      }
  }
};
</script>

<style>
</style>
