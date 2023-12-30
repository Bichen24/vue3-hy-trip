import { defineStore } from "pinia";
import { getCityAll } from "@/services";
const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    localCity: { cityName: "广州" },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});
export default useCityStore;
