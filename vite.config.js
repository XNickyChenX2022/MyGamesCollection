import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Rating-App-Frontend/",
  server: {
    // port: 3000,
    proxy: {
      "/api": {
        target: "https://rating-app-backend.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
