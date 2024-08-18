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
      const sucesos = await $content('sucesos')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        sucesos
      }
    }
  }
</script>

<template>
    <div class="container">
      <div class="row">
        <h1>Noticias de la categoría sucesos</h1>
        <ul>
          <li v-for="suceso of sucesos" :key="suceso.slug">
            <NuxtLink :to="{ name: 'sucesos-slug', params: { slug: suceso.slug } }">
              <div>
                <h2>{{ suceso.title }}</h2>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </template>
  