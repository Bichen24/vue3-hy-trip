import { defineStore } from "pinia";
//日期初始化
const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

const useMianStore = defineStore("main", {
  state: () => ({
    startDate: startDate,
    endDate: endDate,
    staycount: "1",
    isLoading: false,
  }),
});
export default useMianStore;
