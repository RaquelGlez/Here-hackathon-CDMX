<template>
    <div class="container-fluid">
      <div class="row text-center h-100v justify-content-center align-items-center">
        <div class="col-md-12">
          <img src="../assets/logo.png" class="img-fluid img-height">
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "Home",
  created(){
    setTimeout(() => {
      this.$router.replace("login");
    }, 3000)
  }
};
</script>

<style>
.h-100v{
    height: 100vh;
}
.img-height{
  width: 400px;
	transform: translatey(0px);
	animation: float 1s ease-in-out infinite;
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
</style>
