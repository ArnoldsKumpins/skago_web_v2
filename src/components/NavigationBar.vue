<template>
  <b-navbar
    toggleable="md"
    class="mx-4 my-3 navbar-desktop-spacing"
  >
    <!-- Logo on the left -->
    <b-navbar-brand to="/">
      <img :src="logo" alt="Skago Logo" height="40" />
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
      <!-- Navigation links centered -->
      <b-navbar-nav
        class="mx-auto d-flex flex-column flex-md-row align-items-center flex-nowrap navbar-links-desktop-gap"
      >
        <b-nav-item to="/zimola-teila-izveide" class="nav-link-item nowrap-text pt-2 pb-0"
          >Zīmola tēla izveide</b-nav-item
        >
        <b-nav-item to="/grafiskais-dizains" class="nav-link-item nowrap-text pt-2 pb-0"
          >Grafiskais dizains</b-nav-item
        >
      </b-navbar-nav>

      <!-- Email and phone icons on the right -->
      <b-navbar-nav
        class="ml-auto d-flex flex-row justify-content-center align-items-center gap-3"
      >
        <b-nav-item href="#" class="icon-link">
          <i class="bi bi-telephone-fill fs-4"></i>
        </b-nav-item>
        <b-nav-item href="#" class="icon-link">
          <i class="bi bi-envelope-fill fs-4"></i>
        </b-nav-item>
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
