import hyRequest from "../request";

export function getHomeHotSuggests() {
  return hyRequest.get({
    url: "/home/hotSuggests",
  });
}
export function getCategories() {
  return hyRequest.get({
    url: "/home/categories",
  });
}
export function getHouseList(currentPage) {
  return hyRequest.get({
    url: "/home/houseList",
    params: {
      page: currentPage,
    },
  });
}
