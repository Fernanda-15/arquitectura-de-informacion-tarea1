<style>
  h1 {
   padding-top: 20px;
  }
 
  .container {
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
}

.col {
  flex: 1 1 30%; 
  min-width: 250px; 
  box-sizing: border-box;
}

.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%; 
  height: auto;
}

.card-body {
  padding: 15px;
  flex: 1; 
}

.card-title {
  margin: 0;
}
.card-img {
  width: 100%;
  height: 200px; 
  object-fit: cover; 
}
</style>
<script>
  export default {
    async asyncData({ $content, params }) {
      const categorias = await $content('categorias')
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
    <h1>Categorías de noticias</h1>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-img-container">
            <img :src="'/images/categorias/categoria1.jpg'" class="card-img" />
          </div>
          <!-- <img :src="'/images/categorias/categoria1.jpg'" class="card-img" /> -->
          <NuxtLink :to="{ name: 'deportes-list' }" class="card-link">        
            <div class="card-body">
              <h2 class="card-title">Deportes</h2>
            </div>
          </NuxtLink>
        </div>
      </div>
    
      <div class="col">
        <div class="card">
          <div class="card-img-container">
            <img :src="'/images/categorias/categoria2.jpg'" class="card-img" />
          </div>          
          <NuxtLink :to="{ name: 'sucesos-list' }" class="card-link">        
            <div class="card-body">
              <h2 class="card-title">Sucesos</h2>
            </div>
          </NuxtLink>
        </div>
      </div>
      
      <div class="col">  
        <div class="card">
          <div class="card-img-container">
            <img :src="'/images/categorias/categoria3.jpg'" class="card-img" />
          </div>          
          <NuxtLink :to="{ name: 'economia-list' }" class="card-link">        
            <div class="card-body">
              <h2 class="card-title">Economía</h2>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
