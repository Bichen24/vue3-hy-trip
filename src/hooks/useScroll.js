//节流
import { throttle } from "underscore";
export default function useScroll() {
  const isBottom = ref(false);
  const isShowSearchBar = ref(false);
  const clientHeigth = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  //节流
  const scroll = throttle(() => {
    // 获取可视窗口高度
    clientHeigth.value = document.documentElement.clientHeight;
    // 获取当前以滚动位置
    scrollTop.value = document.documentElement.scrollTop;
    // 获取可滚动高度
    scrollHeight.value = document.documentElement.scrollHeight;
    if (scrollHeight.value <= scrollTop.value + clientHeigth.value) {
      isBottom.value = true;
    }
    if (scrollTop.value > 500) {
      isShowSearchBar.value = true;
    } else {
      isShowSearchBar.value = false;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener("scroll", scroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
  });
  return { isBottom, isShowSearchBar };
}
