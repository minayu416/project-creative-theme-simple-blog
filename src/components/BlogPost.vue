<template>
    <div class="text-center text-xl text-white mb-6 mt-12 font-fondamento">日日，All One's Power 日誌
    </div>

    <div class="grid px-4 mb-6">
    <div>
        <div class="pl-2 pr-4 pt-4 pb-2 bg-white rounded-lg opacity-75">
          <div class="px-2 pb-2">
            <p class="text-black font-medium text-md">{{ post.date }}</p>
            <p class="text-black font-medium text-lg pb-4">{{ post.title }}</p>
            <p class="text-black font-medium text-md">
              Lorem ipsum dolor sit amet, tantas epicurei appetere sed at, has utinam eirmod no. In appetere philosophia definitionem sit, ad duo doming vocent. Ex pri quodsi dolorem. Te populo fabellas eam, pri ipsum possim signiferumque in. Errem facilisis et eos, vidisse scripserit ad sea. Lorem scripserit adversarium ad cum, sit minimum accusata abhorreant ei.
            </p>
            <br>
            <p class="text-black font-medium text-md">
              Malis debet delicata ex eum, ne quo veri clita inimicus, pertinax qualisque ad vel. In vel dicta laoreet tractatos, amet explicari eos ex. Minim vocibus luptatum pro no, ut vix percipit legendos, eam in solum clita dolorum. Ei malorum torquatos duo, id sit elit dolores. Sit choro pertinacia cu, eos ea detraxit aliquando concludaturque. Ut nihil minimum pri, dicta paulo dicant an pro. Omittam iracundia qui ex, ad his blandit eligendi molestie.
            </p>
        </div>
        </div>
        </div>
    </div>
    <!-- v-for -->

  </template>

  <script>
  import {useRoute} from "vue-router";
  export default {
  setup(){
  //  const route = useRoute();
  //  const id = route.params.id;
   //console.log('The id is: ' + id);
    },
    data(){
      const mockPosts = [
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
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            id: '5',
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            id: '6',
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            id: '7',
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        },
        {
            id: '8',
            title: "vol.1213 Awnswer tour",
            date: '2022.04.29',
            good: '6408',
            comment: "1977"
        }
        ]
      const route = useRoute();
      const urlId = route.params.id;

      let post = {};

      for (var i = 0; i < mockPosts.length; i++) {
        if (mockPosts[i].id == urlId){
          post = mockPosts[i]
          console.log(post)
        }
      }
      return {post};
      
    },
    // mounted(){
    //     const route = useRoute();
    //     // const id = route.params.id;
    //     this.id = route.params.id;
    // }
  }
  
</script>