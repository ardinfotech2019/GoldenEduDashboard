<template>
  <section
    class="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex justify-center items-center"
  >
    <form
      @submit.prevent="signin()"
      class="w-96 bg-gray-900 h-screen md:h-auto p-5 rounded-md shadow-2xl"
    >
      <div class="w-full flex justify-center items-center pt-6 pb-10">
        <img
          src="https://ik.imagekit.io/geduCDN/logo_1EnEXNz4V.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654276225744"
          alt="golden education logo"
          class="w-44"
        />
      </div>

      <div class="px-3 pb-3">
        <p class="text-sm text-red-500" v-if="isError">
          {{ errorMsg }}
        </p>
      </div>

      <div>
        <div class="px-3 pb-6 space-y-1.5">
          <label for="email" class="text-gray-400 text-sm">Email address</label>
          <div class="h-11">
            <input
              type="email"
              id="email"
              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
              placeholder="example@gmail.com"
              autofocus
              required
              v-model="data.email"
            />
          </div>
        </div>

        <div class="px-3 pb-3 space-y-1.5">
          <label for="email" class="text-gray-400 text-sm">Password</label>
          <div class="h-11 relative">
            <input
              :type="isShow ? 'text' : 'password'"
              id="password"
              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
              placeholder="********"
              required
              v-model="data.password"
            />
            <span
              class="absolute bg-gray-800 text-[#e6c34f] text-base right-0 px-3 top-0 bottom-0 flex justify-center items-center cursor-pointer"
              @click="showHide()"
            >
              {{ isShow ? "Hide" : "Show" }}
            </span>
          </div>
        </div>

        <div class="w-full text-right pr-3">
          <router-link
            to="/forgot"
            class="text-sm text-gray-400 hover:text-[#e6c34f]"
          >
            Forgot password ?
          </router-link>
        </div>

        <div class="w-full px-3 pt-6 pb-7">
          <button
            class="w-full bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
          >
            Sign In
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { errorMessage } from "../firebase/error";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const isShow = ref(false);
const isError = ref(false);
const errorMsg = ref("");

const data = reactive({
  email: "",
  password: "",
});

const showHide = () => {
  isShow.value = !isShow.value;
};

const signin = async () => {
  try {
    await store.dispatch("signIn", data);
    router.push("/");
  } catch (err) {
    isError.value = true;
    errorMsg.value = errorMessage(err.code);
    console.log("Error : ", err);
    setTimeout(() => {
      isError.value = false;
    }, 3000);
  }
};
</script>
