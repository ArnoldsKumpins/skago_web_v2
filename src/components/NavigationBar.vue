<template>
  <b-navbar
    toggleable="md"
    class="mx-4 my-0 py-3 navbar-desktop-spacing"
  >
    <!-- Logo on the left -->
    <b-navbar-brand to="/">
      <img :src="logo" alt="Skago Logo" height="30" />
    </b-navbar-brand>

    <!-- Hamburger toggle for mobile -->
    <b-navbar-toggle
      target="nav-collapse"
      class="border-0 shadow-none"
      @click="isCollapsed = !isCollapsed"
    >
      <i :class="isCollapsed ? 'bi bi-x-lg' : 'bi bi-list'" class="fs-2"></i>
    </b-navbar-toggle>

    <!-- Collapsible content -->
    <b-collapse id="nav-collapse" is-nav>

      <!-- Submit button on the right -->
      <b-navbar-nav
        class="ms-auto d-flex align-items-center"
      >
        <b-button class="primary-button">Pieteikties</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      // Import the logo from the assets folder
      logo: require("@/assets/images/skago_logo.svg"),
      isCollapsed: false,
    };
  },
};
</script>

<!-- Importing SCSS file from the global styles folder -->
<style scoped lang="scss" src="@/styles/NavigationBar.scss"></style>
