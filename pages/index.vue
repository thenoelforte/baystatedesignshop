<template>
  <div class="pa3 pa5-ns flex flex-column justify-center min-vh-100">
    <h1 class="f1 f-subheadline-ns mw6 mt0 mb3 lh-solid underline">
      Bay State Design Shop
    </h1>

    <p class="f4 f3-ns measure-narrow lh-copy mb5">
      Where Massachusetts-based designers come to talk shop. Join us on Slack.
    </p>

    <div v-if="message">
      <p class="dib bg-light-yellow pa2">{{ message }}</p>
    </div>

    <form @submit.prevent="handleSubmit" class="mb5 flex flex-wrap" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="invites">
      <input name="bot-field">
      <input v-model="form.email" type="email" class="flex-auto pa3 pa4-l" placeholder="Your Email" ref="email">
      <input type="submit" value="Request an Invite" class="input-reset dib b pa4 bg-black white bn lh-solid flex-auto flex-none-ns pointer">
    </form>

  </div>
</template>

<style>
  input[type="email"] {
    border: 2px solid;
  }
</style>

<script>
export default {
  data: function () {
    return {
      message: '',
      form: {
        email: ''
      }
    }
  },
  head () {
    return { title: 'Bay State Design Shop' }
  },
  methods: {
    handleSubmit: function () {
      const vm = this

      // Check for email
      if (!vm.$data.form.email) {
        vm.$data.message = 'Look, if you want an invite we need your email address.'
        return
      }

      const encode = data => {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&')
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'invites', ...this.$data.form })
      })
        .then(() => {
          vm.$data.message = 'Your request has been sent!'
          vm.$refs.email.value = ''
        })
        .catch(error => {
          vm.$data.message = error
        })
    }
  }
}
</script>
