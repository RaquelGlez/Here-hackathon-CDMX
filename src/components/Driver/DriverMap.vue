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
            <a class="nav-link" href="/driver-assistance">
              <i class="fas fa-clipboard-list"></i> Asistencia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">
              <i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <div class="here-map"></div>
          <div ref="map" v-bind:style="{width: width, height: height}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
export default {
  name: "DriverMap",
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
        this.$router.replace("login");
      });
    }
  },
  data() {
    return {
      map: {},
      platform: {},
      geocoder: {}
    };
  },
  props: {
    appId: String,
    appCode: String,
    lat: String,
    lng: String,
    width: String,
    height: String,
    location: String
  },
  created() {
    this.platform = new H.service.Platform({
      app_id: this.appId,
      app_code: this.appCode
    });
    this.geocoder = this.platform.getGeocodingService();
  },
  mounted() {
    this.map = new H.Map(
      this.$refs.map,
      this.platform.createDefaultLayers().normal.map,
      {
        zoom: 14,
        center: { lng: this.lng, lat: this.lat }
      }
    );
    this.geocoder.geocode(
      { searchText: this.location },
      data => {
        if (data.Response.View.length > 0) {
          if (data.Response.View[0].Result.length > 0) {
            var coords =
              data.Response.View[0].Result[0].Location.DisplayPosition;
            this.map.setCenter({ lat: coords.Latitude, lng: coords.Longitude });
            this.map.addObject(
              new H.map.Marker({ lat: coords.Latitude, lng: coords.Longitude })
            );
          }
        }
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>

<style>
</style>
