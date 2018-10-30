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
                    <li class="nav-item">
                        <a class="nav-link" href="/school-register">
                            <i class="fas fa-user-plus"></i> Registro</a>
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
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th>Código</th>
                                <th>Alumno</th>
                                <th>Asistencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dateA in date">
                                <th>{{dateA.date}}</th>
                                <th>{{dateA.code}}</th>
                                <th>{{dateA.student}}</th>
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
    fb.assistanceCollection.get().then(assistance => {
      assistance.forEach(element => {
        this.date.push({
          code: element.data().code,
          date: element.data().date,
          student: element.data().student,
          present: element.data().present
        });
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