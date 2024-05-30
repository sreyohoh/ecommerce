<template>
  <Card>
    <CardImgTop
        :src="product.image"
        fluid
        height="180"
    />
    <CardBody>
      <CardTitle> {{ product.title }}</CardTitle>
      <CardText>
        {{ product.description }}
      </CardText>
      <b-a
          href="#"
          tabindex="-1"
          button="primary"
          col="6"
      >
        Go somewhere
      </b-a>
    </CardBody>
  </Card>
  <Card>
    <CardImgTop
        src="https://dummyimage.com/100x100/868e96/868e96"
        height="180"
    />
    <CardBody>
      <CardTitle placeholder="glow">
        <b-span
            placeholder
            col="6"
        />
      </CardTitle>
      <CardText placeholder="glow">
        <b-span
            placeholder
            col="7"
        />
        <b-span
            placeholder
            col="4"
        />
        <b-span
            placeholder
            col="4"
        />
        <b-span
            placeholder
            col="6"
        />
        <b-span
            placeholder
            col="8"
        />
      </CardText>
      <b-a
          href="#"
          tabindex="-1"
          button="primary"
          disabled
          placeholder
          col="6"
      />
    </CardBody>
  </Card>
</template>
<script setup lang="ts">

// in <script setup>
const product = {
  id: 1,
  title: 'Product Name',
  image:  '/images/default.jpg',
  description: 'Description about product Some quick example text to build on the card title and make up the\n' +
      '        bulk of the card\'s content.',


}

</script>