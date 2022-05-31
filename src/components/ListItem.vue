<template>
  <li class="text-gray-100 pl-1 rounded-lg transition ease-in-out duration-200">
    <router-link
      :to="props.path"
      class="bg-gray-900 p-3 pl-5 flex items-center gap-5 rounded-md"
    >
      <i :class="['fa-duotone w-6 h-6 icon-dutone-color', props.icon]"></i>
      <span class="text-xl tracking-wider">{{ props.name }}</span>
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  icon: String,
  path: String,
});
</script>

<style lang="css">
.icon-dutone-color {
  --fa-primary-color: #e6c34f;
  --fa-secondary-color: #e6c34f;
}
.list-active {
  box-shadow: 0px 0px 10px 3px rgba(10, 10, 10, 0.5);
  @apply bg-gradient-to-br from-gray-900 to-gray-800 border-l-4 border-[#e6c34f];
}
</style>
