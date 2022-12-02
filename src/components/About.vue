
<template>
    <div class="text-center text-xl text-white mb-6 mt-12 font-fondamento">Have Some Questions?
    </div>
    <div class="px-6 pt-4 pb-4">
        <h3 class="text-white font-medium title-style font-fondamento">{{ $t('hello') }}</h3>
        
      </div>

  </template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { t } = useI18n();
      // then use it like t('message.greeting')
  }
}
</script>
