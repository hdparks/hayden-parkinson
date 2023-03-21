<template>
  <div class="bg-white dark:bg-slate-800 flex flex-col justify-center justify-items-center w-screen h-screen">
    <CardRenderer>
      <img src="~/assets/images/profile.jpg" class="rounded-full aspect-square" />
      <div class="flex flex-col justify-content-center">
        <h1 class="text-3xl">Hayden Parkinson</h1>
        <h2>Software Engineer</h2>
        <span><EnvelopeIcon class="h-5 w-5 inline mr-2"></EnvelopeIcon>haydendparkinson@gmail.com</span>
      </div>
    </CardRenderer>  
    <ContentList :query="query" v-slot="{ list }">
      <CardRenderer v-for="article in list" :key="article._path">
        <ContentDoc :path="article._path" />
      </CardRenderer>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { QueryBuilder, QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
const blogPosts = queryContent().where({_path:'blog_posts'})
const query: QueryBuilderParams = {path:'/blog_posts'}
</script>
