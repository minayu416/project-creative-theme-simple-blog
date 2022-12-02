<template>
        <!-- Navbar -->
        <div class="flex space-x-4 justify-center uppercase pt-2">
          <div class="font-fondamento text-gray-200 hover:text-white"><a href="/about">ABOUT</a></div>
            <div class="font-fondamento text-gray-200 hover:text-white"><a href="/">HOME</a></div>
            <div class="font-fondamento text-gray-200 hover:text-white"><a href="/gallery">GALLERY</a></div>
            <!-- <div class="font-fondamento text-gray-200 hover:text-white"><a href="/contact">CONTACT</a></div> -->
            <div class="locale-changer">
            <select v-model="$i18n.locale" class="bg-transparent font-fondamento uppercase text-gray-200">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
            </select>
          </div>
        </div>
</template>