import { createStore } from "vuex";
import { auth, db } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

import {
  getDownloadURL,
  getStorage,
  ref as strRef,
  uploadBytes,
} from "firebase/storage";
const storage = getStorage();

// Collections
export const SubjectCollection = collection(db, "Subjects");
export const CourseCollection = collection(db, "Courses");
const StudentCollection = collection(db, "Student");
// Store
const store = createStore({
  state() {
    return {
      user: null,
      isLogin: null,
      subjects: null,
      courses: null,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("State User", state.user);
    },
    setSubjects(state, payload) {
      state.subjects = payload;
    },
    setCourses(state, payload) {
      state.courses = payload;
    },
  },

  actions: {
    async signIn(context, data) {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (user) {
        context.commit("setUser", user.user);
      }
    },
    async resetpassword(context, email) {
      await sendPasswordResetEmail(auth, email);
      console.log("Send");
    },
    async signout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
    async addSubject(context, name) {
      await addDoc(SubjectCollection, { name });
    },
    async deleteSubject(context, id) {
      await deleteDoc(doc(SubjectCollection, id));
    },
    async addCourse(context, name) {
      await addDoc(CourseCollection, { name });
    },
    async deleteCourse(context, id) {
      await deleteDoc(doc(CourseCollection, id));
    },
    async updatePrfile(context) {
      await updateProfile(auth.currentUser, {
        displayName: "Daman",
      });
    },
    async uploadProfile(context, file) {
      const storageRef = strRef(storage, "profile/" + file.name);
      await uploadBytes(storageRef);
      const link = await getDownloadURL(storageRef);
      return link;
    },
    async addResult(context, data) {
      await addDoc(StudentCollection, data);
    },
  },
  getters: {
    getUser: (state) => state.user,
    isLogin: (state) => state.isLogin,
    getSubjects: (state) => state.subjects,
    getCourses: (state) => state.courses,
  },
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("setUser", user);
  }
});

export default store;
