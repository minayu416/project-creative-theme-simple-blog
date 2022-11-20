<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

    <div class="container lg:px-72">
      <!-- Title -->
        <div class="py-2">
        <div class="h-12 text-4xl text-white text-center">Omi</div>
        </div>

        <!-- Navbar -->
        <!-- li ol -->

        <!-- Span right edge -->
        <div class="sidebar border border-solid absolute top-0 right-0">
          <div class="pt-10 pl-4 text-white text-lg">
          <ul>
            <li><a href="https://www.google.com/">Google</a></li>
            <li><a href="http://www.amazon.com">Amazon</a></li>
          <li><a href="http://www.zappos.com">Zappos</a></li>
          <li><a href="http://www.threadless.com">Threadless</a></li>
        </ul>
        </div>
        </div>

        <main>
          <div class="text-center text-xl text-white mb-4 mt-12">日日，All One's Power 日誌
          </div>
          <div class="grid grid-cols-2 pb-4 mb-8">
          <div class="py-1 border-b border-solid bg-white opacity-75 text-black text-center">list view</div>
          <div class="py-1 border border-solid text-center">timeline view</div>
          </div>

          <div class="grid gap-6 px-4">
            <div v-for= "(post, i) in mockPosts" :key="i">
              <div class="pl-2 pr-4 pt-4 pb-2 bg-white rounded-lg opacity-75 hover:opacity-100">
                <p class="text-black font-medium">{{ post.date }}</p>
                <div class="grid grid-cols-2">
                  <div class="text-black">{{ post.title }}</div>
                  <div class="text-black text-right">{{post.good}} {{ post.comment }}</div>
                </div>
              </div>
                </div>
          </div>
          <!-- v-for -->
        </main>
    </div>
  
</template>

<script>
export default {
  setup() {
    
  },
  data: () => ({
        mockPosts: [
        {
            title: "vol.1215 質問",
            date: '2022.06.18',
            good: '4440',
            comment: "1180"
        },
        {
            title: "vol.1214 You have any questions?",
            date: '2022.06.18',
            good: '4146',
            comment: "9056"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        }
        ]
    })
  }
</script>


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
