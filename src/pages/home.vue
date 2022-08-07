<template>
  <section class="flex">
    <!-- Sidebar section (aside) tag -->
    <SideBar>
      <LogoImage />
      <NavList>
        <!-- <ListItem
          v-for="(listData, index) in listDatas"
          :key="listData.id"
          :name="listData.name"
          :icon="listData.icon"
          :path="listData.path"
        /> -->
        <!-- <ListItem name="Home" icon="fa-house" path="/" /> -->
        <ListItem name="Subjects" icon="fa-books" path="/" />
        <ListItem name="Courses" icon="fa-graduation-cap" path="/d/courses" />
        <ListItem name="Result" icon="fa-cloud-arrow-up" path="/d/result" />
        <ListItem name="Students" icon="fa-screen-users" path="/d/students" />
        <ListItem
          name="Location"
          icon="fa-location-crosshairs"
          path="/d/location"
        />
        <ListItem name="Settings" icon="fa-gears" path="/d/settings" />
      </NavList>
      <userProfile :user="user" />
    </SideBar>

    <!-- Main part or contect section -->
    <main
      class="md:w-[80%] md:px-4 md:py-4 overflow-y-auto md:h-screen"
      id="main"
    >
      <router-view></router-view>
    </main>
  </section>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import NavList from "../components/NavigationList.vue";
import LogoImage from "../components/LogoImage.vue";
import ListItem from "../components/ListItem.vue";
import userProfile from "../components/userProfile.vue";
import { useStore } from "vuex";
import { onSnapshot } from "firebase/firestore";
import { CoursesAndSubjects } from "../store/store";
import { onMounted } from "vue";

const store = useStore();

if (store.getters.getUser) {
  onSnapshot(CoursesAndSubjects, (snapshot) => {
    let data = [];
    snapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log(data[0]);
    store.commit("setSubjects", data[0].Subjects);
    store.commit("setCourses", data[0].Courses);
  });
}

const user = store.getters.getUser;

onMounted(() => {
  store.dispatch("getAllStudents");
});
</script>
