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
            <a class="nav-link" href="/school-map">
              <i class="fas fa-map-marked-alt"></i> Mapa</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/school-assistance">
              <i class="fas fa-clipboard-list"></i> Asistencia</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#" @click="logout">
              <i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="wrapper mt-5">
      <div id="formContent">
        <div class="mt-5">
          <h5>REGISTRO DE ALUMNO</h5>
        </div>
        <form class="mt-5" @submit.prevent="register">
          <input type="text" v-model="student" placeholder="Nombre del alumno">
          <input type="text" v-model="code" placeholder="Código de alumno">
          <input type="text" v-model="group" placeholder="Grupo de alumno">
          <input type="text" v-model="username" placeholder="Nombre de usuario">
          <input type="password" v-model="password" placeholder="Contraseña">
          <button class="px-5 btn btn-orange my-5" type="submit">REGISTRAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");

export default {
  name: "SchoolRegister",
  data() {
    return {
      username: "",
      password: "",
      student: "",
      group: "",
      code: "",
      type: "parent"
    };
  },
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
        this.$router.replace("login");
      });
    },
    register() {
      fb.usersCollection
        .add({
          student: this.student,
          code: this.code,
          group: this.group,
          username: this.username,
          type: this.type
        })
        .then(() => console.log("Enviado"))
        .catch(error => console.log(error));

      fb.auth
        .createUserWithEmailAndPassword(this.username, this.password)
        .catch(function(error) {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  }
};
</script>

<style>
</style>
