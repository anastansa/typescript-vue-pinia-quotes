<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Quotes</RouterLink>
				<RouterLink to="/random">Random</RouterLink>
				<RouterLink to="/tags">Tags</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 4rem 0;
}

nav a.router-link-exact-active {
  text-decoration: underline;
	text-underline-offset: 8px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.346);
}

nav a:first-of-type {
  border: 0;
}
</style>
