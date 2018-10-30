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
            <a class="nav-link" href="/parent-map">
              <i class="fas fa-map-marked-alt"></i> Mapa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/parent-advice">
              <i class="fas fa-bullhorn"></i> Avisos de falta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">
              <i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="wrapper mt-5">
      <div id="formContent">
        <div class="mt-5">
          <h5>REGISTRO DE ASISTENCIA</h5>
        </div>
        <form class="my-5">
          <input type="text" v-model="student" disabled>
          <input type="text" v-model="code" disabled>
          <input type="text" class="mb-5" v-model="group" disabled>
          <table class="table table-responsive">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dateA in date">
                <th scope="row">{{dateA.date}}</th>
                <th>{{dateA.present}}</th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
const fb = require("../../firebaseConfig.js");
export default {
  name: "ParentAssistance",
  data() {
    return {
      student: "",
      group: "",
      code: "",
      date: []
    };
  },
  created() {
    let user = fb.auth.currentUser;
    fb.usersCollection.get().then(username => {
      username.forEach(element => {
        if (element.data().username === user.email) {
          // console.log(element.data());
          this.student = `Alumno - ${element.data().student}`;
          this.code = `Código - ${element.data().code}`;
          this.group = `Grupo - ${element.data().group}`;
        }
      });
    });

    fb.assistanceCollection.get().then(assistance => {
      assistance.forEach(element => {
        if (element.data().code === this.code.substr(9)) {
          this.date.push({
            date: element.data().date,
            present: element.data().present
          });
        }
      });
    });
  },
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
</style>
