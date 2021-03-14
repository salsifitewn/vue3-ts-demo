<template>
  <form class="" method="POST" @submit.prevent="send">
    <div class="form-group grid gap-5 lg:grid-cols-3">
      <form-input v-for="(value, name) in user" :key="name" v-model="user[name]" :type="name">
        {{ startCase(name) }}</form-input
      >
    </div>
    <input class="btn btn-green mt-10 mr-5" type="submit" value="envoyer" />
  </form>
</template>

<script lang="ts">
// type-script
import { defineComponent } from 'vue'
import { startCase } from 'lodash-es'
import FormInput from '../components/FormElements/FormInput.vue'
import { User } from '../types'

export default defineComponent({
  components: {
    FormInput,
  },
  data() {
    return {
      user: {
        lastName: '',
        firstName: '',
        email: '',
        zipCode: undefined,
        address: '',
        city: '',
        phone: undefined,
      } as User,
    }
  },
  methods: {
    startCase,
    send() {
      console.log(this.user)
    },
  },
})
</script>

<style></style>
