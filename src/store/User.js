import firebase from "firebase";
export default {
  state: {
    user: {
      is_authenticated: false,
      u_id: null
    }
  },
  mutations: {
    set_user(state, payload) {
      state.user.is_authenticated = true;
      state.user.u_id = payload;
    },
    un_set_user(state) {
      state.user = {
        is_authenticated: false,
        u_id: null
      };
    }
  },
  actions: {
    signup({ commit }, payload) {
      commit("set_processing", true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
          commit("clear_error");
          commit("set_processing", false);
        })
        .catch(function(error) {
          commit("set_processing", false);
          commit("set_error", error.message);
        })
    },
    signin({ commit }, payload) {
      commit("set_processing", true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
          commit("clear_error");
          commit("set_processing", false);
        })
        .catch(function(error) {
          commit("set_processing", false);
          commit("set_error", error.message);
        })
    },
    signout(){
        firebase.auth().signOut()
    },
    state_change({ commit }, payload) {
      if (payload) {
        commit("set_user", payload.u_id);
      } else {
        commit("un_set_user");
      }
    }
  },
  getters: {
    is_user_authenticated: state => state.user.is_authenticated,
    u_id: state => state.user.u_id
  }
}
