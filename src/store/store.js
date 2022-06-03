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
  getDownloadURL,
  getStorage,
  ref as strRef,
  uploadBytes,
} from "firebase/storage";

import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  query,
  limit,
  startAt,
  startAfter,
  orderBy,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const storage = getStorage();
let lastDoc = null;
// Collections
export const SubjectCollection = collection(db, "Subjects");
export const CourseCollection = collection(db, "Courses");
export const StudentCollection = collection(db, "Student");
// Store
const store = createStore({
  state() {
    return {
      user: null,
      isLogin: null,
      subjects: null,
      courses: null,
      students: [],
      studentDeatil: null,
    };
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setSubjects(state, payload) {
      state.subjects = payload;
    },
    setCourses(state, payload) {
      state.courses = payload;
    },
    setStudent(state, payload) {
      state.students.push(payload);
    },
    setSingleStudent(state, payload) {
      state.studentDeatil = payload;
    },
    clearArray(state) {
      state.students = [];
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
    },
    async signout(context) {
      await signOut(auth);
      context.commit("setUser", null);
      context.commit("setSubjects", null);
      context.commit("setCourses", null);
      context.commit("clearArray");
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
    async getAllStudents(context) {
      const ref = query(StudentCollection, orderBy("certno"), limit(2));
      const data = await getDocs(ref);
      data.forEach((doc) => {
        context.commit("setStudent", { id: doc.id, ...doc.data() });
      });

      lastDoc = data.docs[data.docs.length - 1];
    },
    async nextStudents(context) {
      const ref = query(
        StudentCollection,
        orderBy("certno"),
        startAfter(lastDoc),
        limit(2)
      );
      const data = await getDocs(ref);
      data.forEach((doc) => {
        context.commit("setStudent", { id: doc.id, ...doc.data() });
      });

      lastDoc = data.docs[data.docs.length - 1];
    },
    async getStudentDetail(context, id) {
      const student = await getDoc(doc(db, "Student", id));
      context.commit("setSingleStudent", student.data());
    },
    async updateStudentDetail(context, item) {
      await updateDoc(doc(StudentCollection, item.studentID), item.data);
    },
  },
  getters: {
    getUser: (state) => state.user,
    isLogin: (state) => state.isLogin,
    getSubjects: (state) => state.subjects,
    getCourses: (state) => state.courses,
    getStudents: (state) => state.students,
    getStudentDetail: (state) => state.studentDeatil,
  },
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("setUser", user);
  }
});

export default store;
