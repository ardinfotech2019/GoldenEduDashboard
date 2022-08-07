<template>
  <section
    class="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex justify-center items-center"
  >
    <form
      @submit.prevent="getResetLink()"
      class="w-96 bg-gray-900 h-screen md:h-auto p-5 rounded-md shadow-2xl"
    >
      <div class="w-full flex justify-center items-center pt-6 pb-10">
        <img
          src="https://ik.imagekit.io/geduCDN/new_logo_min_TP97CGATk4.png"
          alt="golden education logo"
          class="w-36"
        />
      </div>

      <div class="px-3 pb-6">
        <p class="text-sm text-gray-400">
          Enter the email associate with your account and we'll send you an
          email with instrunctions to reset your password.
        </p>
      </div>

      <div>
        <div class="px-3 pb-3 space-y-1.5">
          <label for="email" class="text-gray-400 text-sm">Email address</label>
          <div class="h-11">
            <input
              type="email"
              id="email"
              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
              placeholder="example@gmail.com"
              autofocus
              required
              v-model="email"
            />
          </div>
        </div>

        <div class="px-3 pb-3">
          <p
            :class="['text-sm', isError ? 'text-red-500' : 'text-green-500']"
            v-if="show"
          >
            {{ message }}
          </p>
        </div>

        <div class="w-full px-3 pt-6 pb-7">
          <button
            class="w-full bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
          >
            Get reset link
          </button>
        </div>

        <div class="w-full text-center pb-6">
          <router-link to="/login" class="text-gray-400">
            Already Account ?<span class="text-[#e6c34f] ml-2">Sign In</span>
          </router-link>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { errorMessage } from "../firebase/error";
import { useRouter } from "vue-router";

const message = ref("");
const email = ref("");
const isError = ref(true);
const show = ref(false);
const store = useStore();
const router = useRouter();

const getResetLink = async () => {
  try {
    await store.dispatch("resetpassword", email.value);
    message.value = `Reset link sent sucessfuly to ${email.value}`;
    show.value = true;
    isError.value = false;
    setTimeout(() => {
      show.value = false;
      isError.value = true;
      router.push({ name: "Login" });
    }, 3000);
  } catch (err) {
    message.value = errorMessage(err.code);
    show.value = true;
    setTimeout(() => {
      show.value = false;
    }, 3000);
  }
};
</script>
