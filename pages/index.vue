<template>
  <div class="flex-l justify-center min-vh-100 near-black">

      <div class="w-100 w-50-l bg-near-black white pa5 flex items-center justify-center">
        <div class="tc">
          <Logo class="fill-white mb5 mw6 center" />
          <h1 class="dn">
            Bay State Design Shop
          </h1>

          <div v-if="message">
            <p class="tc f4 light-yellow">{{ message }}</p>
          </div>

          <form @submit.prevent="handleSubmit" class="tc" data-netlify="true" data-netlify-honeypot="bot-field" name="invites">
            <input type="hidden" name="form-name" value="invites">

            <div class="dn">
              <input name="bot-field">
            </div>

            <input v-model="form.email" ref="email" type="email" name="email" class="bicyclette white bg-transparent br0 w-100 pv4 tc f5 ttu tracked-mega" placeholder="Your Email">

            <input type="submit" value="Request an Invite →" class="bicyclette ttu tracked input-reset br0 dib pa4 bg-transparent white tracked-mega bn lh-solid flex-auto flex-none-ns pointer">
          </form>
        </div>
      </div>

      <div class="w-100 w-50-l pa5 flex items-center justify-center">
        <div class="lh-copy mw6">
          <p class="f4 f3-ns mt0 measure mb3">
            <strong>Bay State Design Shop</strong> is a growing community that’s built for New England-area designers, by New England-area designers.
          </p>
          <p class="f5 f4-ns mv3 measure-narrow">
            With over one-hundred members, <strong>BSDS</strong> is an inclusive gathering spot for all stripes of designer—veteran practitioners, up-and-comers, and greenhorns alike.
          </p>
          <p class="f5 f4-ns mt3 mb0 measure-narrow">
            We’re a pretension-free place for designers of all disciplines to talk shop, chew the fat, hone their craft, and lend a helping hand.
          </p>
        </div>
      </div>
  </div>
</template>

<style>
input[type='email'] {
  transition: all 400ms;
  border: 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
input[type='email']:focus {
  outline: 0;
}
</style>

<script>
import Logo from '~/components/Logo';
export default {
  data: function() {
    return {
      message: '',
      form: {
        email: ''
      }
    };
  },
  components: { Logo },
  head() {
    return { title: 'Bay State Design Shop' };
  },
  methods: {
    handleSubmit: function() {
      const vm = this;

      // Check for email
      if (!vm.$data.form.email) {
        vm.$data.message =
          'Look, if you want an invite we need your email address.';
        return;
      }

      const encode = data => {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&');
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'invites', ...this.$data.form })
      })
        .then(() => {
          vm.$data.message = 'Your request has been sent!';
          vm.$refs.email.value = '';
        })
        .catch(error => {
          vm.$data.message = error;
        });
    }
  }
};
</script>
