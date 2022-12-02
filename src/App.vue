<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>

    <div class="container lg:px-72">
      <!-- Title -->
        <div class="py-2 border-b border-gray-300">
        <div class="h-12 text-4xl text-white text-center font-fondamento">Simple Blog</div>
        </div>



        <Sidebar />
        <main>
          <router-view/>
        </main>
    </div>
  
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script>
export default {
  data() {
    return {
      lang: "en",
    };
  },
};
</script>