export default {
  namespaced: true,
  state: {
    prompt: null,
    resolve: null
  },
  mutations: {
    set(state, { prompt, resolve }) {
      state.prompt = prompt;
      state.resolve = resolve;
    }
  },
  actions: {
    prompt({ commit }, prompt) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, prompt.timeout || 3000);
        commit("set", { prompt, resolve });
      }).then(value => {
        commit("set", { prompt: null, resolve: null });
        return value;
      });
    }
  }
};
