<template>
  <section>
    <Container>
      <h2 class="title">{{ $t('welcome') }}</h2>
      <Row gutter="4">
        <Col v-for="item in data.products" col="3">
          <UiProductCard :product="item" />
        </Col>
          <div v-if="error">error</div>
        <Col>

        </Col>
      </Row>
    </Container>
    {{ data }}
  </section>
</template>
<script setup lang="ts">
// const products =
const { data, pending } = await $fetch('https://dummyjson.com/products', async () =>{
  const { data, error }
});
// console.log( error,data );
</script>
<style scoped>
  @import url('@/assets/sass/pages/home.sass');
</style>