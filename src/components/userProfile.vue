<template>
  <div
    class="w-full flex items-center bg-neutral-900 space-x-4 py-3 px-5 absolute bottom-0 right-0 left-0 shadow-lg"
  >
    <i
      class="fa-duotone fa-circle-user w-7 h-7 pt-1"
      style="--fa-primary-color: #e6c34f; --fa-secondary-color: #e6c34f"
    ></i>
    <div class="flex flex-col space-y-1">
      <span class="text-md text-gray-300">{{ user.displayName }}</span>
      <span class="text-xs text-gray-500">{{ user.email }}</span>
    </div>

    <div
      class="absolute top-0 right-0 bottom-0 px-4 flex items-center justify-center cursor-pointer"
      @click="logout()"
    >
      <i
        class="fa-duotone fa-arrow-right-from-bracket w-5 h-5"
        style="--fa-primary-color: #e6c34f; --fa-secondary-color: #e6c34f"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

defineProps(["user"]);

const router = useRouter();
const store = useStore();

const logout = () => {
  try {
    store.dispatch("signout");
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};
</script>
