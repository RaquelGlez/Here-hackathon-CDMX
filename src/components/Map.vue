<template>
    <div id="divmap">
        <Drivermap appId="kjUJtSCkxIEv0qQOYCUE" appCode="3lVlTVLLiPXEesKAAu1HgQ" location=" Benito Juarez, CDMX" lat="19.3983994" lng="-99.1576614" width="100%" height="500px" />
    </div>
</template>

<script>
import Drivermap from "./Driver/DriverMap.vue";
export default {
  name: "Map",
  components: {
    Drivermap
  }
};
</script>

<style>
#divmap {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
