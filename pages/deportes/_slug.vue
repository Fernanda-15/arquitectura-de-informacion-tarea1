<style>
.button-home {
  display: inline-block;
  padding: 10px 20px;
  background-color: #427dbb; 
  color: white; 
  text-decoration: none; 
  border-radius: 5px; 
  text-align: center;
}
.button-home:hover {
  background-color: #356a9a; 
  color: white; 
}
</style>
<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('deportes', params.slug).fetch()
      const [prev, next] = await $content('deportes')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()
      return {
        article,
        prev,
        next
      }
   },
   methods: {
           formatDate(date) {
             const options = { year: 'numeric', month: 'long', day: 'numeric' }
             return new Date(date).toLocaleDateString('en', options)
           }
        }
  }
</script>

<template>
 <div class="container">
  <article class="row">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="'/images/'+article.img" :alt="article.alt" />
    <p>Fecha de publicación: {{ formatDate(article.updatedAt) }}</p>
    <p>Autor: {{ article.author }}</p>
    <prev-next :prev="prev" :next="next" :name="'deportes-slug'" />
    <NuxtLink
      :to="{ name: 'index'}"
      class="button-home"
      >
      Pagina principal
      </NuxtLink>
  </article>
</div>
</template>