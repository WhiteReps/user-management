import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your app
    supportFile: false, // Disable support file if not needed
  },
});