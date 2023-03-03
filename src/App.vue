<template>
  <Header></Header>
<Land></Land>
 </template>

<script>
import Header from "./components/app-header.vue";
import Land from "./components/landed-view.vue";
import { ref } from "vue";



export default {
  setup(props) {
   
    const selectedFile = ref("");
    const onFileSelected = (event) => {
      selectedFile.value = event.target.files[0];
    };
    return { onFileSelected, };
  },
  components: {
    Header,
    Land
  },
};
</script>

<style>
img{
  max-width: 100%;
        max-height: 100%;
        display: block;
        object-fit:cover;

}</style>
