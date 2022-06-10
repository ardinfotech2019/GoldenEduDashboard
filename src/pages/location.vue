<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Centre Data</h2>
      </div>
      <div class="flex justify-center">
        <form
          @submit.prevent="updateDetails()"
          class="w-96 bg-gray-900 h-screen md:h-auto  rounded-md"
        >
          <div class="px-3 pb-3">
            <p class="text-sm text-red-500" v-if="isError">
              {{ errorMsg }}
            </p>
          </div>

          <div>
            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Centre Address</label
              >
              <div class="">
                <textarea
                  rows="4"
                  id="email"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded p-3"
                  placeholder="example@gmail.com"
                  autofocus
                  required
                  v-model="data.address"
                />
              </div>
            </div>

            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Phone Number</label
              >
              <div class="h-11">
                <input
                  type="number"
                  id="phonenumber"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded p-3"
                  placeholder="98725*****"
                  autofocus
                  required
                  v-model="data.phoneNumber"
                />
              </div>
            </div>

            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Alternate Phone Number</label
              >
              <div class="h-11">
                <input
                  type="number"
                  id="alternatephonenumber"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded p-3"
                  placeholder="98725*****"
                  autofocus
                  required
                  v-model="data.alternateNumber"
                />
              </div>
            </div>

            <div class="px-3 pb-6 space-y-1.5">
              <label for="email" class="text-gray-400 text-sm"
                >Email address</label
              >
              <div class="h-11">
                <input
                  type="email"
                  id="email"
                  class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded p-3"
                  placeholder="abc@gmail.com"
                  autofocus
                  required
                  v-model="data.email"
                />
              </div>
            </div>

            <div class="w-full px-3 pt-6 pb-7">
              <button
                class="w-full bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  address: "",
  phoneNumber: "",
  alternateNumber: "",
  email: "",
});
</script>
