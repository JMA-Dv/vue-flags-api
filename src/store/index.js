import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: [],
    continents:[
      "Americas",
      "Africa",
      "Asia",
      "Europe",
      "Oceania",
      "All",
    ]
  },
  mutations: {
    setContries(state, payload) {
      state.countries = payload;
    },
    setFilteredContries(state, payload) {
      state.filteredCountries = payload;
    },

  },
  actions: {
    async filterRegion({ commit, state }, region) {
      if (region === "All") {
        commit('setFilteredContries', state.countries);
        return;
      }
      const filteredCountries = state.countries.filter(contry => contry.region === region)
      commit('setFilteredContries', filteredCountries)
    },

     async filterByName({ commit, state }, name) {
      const filter = state.countries.filter(contry => {
        const textApi = contry.name.common.toString().toLowerCase();
        if (textApi.includes(name)) {
          return contry;
        }
      });
      commit('setFilteredContries', filter);
    },
    async getCountries({ commit }) {
      try {
        const response = await fetch('https://restcountries.com/v3/all')
        const data = await response.json();
        commit('setContries', data);
      } catch (error) {
        console.log("🚀 ~ file: index.js ~ line 39 ~ getCountries ~ error", error)
      }
    }
  },
  getters: {
    topPopulation(state) {
      return state.filteredCountries.sort((a, b) =>
        a.population < b.population ? 1 : -1
      )
    }
  },
  modules: {
  }
})
