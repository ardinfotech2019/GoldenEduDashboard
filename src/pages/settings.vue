<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Settings</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

<style lang="scss" scoped></style>
