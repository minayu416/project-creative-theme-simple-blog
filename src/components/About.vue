<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
    <div class="text-center text-xl text-white mb-6 mt-12 font-fondamento">Have Some Questions?
    </div>
    <div class="px-6 pt-4 pb-4">
        <h3 class="text-white font-medium title-style font-fondamento">{{ $t('about.Q1') }}</h3>
        {{ $t('about.Q1content') }} 
        <a href="https://m.tribe-m.jp/diary/index?table_type=1&comng_id=168&group_id=25" class="underline hover:text-white">
          {{ $t('about.Q1hyper1') }}
        </a>
        {{ $t('about.Q1content1') }} 
        <h3 class="text-white font-medium title-style mt-6 font-fondamento">{{ $t('about.Q2') }}</h3>
        {{ $t('about.Q2content') }}
        <br>
        {{ $t('about.Q2content1') }} {{ $t('about.Q2content2') }} 
        <a href="minayu.site" class="underline hover:text-white">{{ $t('about.Q2hyper1') }}</a>
        {{ $t('about.Q2content3') }}
        <h3 class="text-white font-medium title-style mt-6 font-fondamento">{{ $t('about.Q3') }}</h3>
        {{ $t('about.Q3content') }}
      </div>

  </template>
