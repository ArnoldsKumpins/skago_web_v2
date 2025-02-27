<template>
  <div>
    <!-- Use the NavigationBar component at the top -->
    <NavigationBar />

    <div class="container-md-fluid">
      <img :src="image1" alt="Background Image" class="w-100" />
      <div>Tev nodrošināsim:</div>
      <div>Ar CRM palīdzību</div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "HomePage",
  components: {
    NavigationBar,
    PageFooter,
  },
  data() {
    return {
      // Import the images from the assets folder
      image1: require("@/assets/images/image_1.png"),
      image2: require("@/assets/images/image_2.png"),
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/HomePage.scss"></style>
