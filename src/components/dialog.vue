<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" v-show="show" @touchstart.self="close">
      <div class="bg-white rounded shadow-lg rounded-lg">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('update:show', false);
      }
    }
  }
  </script>
  
  <style>
  /* You can add your styles here */
  </style>