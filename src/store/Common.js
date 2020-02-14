export default {
    state: {
        processing : false,
        error: null
    },
    mutations: {
        set_processing (state, load) {
            state.processing = load
        },
        set_error (state, load) {
            state.error = load
        },
        clen_error (state) {
            state.error = null
        }
    },
    getters: {
        getProcessing: (state)=>state.processing,
        getError: (state)=>state.error
    }
  }