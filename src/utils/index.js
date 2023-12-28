export const getUrl = (url) => {
  return new URL(url, import.meta.url).href;
};
