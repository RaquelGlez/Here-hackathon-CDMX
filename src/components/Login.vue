<template class="bg">
  <div class="wrapper mt-5">
    <div id="formContent">
      <div class="my-4">
        <img class="img-fluid" src="../assets/logo.png" id="icon" width="200" />
      </div>
      <form @submit.prevent="login">
        <input type="text" placeholder="Nombre de usuario" v-model="username">
        <input type="password" placeholder="Contraseña" v-model="password">
        <button class="px-5 btn btn-orange my-5" type="submit">INGRESAR</button>
      </form>
    </div>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");
export default {
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    login() {
      fb.auth
        .signInWithEmailAndPassword(this.username, this.password)
        .then(user => {
          fb.usersCollection
            .get()
            .then(username => {
              username.forEach(element => {
                if (element.data().username === this.username) {
                  if (element.data().type === "school") {
                    this.$router.replace("school-map");
                  } else if (element.data().type === "driver") {
                    this.$router.replace("driver-map");
                  } else if (element.data().type === "parent") {
                    this.$router.replace("parent-map");
                  }
                }
              });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
        });
    }
  }
};
</script>

<style>
.table {
  background-color: #f8f9fa;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
.btn-orange {
  background-color: #f15a24;
  color: #fff;
  font-weight: bold;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: #98c22b;
  padding: 30px;
  width: 90%;
  max-width: 550px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}
input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
input[type="text"],
input[type="password"],
select {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type="text"]:placeholder {
  color: #cccccc;
}
</style>

