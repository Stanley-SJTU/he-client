import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carsQueryResult: [],
    carResultSingle: {},
    carsAll: [],
    user: null,
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: (state) => {
      return state.user !== null && state.user !== undefined;
    },
    getSelectCarInfo: (state) => (id) => {
      return state.carsQueryResult.find((result) => result.id === id);
    },
    getAllMakes: (state) => {
      const makes = state.carsAll.map((car) => car.Make);
      return Array.from(new Set(makes)); // returns all the makes without duplicates
    },
    getAllModels: (state) => (make) => {
      const cars = state.carsAll.filter((result) => result.Make === make);
      return cars.map((car) => car.Model);
    },
  },
  mutations: {
    setCarsQueryResult(state, payload) {
      state.carsQueryResult = payload;
    },
    setCarResultSingle(state, payload) {
      state.carResultSingle = payload;
    },
    setCarsAll(state, payload) {
      state.carsAll.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    getCarZero({ commit }) {
      const carsQuery = firebase
        .firestore()
        .collection("carsPerformance")
        .doc("0");
      carsQuery
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Doc found!");
            console.log("Document data:", doc.data());
            commit("setCarsQueryResult", doc.data());
          } else {
            console.log("No doc!");
          }
        })
        .catch((error) => {
          console.log("error getting doc: " + error);
        });
    },
    getCarsAll({ commit }) {
      firebase
        .firestore()
        .collection("carsPerformance")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            commit("setCarsAll", doc.data());
          });
          console.log("All files downloaded");
        })
        .catch((error) => {
          console.log("error getting all doc: " + error);
        });
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setUser", user);
          commit("setIsLoggedIn", true);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsLoggedIn", false);
          console.log("Failed to create user!");
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setUser", user);
          commit("setIsLoggedIn", true);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsLoggedIn", false);
          router.push("/");
        });
    },

    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsLoggedIn", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsLoggedIn", false);
          console.log("Failed to log out!");
          router.push("/");
        });
    },
    addFavouriteCarsUser({ state }, payload) {
      // payload is the id of the car
      const userRef = firebase
        .firestore()
        .collection("usersClient")
        .doc(state.user.user.uid);
      userRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          // update the array
          userRef.update({
            favouriteCars: firebase.firestore.FieldValue.arrayUnion(payload),
          });
        } else {
          // create the doc
          userRef.set({
            favouriteCars: [payload],
          });
        }
      });
    },
    async getSingleCar({ commit }, payload) {
      // payload is the car id
      try {
        let doc = await firebase
          .firestore()
          .collection("carsPerformance")
          .doc(String(payload))
          .get();
        if (doc.exists) {
          commit("setCarResultSingle", doc.data());
        } else {
          console.log("Failed to get doc!");
        }
      } catch (error) {
        console.log("Failed to get doc!");
      }
      /*
      firebase
        .firestore()
        .collection("carsPerformance")
        .doc(String(payload))
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("setCarResultSingle", doc.data());
          } else {
            console.log("Failed to get doc!");
          }
        })
        .catch((error) => {
          console.log("Error getting doc", error);
        });
        */
    },
  },
  modules: {},
});
