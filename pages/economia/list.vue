<style>
  h1 {
   padding-top: 20px;
  }
  ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
}

li {
  margin-bottom: 10px; 
}

li a {
  text-decoration: none; 
  color: inherit; 
}

li div {
  padding: 10px; 
  border: 1px solid #ddd; 
  border-radius: 5px; 
  background-color: #f9f9f9;
}

h2 {
  font-size: 25px; 
  margin: 0 0 10px; 
}

p {
  font-size: 14px;
  margin: 0;
}

</style>
<script>
  export default {
    async asyncData({ $content, params }) {
      const categorias = await $content('economia')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        categorias
      }
    }
  }
</script>

<template>
  <div class="container">
   <div class="row">
    <h1>Noticias de la categoria economia</h1>
    <ul>
      <li v-for="categoria of categorias" :key="categoria.slug">
        <NuxtLink :to="{ name: 'economia-slug', params: { slug: categoria.slug } }">
          <div>
            <h2>{{ categoria.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul> 
   </div>
  </div>
</template>