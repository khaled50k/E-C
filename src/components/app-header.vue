<template>
  <header>
    <div class="container">
      <routerLink :to="{ path: '/' }" class="logo">Brand</routerLink>
      <nav>
        <i
          v-show="isMobile"
          class="fa-solid fa-bars toggle-menu"
          :class="active ? 'active' : null"
          @click="() => (active = !active)"
        ></i>

        <ul class="icons">
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon"
              ><i class="fa-solid fa-heart"></i
            ></routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              <i class="fa-solid fa-cart-shopping"></i
            ></routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              <i class="fa-solid fa-circle-user"></i
            ></routerLink>
          </li>
        </ul>
        <ul v-show="isMobile" class="links"   :class="active ? 'active' : null">
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Home & Garden
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Furniture & Ligths
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Electricals
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Women
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Men
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Beauty
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Baby & Kids
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Sport & leisure
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Gifts
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Mother's Day
            </routerLink>
          </li>
          <li>
            <routerLink :to="{ path: '/' }" class="navbar-link icon">
              Sale & Offers
            </routerLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav-links container" v-show="!isMobile">
      <ul>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Home & Garden
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Furniture & Ligths
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Electricals
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Women
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Men
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Beauty
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Baby & Kids
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Sport & leisure
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Gifts
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Mother's Day
          </routerLink>
        </li>
        <li>
          <routerLink :to="{ path: '/' }" class="navbar-link icon">
            Sale & Offers
          </routerLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ref, onMounted, onUnmounted } from "vue";
export default {
  data() {
    return {
      toggler: false,
      active: false,
    };
  },
  components: { Swiper, SwiperSlide },
  setup(props) {
    const isMobile = ref(false);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        isMobile.value = true;
      } else {
        isMobile.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return { isMobile };
  },
};
</script>

<style scoped>
.container {
  padding:  15px;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    padding: 0 15px;
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
header {
  /* position: absolute; */
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 2px;
}
.links {
  display: none;
}
 ul.active {
  color: var();
  display: flex !important;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
}
header .logo {
  flex: 1;
  font-size: var(--wp--preset--font-size--large);
  font-weight: bolder;
  color: var(--wc-red);
}
header .container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* max-height: 60px; */
  position: relative;
}
nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav i.toggle-menu {
  cursor: pointer;
  order: 5;
  color: var(--wc-black-text);

  font-size: var(--wp--preset--font-size--normal);
  transition: 0.3s;
  position: relative;
  z-index: 2;
}
ul li a {
  padding: 20px 10px;
  display: block;
  color: var(--wc-black-text);
  text-decoration: none;
  font-size: var(--wp--preset--font-size--normal);
  transition: 0.3s;
  position: relative;
  z-index: 2;
}
ul li a.active,
ul li a:hover {
  color: var(--wc-red-ligth);
}
@media screen and (max-width: 768px) {
  nav ul li a {
    padding: 10px !important;
  }
}
.nav-links {
  justify-content: flex-start !important;
}
.nav-links ul {
  gap: 20px;
  overflow: auto;
}
.nav-links a {
  font-weight: 500;
}
</style>
