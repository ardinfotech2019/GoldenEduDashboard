<template>
  <section
    class="bg-gray-900 text-white w-screen h-screen md:w-full md:h-auto rounded-md md:p-5 shadow-2xl overflow-y-auto divide-y-2 divide-gray-800"
  >
    <div class="h-24 flex items-center justify-between px-5 mdb:pb-5">
      <h2 class="text-2xl md:text-4xl">Student Detail</h2>
    </div>
    <div class="p-5 md:grid md:grid-rows-2 gap-5">
      <div class="flex flex-col md:flex-row gap-10">
        <div class="text-center">
          <img
            :src="data.profile.Img.cdnURL"
            alt="profile"
            class="w-52 h-62 rounded ring-2 ring-gray-700 mb-3"
          />
          <span class="text-lg text-center tracking-wide">{{
            data.profile.name
          }}</span>
        </div>

        <div class="flex flex-col gap-y-2 space-y-3 md:space-y-2">
          <div
            class="flex flex-col md:flex-row md:divide-x-2 divide-gray-600 md:space-x-8 space-y-3 md:space-y-0"
          >
            <!-- Registration -->
            <label class="tracking-wider">
              <span class="font-semibold text-gray-500 mr-2">Reg No :</span>
              {{ data.regno }}
            </label>
            <!-- Session -->
            <label class="tracking-wider md:pl-8">
              <span class="font-semibold text-gray-500 mr-2">Session : </span>
              {{ data.session }}
            </label>
            <!-- Certificate -->
            <label class="tracking-wider md:pl-8">
              <span class="font-semibold text-gray-500 mr-2"
                >Certificate No :</span
              >
              {{ data.certno }}
            </label>
          </div>
          <!-- Father Name -->
          <label class="tracking-wider">
            <span class="font-semibold text-gray-500 mr-2">D.O.B :</span>
            {{ data.profile.dob }}
          </label>
          <!-- Father Name -->
          <label class="tracking-wider">
            <span class="font-semibold text-gray-500 mr-2">Father Name :</span>
            {{ data.profile.fatherName }}
          </label>
          <!-- Mother Name -->
          <label class="tracking-wider">
            <span class="font-semibold text-gray-500 mr-2">Mother Name :</span>
            {{ data.profile.motherName }}
          </label>
          <!-- Phone Number -->
          <label class="tracking-wider">
            <span class="font-semibold text-gray-500 mr-2">Phone Number :</span>
            {{ data.phonenumber }}
          </label>
          <!-- Course -->
          <label class="tracking-wider capitalize">
            <span class="font-semibold text-gray-500 mr-2">Course :</span>
            {{ data.course.name }} - {{ data.course.duration }}
          </label>
          <!-- Address -->
          <label class="tracking-wider capitalize">
            <span class="font-semibold text-gray-500 mr-2">Address :</span>
            {{ data.address.street }}, {{ data.address.city }} ({{
              data.address.pinCode
            }}), {{ data.address.state }}
          </label>
        </div>
      </div>

      <!-- Result -->
      <div class="overflow-x-auto mt-8 md:mt-5">
        <table
          class="text-sm w-full text-left text-gray-100 ring-1 ring-gray-700 rounded table-auto"
        >
          <thead
            class="text-xs text-gray-300 uppercase border-b border-gray-600 sticky"
          >
            <tr class="text-left text-sm tracking-wide">
              <th scope="col" class="px-6 py-3">Subject</th>
              <th scope="col" class="px-6 py-3 text-center">Obtain</th>
              <th scope="col" class="px-6 py-3 text-center">Minimum</th>
              <th scope="col" class="px-6 py-3 text-center">Maximum</th>
            </tr>
          </thead>

          <tbody>
            <tr
              class="text-base capitalize dark:bg-gray-800 dark:border-gray-700 text-left tracking-wide border-b-[0.5px] border-gray-800"
              v-for="(result, index) in data.result"
              :key="result.subject"
            >
              <td class="px-6 py-4">{{ result.subject }}</td>
              <td class="px-6 py-4 text-center">{{ result.obtain }}</td>
              <td class="px-6 py-4 text-center">{{ result.min }}</td>
              <td class="px-6 py-4 text-center">{{ result.max }}</td>
            </tr>
            <tr>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4 text-center font-semibold text-lg">
                Total Marks
              </td>
              <td class="px-6 py-4 text-center font-semibold text-lg">
                {{ data.markObtain }} / {{ data.fromObtain }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div class="flex justify-center md:flex-row flex-col gap-x-8">
          <router-link
            :to="{ name: 'Studentedit', params: { id: StudentId } }"
            class="w-full text-center mb-7 md:mb-0 md:w-80 bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
          >
            Edit
          </router-link>
          <button
            @click="deleteResult()"
            class="w-full mb-7 md:mb-0 md:w-80 bg-red-500 hover:bg-red-500 shadow-lg shadow-red-400/20 text-gray-100 font-semibold border-none rounded py-2.5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Store, useStore } from "vuex";
import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

const store = useStore();
const router = useRouter();
const route = useRoute(router);
const StudentId = route.params.id;
const data = reactive({
  regno: "",
  certno: "",
  session: "",
  phonenumber: "",
  profile: {
    Img: {
      cdnURL: "",
      originalURL: "",
    },
    name: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
  },
  address: {
    street: "",
    city: "",
    pinCode: "",
    state: "",
  },
  course: {
    name: "",
    duration: "",
  },
  result: [],
});

onMounted(async () => {
  const result = await getDoc(doc(db, "Student", route.params.id));
  const student = result.data();
  data.regno = student.regno;
  data.certno = student.certno;
  data.session = student.session;
  data.phonenumber = student.phonenumber;
  data.profile.Img.cdnURL = student.profile.Img.cdnURL;
  data.profile.Img.originalURL = student.profile.Img.originalURL;
  data.profile.name = student.profile.name;
  data.profile.gender = student.profile.gender;
  data.profile.dob = student.profile.dob;
  data.profile.fatherName = student.profile.fatherName;
  data.profile.motherName = student.profile.motherName;
  data.address.street = student.address.street;
  data.address.city = student.address.city;
  data.address.pinCode = student.address.pinCode;
  data.address.state = student.address.state;
  data.course.name = student.course.name;
  data.course.duration = student.course.duration;
  data.result = student.result;
  if (student.result.length <= 1) {
    data.markObtain = student.result[0].obtain;
    data.fromObtain = student.result[0].max;
  } else {
    data.markObtain = student.result.reduce(
      (acc, curr) => acc.obtain + curr.obtain
    );
    data.fromObtain = student.result.reduce((acc, curr) => acc.max + curr.max);
  }
});

const deleteResult = async () => {
  let CertNo = prompt(`Please re-type ${data.certno} for delete result`);
  if (CertNo === data.certno) {
    let choice = confirm("Are you sure you want to delete ?");
    if (choice) {
      await store.dispatch("deleteStudent", StudentId);
      await store.commit("clearArray");
      await store.dispatch("getAllStudents");
      router.push("/d/students");
      alert("Result deleted successfully :)");
    }
  } else {
    alert("Certificate number not matched !!!!");
  }
};
</script>

<style lang="scss" scoped></style>
