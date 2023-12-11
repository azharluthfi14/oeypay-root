import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.oeypay.app',
  appName: 'oeypay',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
