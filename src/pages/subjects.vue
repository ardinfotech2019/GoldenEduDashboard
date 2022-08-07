<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Subjects</h2>
        <div class="flex relative w-80 h-10">
          <input
            type="text"
            name="subjects"
            autofocus
            required
            placeholder="Enter subject name"
            id="subjects"
            :class="[
              'bg-gray-900 w-full px-3 border-none outline-none rounded ring-2 ring-gray-700 focus:shadow-lg focus:shadow-amber-400/10',
              error.isError ? ' disabled:ring-red-400' : 'focus:ring-[#e6c34f]',
            ]"
            v-model="subject"
            :disabled="error.isError"
            v-on:keyup.enter="addSubject()"
          />
          <p
            v-if="error.isError"
            class="absolute -bottom-6 text-sm text-red-400"
          >
            {{ error.msg }}
          </p>
          <span
            class="bg-gray-900 absolute flex justify-center items-center right-0 top-0 bottom-0 px-4"
          >
            <i class="fa-duotone fa-turn-down-left"></i>
          </span>
        </div>
      </div>
      <table
        class="text-sm w-full text-left text-gray-100 ring-1 ring-gray-700 rounded table-auto"
      >
        <thead
          class="text-xs text-gray-300 uppercase border-b border-gray-600 sticky"
        >
          <tr class="text-left text-sm tracking-wide">
            <th scope="col" class="px-6 py-3">Index</th>
            <th scope="col" class="px-6 py-3">Subject Name</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="text-base dark:bg-gray-800 dark:border-gray-700 text-left tracking-wide border-b-[0.5px] border-gray-800"
            v-for="(subject, index) in subjects"
            :key="index"
          >
            <td class="px-6 py-4 text-left pl-10">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ subject }}</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium flex gap-2 justify-center items-center text-red-400 hover:text-red-500 hover:no-underline"
                @click="deleteSubject(subject)"
                ><i class="fa-duotone fa-trash-can"></i>
                <span class="tracking-wide">Delete</span></a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p
        v-if="subjects == ''"
        class="w-full text-gray-700 text-xl text-center py-5"
      >
        No Subjects....
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

const subject = ref("");
const store = useStore();
const error = reactive({
  isError: false,
  msg: "Please enter subject....",
});

const subjects = computed(() => store.getters.getSubjects);

const addSubject = () => {
  if (subject.value != "") {
    store.dispatch("addSubject", subject.value);
    subject.value = "";
  } else {
    error.isError = true;
    setTimeout(() => {
      error.isError = false;
    }, 1000);
  }
};

const deleteSubject = async (subjectName) => {
  await store.dispatch("deleteSubject", subjectName);
};
</script>
