// vite.config.js
import { defineConfig } from "file:///Users/alhaqhassan/Desktop/www/auth-poc/new_poc/my-vue-app/node_modules/vite/dist/node/index.js";
import { createVuePlugin } from "file:///Users/alhaqhassan/Desktop/www/auth-poc/new_poc/my-vue-app/node_modules/vite-plugin-vue2/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [createVuePlugin()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["@walletconnect/web3-provider"])]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxoYXFoYXNzYW4vRGVza3RvcC93d3cvYXV0aC1wb2MvbmV3X3BvYy9teS12dWUtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWxoYXFoYXNzYW4vRGVza3RvcC93d3cvYXV0aC1wb2MvbmV3X3BvYy9teS12dWUtYXBwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hbGhhcWhhc3Nhbi9EZXNrdG9wL3d3dy9hdXRoLXBvYy9uZXdfcG9jL215LXZ1ZS1hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgY3JlYXRlVnVlUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZTJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW2NyZWF0ZVZ1ZVBsdWdpbigpXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtlc2J1aWxkQ29tbW9uanMoW1wiQHdhbGxldGNvbm5lY3Qvd2ViMy1wcm92aWRlclwiXSldLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1csU0FBUyxvQkFBb0I7QUFDN1gsU0FBUyx1QkFBdUI7QUFHaEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLGdCQUFnQixDQUFDO0FBQUEsRUFDM0IsY0FBYztBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsTUFDWixTQUFTLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUFBLElBQy9EO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
