<template>
  <div :class="{ 'blur-background': isModalVisible }">
    <div class="app-container">
      <!-- Use the NavigationBar component at the top -->
      <NavigationBar @toggleModal="toggleModal" />

      <!-- Main Content -->
      <div class="main-content">
        <!-- Section 1 -->
        <section class="section-1">
          <b-container fluid class="my-4">
            <b-row
              class="align-items-center justify-content-between flex-column flex-md-row"
            >
              <!-- Left Column: Text Content -->
              <b-col cols="12" md="4" class="text-content p-0 me-auto">
                <h1>Klientu attiecības Jūsu uzņēmumam</h1>
                <p>
                  Mēs parūpēsimies, lai Jūs atrastu īstie klienti, un Jūs spētu turpināt
                  darīt to, ko pieprotiet vislabāk!
                </p>
              </b-col>
              <!-- Right Column: Consultation Form -->
              <b-col
                cols="12"
                md="5"
                class="p-0 w-auto d-none d-md-flex"
                @click="toggleModal"
              >
                <ConsultationForm />
              </b-col>
              <b-col cols="12" md="5" class="p-0 d-flex d-md-none justify-content-start">
                <b-button class="primary-button" @click="toggleModal"
                  >Pieteikties konsultācijai!</b-button
                >
              </b-col>
            </b-row>
          </b-container>
        </section>

        <!-- Section 2 -->
        <section class="section-2">
          <b-container fluid class="my-4">
            <b-row
              class="align-items-center justify-content-between gap-4 gap-md-0 flex-column flex-md-row"
            >
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
                  <b-button class="secondary-button" @click="toggleModal"
                    >Pieteikties konsultācijai!</b-button
                  >
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
                    <img :src="phone" alt="Phone" class="img-fluid" />
                  </b-col>
                  <b-col cols="7" class="p-0">
                    <p>klientu piesaisti</p>
                    <p>klientu apstrādi</p>
                    <p>CRM ieviešanu</p>
                    <b-button class="secondary-button mb-5" @click="toggleModal"
                      >Pieteikties!</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </section>
      </div>
    </div>

    <!-- Supplementary Content (Section 3) -->
    <div class="supplementary-content">
      <section class="section-3">
        <b-container fluid class="my-0">
          <b-row
            class="align-items-center justify-content-between flex-column flex-md-row py-5"
          >
            <!-- Left Column: phone_2 image (hidden on medium or smaller screens) -->
            <b-col cols="12" md="3" class="p-0 d-none d-md-flex">
              <img :src="phone_2" alt="Phone 2" class="img-fluid" />
            </b-col>
            <!-- Right Column: Content box with blurry background -->
            <b-col cols="12" md="8" class="p-0">
              <div class="content-box blurry-background">
                <h3>Personalizēta saziņa ar klientiem</h3>
                <p>
                  Papildus ierastajiem e-pastiem, mēs
                  <img
                    src="@/assets/images/skago_logo.svg"
                    alt="Skago Logo"
                    class="logo-image"
                  />
                  ejam soli tālāk!
                </p>
                <p>
                  Ikvienam uzņēmumam ir viņu īpašie klienti - tieši tāpēc mēs viņiem
                  liekam justies patiesi īpašiem.
                </p>
                <p>
                  <strong>
                    Kad Jūs pēdējo reizi saņēmāt no uzņēmuma vēstuli, kas lika Jums
                    justies īpašam?
                  </strong>
                </p>
                <p>
                  Ja Jums jādomā, tad acīmredzot, Jūs vēl pagaidām neesiet
                  <img
                    src="@/assets/images/skago_logo.svg"
                    alt="Skago Logo"
                    class="logo-image"
                  />
                  klients :)
                </p>
                <b-button class="primary-button" @click="toggleModal"
                  >Pārbaudi pats!</b-button
                >
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
    <PageFooter />
    <!-- Modal -->
    <b-modal v-model="isModalVisible" hide-header hide-footer centered modal-class="transparent-modal">
      <ConsultationForm />
    </b-modal>
  </div>
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
      phone_2: require("@/assets/images/Telefons_2.svg"),
      logo: require("@/assets/images/skago_logo.svg"),
      checkered_background: require("@/assets/images/checkered_background.png"),

      isModalVisible: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
  },
};
</script>

<style scoped lang="scss" src="@/styles/HomePage.scss"></style>
