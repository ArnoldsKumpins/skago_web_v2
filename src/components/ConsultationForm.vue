<template>
  <b-card class="consultation-form">
    <h2 class="form-title">Pieteikt konsultāciju</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label-for="first-name">
        <b-form-input
          id="first-name"
          v-model="form.firstName"
          required
          placeholder="Vārds"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="last-name">
        <b-form-input
          id="last-name"
          v-model="form.lastName"
          required
          placeholder="Uzvārds"
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="phone-number">
        <b-form-input
          id="phone-number"
          v-model="form.phoneNumber"
          type="tel"
          required
          placeholder="Telefona nr."
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="E-pasts"
        ></b-form-input>
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" class="primary-button">Pieteikties</b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
export default {
  name: "ConsultationForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      alert("Form submitted!");
    },
  },
};
</script>


<style scoped lang="scss" src="@/styles/ConsultationForm.scss"></style>
