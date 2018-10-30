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
    <div class="wrapper mt-5">
      <div id="formContent">
        <div class="mt-5">
          <h5>AVISO DE FALTA</h5>
        </div>
        <form class="mt-5" @submit.prevent="advice">
          <input type="text" v-model="student" disabled>
          <input type="text" v-model="code" disabled>
          <input type="text" v-model="group" disabled>
          <select class="date dateDay" v-model="day">
            <option v-for="i in 31">{{i}}</option>
          </select>
          <select class="date dateMonth" v-model="month">
            <option v-for="i in months">{{i}}</option>
          </select>
          <select class="date dateYear" v-model="year">
            <option v-for="i in years">{{i}}</option>
          </select>
          <select v-model="motive">
            <option value="" disabled selected>Motivo</option>
            <option value="Enfermedad">Enfermedad</option>
            <option value="Consulta médica">Consulta médica</option>
            <option value="Compromiso familiar">Compromiso familiar</option>
            <option value="Otro">Otro</option>
          </select>
          <button class="px-5 btn btn-orange my-5" type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
export default {
  name: "ParentAdvice",
  data() {
    return {
      student: "",
      code: "",
      group: "",
      motive: "",
      date: "",
      day: "",
      month: "",
      year: "",
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      years: [
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030
      ]
    };
  },
  created() {
    let user = fb.auth.currentUser;
    fb.usersCollection.get().then(username => {
      username.forEach(element => {
        if (element.data().username === user.email) {
          this.student = `Alumno - ${element.data().student}`;
          this.code = `Código - ${element.data().code}`;
          this.group = `Grupo - ${element.data().group}`;
        }
      });
    });
  },
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
        this.$router.replace("login");
      });
    },
    advice() {
      this.date = `${this.day}/${this.month}/${this.year}`;
      fb.assistanceCollection
        .add({
          student: this.student.substr(9),
          code: this.code.substr(9),
          date: this.date,
          present: "No"
        })
        .then(() => console.log("Enviado"))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.date {
  display: inline-block;
  font-size: 12px;
}

.dateDay {
  width: 22% !important;
}

.date option,
.date2 option {
  font-size: 12px;
}

.dateMonth {
  width: 32% !important;
}
.dateYear {
  width: 27% !important;
}
.shadow-m {
  -webkit-box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
