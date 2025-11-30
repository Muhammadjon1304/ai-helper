import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    allowedHosts: [
      "c29f73bdf7d9.ngrok-free.app",
      "e6bbf1ed5282.ngrok-free.app",
      "localhost",
      "127.0.0.1",
      ".ngrok-free.app",
      ".ngrok.app",
    ],
  },
});
