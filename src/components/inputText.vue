<template>
  <div class="px-3 pb-6 space-y-1">
    <label for="email" class="text-gray-400 text-sm">{{ title }}</label>
    <div class="h-10">
      <input
        :type="type"
        :id="type"
        class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        autofocus
        required
      />
      <span
        class="absolute bg-gray-800 text-[#e6c34f] text-base right-0 px-3 top-0 bottom-0 flex justify-center items-center cursor-pointer"
        @click="showHide()"
        v-if="showPassword"
      >
        {{ isShow ? "Hide" : "Show" }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  placeholder: String,
  modelValue: String,
  type: String,
  showPassword: Boolean,
});
</script>
