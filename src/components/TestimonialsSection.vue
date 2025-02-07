<template>
  <section id="testimonials" class="testimonials-section">
    <h2> What Our Clients Say</h2>
    <!-- Elfsight Widget Container -->
    <div class="elfsight-app-e1c4e04c-3157-48b1-9065-b64476de4ff3" data-elfsight-app-lazy></div> 
  </section>
</template>

<script>
import { onMounted, nextTick, ref } from "vue";

export default {
  name: "TestimonialsSection",
  setup() {
    const elfsightWidget = ref(null);

    onMounted(() => {
      nextTick(() => {
        // Load the Elfsight script dynamically
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        console.log("Elfsight widget script loaded.");
      });
    });

    return { elfsightWidget };
  },
};
</script>


<style scoped>
.testimonials-section {
  padding: 40px 20px;
  max-width: 100vw;
  margin: auto;
  text-align: center;
  background-color: #effcfc;  /*white background to match your theme */
}

.elfsight-app-e1c4e04c-3157-48b1-9065-b64476de4ff3 {
  flex: 1;
  margin: 40px;
  display: flex;

}

h2 {
  font-size: 2rem;
  color: #1e4e9a;  /* Dark blue for the title */
}

</style>

<!-- <template>
  <section id="testimonials" class="testimonials-section">
    <h2> What Our Clients Say</h2>
    <div v-if="reviews.length > 0">
      <div v-for="(review, index) in reviews" :key="index" class="review">
        <img :src="review.profile_photo_url" alt="Reviewer Profile" class="reviewer-photo" />
        <p>
          <i class="fas fa-quote-left"></i>
          <b>{{ review.text }}</b>
          <i class="fas fa-quote-right"></i>
        </p>
        <h4>{{ review.author_name }}</h4>
      </div>
    </div>
    <p v-else>Loading reviews...</p>
  </section>
</template>

<script>
export default {
  name: "TestimonialsSection",
  data() {
    return {
      reviews: [],
    };
  },
  async mounted() {
    const apiKey = "YOUR_GOOGLE_PLACES_API_KEY"; // Replace with your API key
    const placeId = "0x4cce0fcb8ae5cbcf:0x67bed7313ccdf9f0"; // Place ID from Google Maps

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
      );
      const data = await response.json();
      if (data.result && data.result.reviews) {
        this.reviews = data.result.reviews;
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  },
};
</script>

<style scoped>
.testimonials-section {
  padding: 40px 20px;
  max-width: 100vw;
  margin: auto;
  text-align: center;
  background-color: #f7f8f8;
}

h2 {
  font-size: 2rem;
  color: #1e4e9a;
}

.review {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

.reviewer-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #000000;
  word-wrap: break-word;
}

i {
  color: #1e4e9a;
}
</style> -->

