<template>
  <div class="app-container">
    <!-- Use the NavigationBar component at the top -->
    <NavigationBar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Section 1 -->
      <section class="section-1">
        <b-container fluid class="my-4">
          <b-row class="align-items-center justify-content-between flex-column flex-md-row">
            <!-- Left Column: Text Content -->
            <b-col cols="12" md="4" class="text-content p-0 me-auto ">
              <h1>Klientu attiecības Jūsu uzņēmumam</h1>
              <p>
                Mēs parūpēsimies, lai Jūs atrastu īstie klienti, un Jūs spētu turpināt
                darīt to, ko pieprotiet vislabāk!
              </p>
            </b-col>
            <!-- Right Column: Consultation Form -->
            <b-col cols="12" md="5" class="p-0 w-auto d-none d-md-flex">
              <ConsultationForm />
            </b-col>
            <b-col cols="12" md="5" class="p-0 d-flex d-md-none justify-content-start">
              <b-button class="primary-button">Pieteikties konsultācijai!</b-button>
            </b-col>

          </b-row>
        </b-container>
      </section>

      <!-- Section 2 -->
      <section class="section-2">
        <b-container fluid class="my-4">
          <b-row class="align-items-center justify-content-between gap-4 gap-md-0 flex-column flex-md-row">
            <!-- Left Column: Content Box -->
            <b-col cols="12" md="7" order="2" order-md="1" class="p-0">
              <div class="content-box">
                <h3>
                  Ar <strong>CRM</strong> palīdzību, ievāc visu nepieciešamo informāciju
                  par saviem klientiem:
                </h3>
                <p>Saziņas ieradumus</p>
                <p>Iepirkšanās paradumus</p>
                <p>Darījumu vēsturi</p>
                <p>Personīgos piedāvājumus</p>
                <b-button class="secondary-button">Pieteikties konsultācijai!</b-button>
              </div>
            </b-col>
            <!-- Right Column: Larger Title (Visible on Desktop) -->
            <b-col
              cols="12"
              md="4"
              order="1"
              order-md="2"
              class="larger-title d-md-flex justify-content-center align-items-center text-center p-0 d-none d-md-flex"
            >
              <p>
                <span>CRM</span>
                <span>sistēmu</span>
                <span>izstrāde</span>
              </p>
            </b-col>
            <b-col
              cols="12"
              md="4"
              order="1"
              order-md="2"
              class="mobile-crm d-md-flex justify-content-center align-items-center text-center p-0 d-flex d-md-none"
            >
              <b-row>
                <h2>Tev nodrošināsim:</h2>
                <b-col cols="5" class="p-0">
                  <img :src="phone" alt="Phone" class="img-fluid"/>
                </b-col>
                <b-col cols="7" class="p-0">
                  <p>klientu piesaisti</p>
                  <p>klientu apstrādi</p>
                  <p>CRM ieviešanu</p>
                  <b-button class="secondary-button">Pieteikties!</b-button>
                </b-col>
                
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
  <PageFooter />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import ConsultationForm from "@/components/ConsultationForm.vue";

export default {
  name: "HomePage",
  components: {
    NavigationBar,
    PageFooter,
    ConsultationForm,
  },
  data() {
    return {
      // Import the images from the assets folder
      image1: require("@/assets/images/image_1.png"),
      image2: require("@/assets/images/image_2.png"),
      phone: require("@/assets/images/Telefons.svg"),
    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/HomePage.scss"></style>
