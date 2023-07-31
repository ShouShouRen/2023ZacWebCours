<template>
  <div>
    <h1>Vue</h1>
    <Nav></Nav>
    <Transition name="fade">
      <div>
        <router-view></router-view>
      </div>
    </Transition>
    <hr>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {}
  },
  components: {
    Nav, HelloWorld
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

</style>