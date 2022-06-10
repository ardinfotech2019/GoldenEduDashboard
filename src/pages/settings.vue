<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Settings</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x-2 divide-gray-700">
        <div class="flex justify-center">
          <form class="bg-gray-900 p-5" @submit.prevent="updateProfile()">
            <div class="px-3 py-6">
              <h3 class="text-2xl text-gray-300">Profile Details</h3>
            </div>
            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Email address</label
              >
              <div class="h-11 w-96">
                <input
                  type="email"
                  id="email"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                  placeholder="example@gmail.com"
                  autofocus
                  required
                  disabled
                  v-model="email"
                />
              </div>
            </div>
            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Display Name</label
              >
              <div class="h-11 w-96">
                <input
                  type="text"
                  id="name"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                  placeholder="hello"
                  autofocus
                  required
                  v-model="name"
                />
              </div>
            </div>
            <div class="w-full px-3 pt-6 pb-7">
              <button
                class="w-full bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>

        <div class="flex justify-center">
          <form class="bg-gray-900 p-5" @submit.prevent="changePassword()">
            <div class="px-3 py-6">
              <h3 class="text-2xl text-gray-300">Change Password</h3>
            </div>
            <div class="px-3 pb-6 space-y-1.5">
              <label for="password" class="text-gray-400 text-sm"
                >New Password</label
              >
              <div class="h-11 w-96 relative">
                <input
                  :type="isShow ? 'text' : 'password'"
                  id="password"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                  placeholder="********"
                  required
                  v-model="password"
                />
                <span
                  class="absolute bg-gray-800 text-[#e6c34f] text-base right-0 px-3 top-0 bottom-0 flex justify-center items-center cursor-pointer"
                  @click="showHide()"
                >
                  {{ isShow ? "Hide" : "Show" }}
                </span>
              </div>
            </div>
            <div class="px-3 pb-6 space-y-1.5">
              <label for="cpassword" class="text-gray-400 text-sm"
                >Confirm Password</label
              >
              <div class="h-11 w-96 relative">
                <input
                  type="text"
                  id="cpassword"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                  placeholder="********"
                  required
                  v-model="confirmPassword"
                />
              </div>
            </div>
            <div class="w-full px-3 pt-6 pb-7">
              <button
                class="w-full bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const email = ref("");
const name = ref("");

const password = ref("");
const confirmPassword = ref("");

const isShow = ref(false);
const showHide = () => {
  isShow.value = !isShow.value;
};

onMounted(() => {
  email.value = store.state.user.email;
  name.value = store.state.user.displayName;
});

const updateProfile = async () => {
  if (name.value == store.state.user.displayName) {
    alert("Please enter different name");
  } else {
    try {
      await store.dispatch('updateUserProfile',name.value);
      alert("Name Updated");
    } catch (err) {
      alert("Name not updated " + err.code);
    }
  }
};

const changePassword = async () => {
  if (password.value == confirmPassword.value) {
    try {
      await store.dispatch("changePassword", confirmPassword.value);
      alert("Password Changed");
      password.value = "";
      confirmPassword.value = "";
      await store.dispatch("signout");
      router.push("/login");
    } catch (err) {
      alert("Password not Changed!!!" + err.message);
    }
  } else {
    alert("Password not matched");
  }
};
</script>

<style lang="scss" scoped></style>
