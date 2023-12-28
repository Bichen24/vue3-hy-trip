import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//Vant插件
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    //Vant插件
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
