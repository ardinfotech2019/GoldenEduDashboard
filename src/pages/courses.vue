<template>
  <section>
    <div
      class="bg-gray-900 text-white rounded-md md:p-5 shadow-2xl overflow-y-auto"
    >
      <div class="h-24 flex items-center justify-between px-5 pb-5">
        <h2 class="text-4xl">Courses</h2>
        <div class="flex relative w-80 h-10">
          <input
            type="text"
            name="course"
            autofocus
            required
            placeholder="Enter course name"
            id="course"
            :class="[
              'bg-gray-900 w-full px-3 border-none outline-none rounded ring-2 ring-gray-700 focus:shadow-lg focus:shadow-amber-400/10',
              error.isError ? ' disabled:ring-red-400' : 'focus:ring-[#e6c34f]',
            ]"
            v-model="course"
            :disabled="error.isError"
            v-on:keyup.enter="addCourse()"
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
            <th scope="col" class="px-6 py-3">Course Name</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="text-base capitalize dark:bg-gray-800 dark:border-gray-700 text-left tracking-wide border-b-[0.5px] border-gray-800"
            v-for="(course, index) in Courses"
            :key="course.id"
          >
            <td class="px-6 py-4 text-left pl-10">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ course.name }}</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium flex gap-2 justify-center items-center text-red-400 hover:text-red-500 hover:no-underline"
                @click="deleteCourse(course.id)"
                ><i class="fa-duotone fa-trash-can"></i>
                <span class="tracking-wide">Delete</span></a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p
        v-if="Courses == ''"
        class="w-full text-gray-700 text-xl text-center py-5"
      >
        No Courses....
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const course = ref("");
const error = reactive({
  isError: false,
  msg: "Please enter course....",
});

const Courses = computed(() => {
  return store.getters.getCourses;
});

const addCourse = async () => {
  if (course.value != "") {
    await store.dispatch("addCourse", course.value.toLowerCase());
    course.value = "";
  } else {
    error.isError = true;
    setTimeout(() => {
      error.isError = false;
    }, 1000);
  }
};

const deleteCourse = async (id) => {
  await store.dispatch("deleteCourse", id);
};

</script>
