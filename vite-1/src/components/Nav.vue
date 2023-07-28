<template>
  <nav>
    <a href="#" class="nav-logo">logo</a>
    <div class="nav-menu">
      <a href="#" class="nav-link">Link</a>
      <a href="#" class="nav-link">Link</a>
      <a href="#" class="nav-link">Link</a>
      <a href="#" class="nav-link text-amber-300">Link</a>
    </div>
  </nav>
</template>

<script>
   import '../style.css';
</script>

<style>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  min-height: 64px;
}

nav a {
  display: inline-block;
  padding: 4px 16px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
</style>