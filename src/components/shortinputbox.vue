<template>
  <div class="flex relative w-80 h-10">
    <input
      type="text"
      class="bg-gray-900 w-full px-3 border-none outline-none rounded ring-2 ring-gray-700 focus:shadow-lg focus:shadow-amber-400/10 focus:ring-[#e6c34f]"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue',$event.target.value)"
      autofocus
      required
    />
    <p v-if="isError" class="absolute -bottom-6 text-sm text-red-400">
      {{ msg }}
    </p>
    <span
      class="bg-gray-900 absolute flex justify-center items-center right-0 top-0 bottom-0 px-4"
    >
      <i class="fa-duotone fa-turn-down-left"></i>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps(['placeholder','modelValue'])

</script>
