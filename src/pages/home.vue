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
        <ListItem name="Home" icon="fa-house" path="/" />
        <ListItem name="Subjects" icon="fa-books" path="/d/subjects" />
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
      class="md:w-[80%] md:px-6 md:py-6 overflow-y-auto md:h-screen"
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

const store = useStore();
const user = store.getters.getUser;
const listDatas = [
  {
    id: 0,
    name: "Home",
    icon: "fa-house",
    path: "/",
  },
  {
    id: 1,
    name: "Subjects",
    icon: "fa-books",
    path: "/d/subjects",
  },
  {
    id: 2,
    name: "Courses",
    icon: "fa-graduation-cap",
    path: "/d/courses",
  },
  {
    id: 3,
    name: "Result",
    icon: "fa-cloud-arrow-up",
    path: "/d/result",
  },
  {
    id: 4,
    name: "Students",
    icon: "fa-screen-users",
    path: "/students",
  },
  {
    id: 5,
    name: "Add User",
    icon: "fa-user-plus",
    path: "/addusers",
  },
  {
    id: 6,
    name: "Location",
    icon: "fa-location-crosshairs",
    path: "/location",
  },
  {
    id: 7,
    name: "Settings",
    icon: "fa-gears",
    path: "/settings",
  },
];
</script>
