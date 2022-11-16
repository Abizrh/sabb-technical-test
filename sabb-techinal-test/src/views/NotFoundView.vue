<template>
  <div class="wrapper">
    <h2>Oops! Page not found.</h2>
    <router-link to="/" class="main-btn">Home</router-link>
    <div>
      <img src="../assets/404.webp" alt="404" />
    </div>

  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  background-color: #88efc8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  text-align: center;
}
.wrapper h2 {
  margin: 40px 0;
  font-size: 2.5rem;
}
.wrapper img {
    margin-top: 15px;
  width: 600px;
  max-width: 75%;
}
.wrapper h4 {
  margin: 40px 0 20px;
  font-size: 1.2rem;
}
.main-btn {
  text-decoration: none;
  padding: 15px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 6px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .wrapper h2 {
    font-size: 2rem;
  }
  .wrapper h4 {
    font-size: 1rem;
  }
}
</style>
