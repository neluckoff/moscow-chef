<template>
  <section>
    <blocks-hero></blocks-hero>
    <blocks-about></blocks-about>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Moscow Chef',
      htmlAttrs: {
          lang: 'ru'
      },
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
}
</script>
