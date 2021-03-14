<template>
  <div class="">
    <h1 class="text-3xl font-bold">Form Contact</h1>
    <form class="mt-5" method="POST" @submit.prevent="send">
      <div class="form-group grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        <form-input v-for="(value, name) in user" :key="name" v-model="user[name]" :type="name">
          {{ startCase(name) }}</form-input
        >
      </div>
      <input class="btn btn-green mt-10 mr-5" type="submit" value="Send" />
    </form>
  </div>
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
        phone: undefined,
        address: '',
        zipCode: undefined,
        city: '',
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
