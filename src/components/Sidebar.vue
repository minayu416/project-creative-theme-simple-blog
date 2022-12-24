<template>
        <!-- Navbar -->
        <div class="flex space-x-4 justify-center uppercase pt-2">
          <div class="font-fondamento text-gray-200 hover:text-white"><a href="/about">{{ $t('navbar.about') }}</a></div>
            <div class="font-fondamento text-gray-200 hover:text-white"><a href="/">{{ $t('navbar.home') }}</a></div>
            <div class="font-fondamento text-gray-200 hover:text-white"><a href="/gallery">{{ $t('navbar.gallery') }}</a></div>
            <!-- <div class="font-fondamento text-gray-200 hover:text-white"><a href="/contact">CONTACT</a></div> -->
            <div class="locale-changer">
            <select @change="updateLanguage()" v-model="$i18n.locale" class="bg-transparent font-fondamento uppercase text-gray-200">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
            </select>
          </div>
        </div>
</template>


<script>
// https://stackoverflow.com/questions/62935666/how-to-save-current-language-i18n-in-localstorage-vue
export default {
  name: "LocaleSwitcher",
  methods: {
    updateLanguage() {
      sessionStorage.setItem("locale", this.$i18n.locale);
    },
  },
  mounted() {
    if (sessionStorage.getItem("locale")) {
      this.$i18n.locale = sessionStorage.getItem("locale");
    } else {
      sessionStorage.setItem("locale", this.$i18n.locale);
    }
  },
};
</script>