<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <div id="background">
    <AppHeader />

    <main id="app_main">
      <router-view></router-view>
    </main>
    <!-- /#app_main -->

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
#background {
  background-image: url(./assets/img/pexels-felix-mittermeier-956999.jpg);
  height: 100%;
  background-size: cover;

}

#app_main {
  height: 100%;
}

</style>