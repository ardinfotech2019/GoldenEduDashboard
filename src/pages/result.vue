<template>
  <section>
    <div
      class="bg-gray-900 text-white w-screen h-screen md:w-full md:h-auto rounded-md md:p-5 shadow-2xl overflow-y-auto divide-y-2 divide-gray-800"
    >
      <div class="h-24 flex items-center justify-between px-5 mdb:pb-5">
        <h2 class="text-2xl md:text-4xl">Upload Result</h2>
      </div>
      <form @submit.prevent="submitStudentResult()" class="px-5">
        <div class="w-full py-5">
          <!-- Registration -->
          <div class="pb-7">
            <h4 class="text-xl text-gray-300 pb-6 tracking-wider">
              Registration
            </h4>
            <div class="flex md:flex-row flex-col gap-x-8">
              <div class="pb-6 space-y-1.5 w-full md:w-60">
                <label for="Regno" class="text-gray-400 text-sm">Reg No.</label>
                <div class="h-11">
                  <input
                    type="text"
                    id="Regno"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    placeholder="123456***"
                    autofocus
                    required
                    v-model="data.regno"
                  />
                </div>
              </div>
              <div class="pb-6 space-y-1.5 w-full md:w-60">
                <label for="certificateno" class="text-gray-400 text-sm"
                  >Certificate No.</label
                >
                <div class="h-11">
                  <input
                    type="text"
                    id="certificateno"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    placeholder="GEC22A****"
                    autofocus
                    required
                    v-model="data.certno"
                  />
                </div>
              </div>
              <div class="pb-6 space-y-1.5 w-full md:w-60">
                <label for="session" class="text-gray-400 text-sm"
                  >Session</label
                >
                <div class="h-11">
                  <input
                    type="text"
                    id="session"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    placeholder="APR.2022-MAY.2022"
                    autofocus
                    required
                    v-model="data.session"
                  />
                </div>
              </div>
              <div class="pb-6 space-y-1.5 w-full md:w-60">
                <label for="session" class="text-gray-400 text-sm"
                  >Phone Number</label
                >
                <div class="h-11">
                  <input
                    type="text"
                    id="session"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    placeholder="APR.2022-MAY.2022"
                    autofocus
                    required
                    v-model="data.phonenumber"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Profile -->
          <div class="pb-7">
            <h4 class="text-xl text-gray-300 pb-6 tracking-wider">
              Student Profile
            </h4>

            <div>
              <div class="flex md:flex-row flex-col justify-between">
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="fullname" class="text-gray-400 text-sm"
                    >Profile</label
                  >
                  <div class="h-11">
                    <input
                      class="text-gray-400 mt-2"
                      id="file_input"
                      type="file"
                      @change="selectedFile"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="lastname" class="text-gray-400 text-sm"
                    >Full name</label
                  >
                  <div class="h-11">
                    <input
                      type="text"
                      id="lastname"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="example"
                      autofocus
                      required
                      v-model="data.profile.name"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="Gender" class="text-gray-400 text-sm"
                    >Gender</label
                  >
                  <div class="h-11">
                    <select
                      id="Gender"
                      name="Gender"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      v-model="data.profile.gender"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex md:flex-row flex-col justify-between">
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="dob" class="text-gray-400 text-sm"
                    >Date of Birth</label
                  >
                  <div class="h-11">
                    <input
                      type="text"
                      id="dob"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="01/12/2000"
                      autofocus
                      required
                      v-model="data.profile.dob"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="fathername" class="text-gray-400 text-sm"
                    >Father's name</label
                  >
                  <div class="h-11">
                    <input
                      type="text"
                      id="fathername"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="example"
                      autofocus
                      required
                      v-model="data.profile.fatherName"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="mname" class="text-gray-400 text-sm"
                    >Mother's name</label
                  >
                  <div class="h-11">
                    <input
                      type="text"
                      id="mname"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="example"
                      autofocus
                      required
                      v-model="data.profile.motherName"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex md:flex-row flex-col justify-between">
                <div class="pb-6 space-y-1.5 w-full">
                  <label for="dob" class="text-gray-400 text-sm">Address</label>
                  <div class="h-11">
                    <textarea
                      id="dob"
                      class="w-full h-20 outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="ABC street"
                      autofocus
                      required
                      v-model="data.address.street"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex md:flex-row flex-col justify-between mt-9">
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="city" class="text-gray-400 text-sm">City</label>
                  <div class="h-11">
                    <input
                      type="text"
                      id="city"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="example"
                      autofocus
                      required
                      v-model="data.address.city"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="pincode" class="text-gray-400 text-sm"
                    >Pin code</label
                  >
                  <div class="h-11">
                    <input
                      type="text"
                      id="pincode"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      placeholder="123456"
                      autofocus
                      required
                      maxlength="6"
                      v-model="data.address.pinCode"
                    />
                  </div>
                </div>
                <div class="pb-6 space-y-1.5 w-full md:w-80">
                  <label for="state" class="text-gray-400 text-sm">State</label>
                  <div class="h-11">
                    <select
                      id="state"
                      name="state"
                      class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                      v-model="data.address.state"
                    >
                      <option v-for="state in States" :value="state">
                        {{ state }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Course -->
          <div class="pb-7">
            <h4 class="text-xl text-gray-300 pb-6 tracking-wider">
              Course Detail
            </h4>
            <div class="flex md:flex-row flex-col gap-x-8">
              <div class="pb-6 space-y-1.5 w-full md:w-80">
                <label for="course" class="text-gray-400 text-sm">Course</label>
                <div class="h-11">
                  <select
                    id="course"
                    name="course"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    v-model="data.course.name"
                  >
                    <option
                      v-for="course in Courses"
                      :value="course.name"
                      class="capitalize"
                    >
                      {{ course.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="pb-6 space-y-1.5 w-full md:w-80">
                <label for="duration" class="text-gray-400 text-sm"
                  >Course Duration</label
                >
                <div class="h-11">
                  <select
                    id="duration"
                    name="duration"
                    class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                    v-model="data.course.duration"
                  >
                    <option
                      v-for="duration in Durations"
                      :value="duration"
                      class="capitalize"
                    >
                      {{ duration }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Result -->

          <div class="pb-7">
            <h4 class="text-xl text-gray-300 pb-6 tracking-wider">Result</h4>
            <div class="flex md:flex-row flex-col gap-x-8">
              <div
                class="w-full relative overflow-x-auto shadow-md sm:rounded-lg"
              >
                <table
                  class="text-sm w-full text-left text-gray-100 ring-1 ring-gray-700 rounded table-auto"
                >
                  <thead
                    class="text-xs text-gray-300 uppercase border-b border-gray-600 sticky"
                  >
                    <tr>
                      <th scope="col" class="px-6 py-3">Course</th>
                      <th scope="col" class="px-6 py-3">Marks</th>
                      <th scope="col" class="px-6 py-3">Minimum</th>
                      <th scope="col" class="px-6 py-3">Maximum</th>
                      <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Delete</span>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Add</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="text-base capitalize dark:bg-gray-800 dark:border-gray-700 text-left tracking-wide border-b-[0.5px] border-gray-800"
                      v-for="(row, index) in data.result"
                      :key="index"
                    >
                      <td class="px-6 py-4">
                        <div class="pb-6 space-y-1.5 w-48 md:w-80">
                          <div class="h-11">
                            <select
                              id="course"
                              name="course"
                              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                              v-model="row.subject"
                            >
                              <option
                                v-for="subject in Subjects"
                                :value="subject.name"
                                class="capitalize"
                              >
                                {{ subject.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <div class="pb-6 space-y-1.5 w-16 md:w-32">
                          <div class="h-11">
                            <input
                              type="number"
                              id="obtain"
                              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                              placeholder="49"
                              autofocus
                              required
                              v-model="row.obtain"
                            />
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <div class="pb-6 space-y-1.5 w-16 md:w-32">
                          <div class="h-11">
                            <input
                              type="number"
                              id="min"
                              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                              placeholder="33"
                              autofocus
                              required
                              v-model="row.min"
                            />
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <div class="pb-6 space-y-1.5 w-16 md:w-32">
                          <div class="h-11">
                            <input
                              type="number"
                              id="max"
                              class="w-full h-full outline-none border-none bg-gray-800 text-gray-400 ring-2 ring-gray-700 focus:ring-[#e6c34f] rounded px-3"
                              placeholder="100"
                              autofocus
                              required
                              v-model="row.max"
                            />
                          </div>
                        </div>
                      </td>

                      <td class="px-6 text-right" v-if="data.result.length > 1">
                        <a
                          href="#"
                          class="font-medium flex gap-2 justify-center items-center text-red-400 hover:text-red-500 hover:no-underline"
                          @click="removeRow(index)"
                          ><i class="fa-duotone fa-trash-can"></i>
                          <span class="tracking-wide">Delete</span></a
                        >
                      </td>
                      <td class="px-6 text-right">
                        <a
                          href="#"
                          class="font-medium flex gap-2 justify-center items-center text-green-400 hover:text-green-500 hover:no-underline"
                          @click="addRow()"
                          ><i class="fa-duotone fa-circle-plus"></i>
                          <span class="tracking-wide">Add</span></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="pt-10 py-7">
            <div class="flex justify-center md:flex-row flex-col gap-x-8">
              <button
                type="submit"
                class="w-full mb-7 md:mb-0 md:w-80 bg-[#e6c34f] hover:bg-amber-300 shadow-lg shadow-[#e6c34f]/20 text-gray-900 font-semibold border-none rounded py-2.5"
              >
                Submit
              </button>
              <button
                type="reset"
                class="w-full mb-7 md:mb-0 md:w-80 bg-red-500 hover:bg-red-500 shadow-lg shadow-red-400/20 text-gray-100 font-semibold border-none rounded py-2.5"
              >
                Reset
              </button>
            </div>
          </div>

          <Teleport to="#app">
            <div
              v-if="open"
              :class="[
                'absolute flex gap-4 items-center right-5 top-5 z-50 w-80 h-14 px-5 p-2 rounded',
                isError
                  ? 'bg-red-200 text-red-800'
                  : 'bg-green-200 text-green-800',
              ]"
            >
              <div class="">
                <i
                  :class="[
                    isError
                      ? 'fa-duotone fa-cloud-exclamation icon-error-color'
                      : 'fa-duotone fa-cloud-check icon-success-color',
                    ' w-10 h-10 ',
                  ]"
                ></i>
              </div>
              <div>
                <p class="text-lg">Result not upload</p>
              </div>
            </div>
          </Teleport>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { States, Durations } from "../constList";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";

const store = useStore();
const open = ref(null);
const isError = ref(false);
const Courses = computed(() => store.getters.getCourses);
const Subjects = computed(() => store.getters.getSubjects);

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
  result: [
    {
      subject: "",
      obtain: 0,
      min: 0,
      max: 0,
    },
  ],
});

const addRow = () => {
  data.result.push({
    subject: "",
    obtain: 0,
    min: 0,
    max: 0,
  });
};
const removeRow = (index) => {
  data.result.splice(index, 1);
};
const selectedFile = async (event) => {
  let file = event.target.files[0];
  let uploadedFile = await store.dispatch("uploadProfile", file);
  data.profile.Img.originalURL = uploadedFile;
  let cdnURL = uploadedFile.replace(
    "https://firebasestorage.googleapis.com/",
    "https://ik.imagekit.io/geduCDN/"
  );
  data.profile.Img.cdnURL = cdnURL;
  console.log("Original URL : ", data.profile.Img.originalURL);
  console.log("CDN URL : ", data.profile.Img.cdnURL);
};
const submitStudentResult = async () => {
  try {
    await store.dispatch("addResult", data);
    open.value = true;
    isError.value = false;
    setTimeout(() => {
      open.value = false;
    }, 3000);
  } catch (error) {
    console.log(error);
    isError.value = true;
    setTimeout(() => {
      open.value = false;
      isError.value = false;
    }, 3000);
  }
};
</script>

<style lang="css" scoped>
.icon-error-color {
  --fa-primary-color: #ff1119;
  --fa-secondary-color: #ee1919;
}
.icon-success-color {
  --fa-primary-color: #166534;
  --fa-secondary-color: #166534;
}
</style>
