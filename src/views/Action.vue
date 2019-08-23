<template>
  <div class="text-align-center">
    <input type="text" @input="actionInputIfTrue($event)" />
    <button class="test-btn" @click="actionClick()">Click</button>
    <p>{{$store.getters.text}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import {  mapActions } from 'vuex';

export default {
  name: 'input-test',
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      btnClick: 'actionClick',
      inputChange: 'actionInput',
    }),
    actionClick() {
      console.log('Click!!!!');
      this.btnClick();
    },
    actionInputIfTrue(event) {
      console.log('input : ' + JSON.stringify(event.target.value));
      const inputValue = event.target.value;
      if(inputValue==='input'){
          this.inputChange({inputValue});
      }
      
    // this.$store.dispatch('actionInput', { inputValue })
    },
  },
};
</script>
