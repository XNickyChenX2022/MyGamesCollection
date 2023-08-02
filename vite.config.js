import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MyGamesCollection/",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://rating-app-backend.onrender.com/",
        changeOrigin: true,
      },
    },
  },
});
