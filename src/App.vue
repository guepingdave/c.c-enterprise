<template>
  <div id="app">
    <!-- Navigation bar or static content can be added here -->
    
    <!-- The router-view renders the component for the active route -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App', // Component name for debugging purposes
};
</script>

<style>
/* Global styles that apply to the entire app */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #1e3b6b; /* Dark blue background */
  color: white;
}

#app {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
