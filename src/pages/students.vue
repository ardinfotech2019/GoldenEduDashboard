<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Students</h2>
      </div>
      <table
        class="text-sm w-full text-left text-gray-100 ring-1 ring-gray-700 rounded table-auto"
      >
        <thead
          class="text-xs text-gray-300 uppercase border-b border-gray-600 sticky"
        >
          <tr class="text-left text-sm tracking-wide">
            <th scope="col" class="px-6 py-3">Reg No.</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Father name</th>
            <th scope="col" class="px-6 py-3">Course</th>

            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="text-base capitalize dark:bg-gray-800 dark:border-gray-700 text-left tracking-wide border-b-[0.5px] border-gray-800"
            v-for="(student, index) in students"
            :key="student.id"
          >
            <td class="px-6 py-4">{{ student.regno }}</td>
            <td class="px-6 py-4">{{ student.profile.name }}</td>
            <td class="px-6 py-4">{{ student.profile.fatherName }}</td>
            <td class="px-6 py-4">{{ student.course.name }}</td>
            <td class="px-3 py-4 text-right">
              <router-link
                :to="{ name: 'Studentview', params: { id: student.id } }"
                class="font-medium flex gap-2 justify-center items-center text-green-400 hover:text-green-500 hover:no-underline"
                ><i class="fa-duotone fa-eye"></i>
                view
              </router-link>
            </td>
            <td class="px-3 py-4 text-right">
              <router-link
                :to="{ name: 'Studentedit', params: { id: student.id } }"
                class="font-medium flex gap-2 justify-center items-center text-blue-400 hover:text-blue-500 hover:no-underline"
                ><i class="fa-duotone fa-pencil"></i>
                edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <p
        v-if="subjects == ''"
        class="w-full text-gray-700 text-xl text-center py-5"
      >
        No Student
      </p>
      <div class="w-full text-center pt-10 pb-6">
        <button
          class="bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5 px-5"
          @click="store.dispatch('nextStudents')"
        >
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { onSnapshot } from "firebase/firestore";

const store = useStore();

const error = reactive({
  isError: false,
  message: "",
});

const students = computed(() => store.getters.getStudents);
</script>

<style lang="css" scoped></style>
