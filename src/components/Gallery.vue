<template>
    <div class="text-center text-xl text-white mb-4 mt-12 font-fondamento">{{ $t('title.gallery') }}
    </div>

    <div class="text-center text-md text-white mb-4 font-fondamento italic">{{ $t('gallery.motto') }}
    </div>

    <div class="px-4 pb-4">
    <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div class="pb-2 bg-white rounded-lg hover:opacity-100">
        <img class="brightness-75 object-cover" src="https://minayu0416.files.wordpress.com/2019/10/2019-10-02-14-26-338816725175129355419.jpg" alt="Blog Block Grid"/>
        <p class="pl-2 pt-2 text-black font-medium">2019.10</p>
        <p class="pl-2 text-black font-medium">{{ $t('gallery.post1') }}</p>

        </div>
        <div class="pb-2 bg-white rounded-lg hover:opacity-100">
            <img class="brightness-75 object-cover" src="https://minayu0416.files.wordpress.com/2019/10/2019-09-30-13-29-146638018915226290324.jpg" alt="Blog Block Grid"/>
        <p class="pl-2 pt-2 text-black font-medium">2019.10</p>
        <p class="pl-2 text-black font-medium">{{ $t('gallery.post2') }}</p>
        </div>
        <div class="pb-2 bg-white rounded-lg hover:opacity-100">
        <img class="brightness-75 object-cover" src="https://minayu0416.files.wordpress.com/2019/02/img_0469-1.jpg" alt="Blog Block Grid"/>
        <p class="pl-2 pt-2 text-black font-medium">2018.02</p>
        <p class="pl-2 text-black font-medium">{{ $t('gallery.post3') }}</p>
        </div>

    </div>
    </div>

    <!-- v-for -->

  </template>
