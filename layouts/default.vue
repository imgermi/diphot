<template>
  <div>
    <top/>
    <nuxt/>
    <foot/>
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Top,
    Foot
  }
}
</script>