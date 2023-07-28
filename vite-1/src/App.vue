<script>
import Title from './components/Title.vue';
import Btn from './components/Btn.vue';
import Nav from './components/Nav.vue';
export default {
  data() {
    return {

    }
  }, components: {
    Title, Btn, Nav
  }
}
</script>

<template>
  <!-- <h1>hello Vite</h1> -->
  <!-- <Title></Title>
  <Btn>add</Btn> -->
  <Nav />
  <h1 class="text-amber-200">heell</h1>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  color: #987;
}
</style>
