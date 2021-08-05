<template>
  <div>
    <h1>Hello World</h1>
    <pre>{{ placeholder }}</pre>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      placeholder: {}
    };
  },
  fetch: async function () {
    this.placeholder = await this.$axios.$get('http://httpstat.us/400/cors');
  }
}
</script>
