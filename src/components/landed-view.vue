<template>
  <section class="landed ">
    <div class="container">
    <h2>Just Landed</h2>
    <div class="cards">
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
      <div class="card">
        <h1>New-in Womenswear</h1>
        <routerLink :to="{ path: '/' }" class="btn"> Shop now </routerLink>
      </div>
    </div>
</div>
  </section>
</template>

<script>
export default {
  setup(props) {},
};
</script>

<style scoped>
section {
  background: #f3f3f3;
}
.container {
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  /* justify-content: space-between; */
  gap: 20px;
}
.card{
    display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background: #102B2B;
  color: #fff;
  width: 100%;
}
.card h5{
    font-size: var( --wp--preset--font-size--normal);
    width: 50%;
}
@media screen and (min-width: 768px) {
    .card h5{    font-size: var( --wp--preset--font-size--medium);
}
    .cards{
        gap:30px;
    }
    .card{
        width:calc(( 100% - 60px) / 3);
    }
  .container {
    width: 750px;
  }
  .container h2 {
    font-size: var(--wp--preset--font-size--large) !important;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container h2 {
  color: var(--wc-black-text);
  font-size: var(--wp--preset--font-size--medium);
  font-weight: 700;
}
</style>
