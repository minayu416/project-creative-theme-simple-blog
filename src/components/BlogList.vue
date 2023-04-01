<template>
    <div class="text-center text-xl text-white mb-4 mt-12 font-fondamento">力の芸術@Power Cultivation Dairy
    </div>
    
    <div class="grid grid-cols-2 pb-4 mb-8">
    <div class="py-1 border-b border-solid bg-white opacity-75 text-black text-center">{{ $t('blog.list') }}</div>
        <div class="py-1 border border-solid text-center">{{ $t('blog.timeline') }}</div>
    </div>

    <div class="grid gap-6 px-4 mb-6">
    <div v-for= "(post, i) in mockPosts" :key="i">
        <div class="pl-2 pr-4 pt-4 pb-2 bg-white rounded-lg opacity-75 hover:opacity-100">
            <router-link :to="'/project-creative-theme-simple-blog/post/' + post.id">
                <p class="text-black font-medium">{{ post.date }}</p>
                <div class="grid grid-cols-2">
                    <div class="text-black">{{ post.title }}</div>
                    <!-- <div class="text-black text-right">{{post.good}} {{ post.comment }}</div> -->
                </div>
            </router-link>
        </div>
        </div>
    </div>

    <div class="flex justify-center text-center gap-2 mb-4 font-fondamento">
        <div class="hover:text-white cursor-pointer">1</div>
        <div class="hover:text-white cursor-pointer">2</div>
        <div class="hover:text-white cursor-pointer">3</div>
        <div class="hover:text-white cursor-pointer">4</div>
    </div>
    <!-- v-for -->
    <!-- Fake pagination -->


  </template>

<script>
export default {
  setup() {
    
  },
  data: () => ({
        mockPosts: [
        {
            id: '1',
            title: "vol.1215 質問",
            date: '2022.06.18',
            good: '4440',
            comment: "1180"
        },
        {
            id: '2',
            title: "vol.1214 You have any questions?",
            date: '2022.06.18',
            good: '4146',
            comment: "9056"
        },
        {
            id: '3',
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            id: '4',
            title: "vol.1212 Travel Diary",
            date: '2022.02.19',
            good: '6408',
            comment: "1977"
        },
        {
            id: '5',
            title: "vol.1211 Job seeking",
            date: '2021.11.08',
            good: '6408',
            comment: "1977"
        },
        {
            id: '6',
            title: "vol.1210 Howdy?",
            date: '2021.11.07',
            good: '6408',
            comment: "1977"
        },
        {
            id: '7',
            title: "vol.1209 Recent status",
            date: '2021.07.02',
            good: '6408',
            comment: "1977"
        },
        {
            id: '8',
            title: "vol.1208 Be happy!",
            date: '2021.03.11',
            good: '6408',
            comment: "1977"
        }
        ]
    })
  }
</script>