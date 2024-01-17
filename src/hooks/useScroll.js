// //节流
// import { throttle } from "underscore";
// export default function useScroll(elref) {
//   const isBottom = ref(false);
//   const isShowSearchBar = ref(false);
//   const clientHeigth = ref(0);
//   const scrollTop = ref(0);
//   const scrollHeight = ref(0);
//   let el = window;
//   //节流
//   const scroll = throttle(() => {
//     if (el === window) {
//       // 获取可视窗口高度
//       clientHeigth.value = el.documentElement.clientHeight;
//       // 获取当前以滚动位置
//       scrollTop.value = el.documentElement.scrollTop;
//       // 获取可滚动高度
//       scrollHeight.value = window.documentElement.scrollHeight;
//       if (scrollHeight.value <= scrollTop.value + clientHeigth.value) {
//         isBottom.value = true;
//       }
//       if (scrollTop.value > 500) {
//         isShowSearchBar.value = true;
//       } else {
//         isShowSearchBar.value = false;
//       }
//     } else {
//       // 获取可视窗口高度
//       clientHeigth.value = el.clientHeight;
//       // 获取当前以滚动位置
//       scrollTop.value = el.scrollTop;
//       // 获取可滚动高度
//       scrollHeight.value = el.scrollHeight;
//     }
//   }, 100);

//   onMounted(() => {
//     if (elref) el = elref.value;
//     el.addEventListener("scroll", scroll);
//   });
//   onUnmounted(() => {
//     el.removeEventListener("scroll", scroll);
//   });
//   return { isBottom, isShowSearchBar, clientHeigth, scrollTop, scrollHeight };
// }

import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";
export default function useScroll(elRef) {
  let el = window;

  const isBottom = ref(false);
  const isReachBottom = ref(false);
  const isShowSearchBar = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了");
      isReachBottom.value = true;
    }
    if (scrollTop.value > 500) {
      isShowSearchBar.value = true;
    } else {
      isShowSearchBar.value = false;
    }
    if (scrollHeight.value <= scrollTop.value + clientHeight.value) {
      isBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return {
    isReachBottom,
    clientHeight,
    scrollTop,
    scrollHeight,
    isShowSearchBar,
    isBottom,
  };
}
