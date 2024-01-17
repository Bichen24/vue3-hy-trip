import hyRequest from "../request";

export function getHouseDetailAll(houseId) {
  return hyRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
