import { Slot } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo';
import SafeScreen from "@/components/SafeScreen";
import { StatusBar } from "expo-status-bar";

const clerkPublishableKey = 'pk_live_ZW5hYmxpbmctc2hpbmVyLTIuY2xlcmsuYWNjb3VudHMuZGV2JA';

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      
      <StatusBar style="dark" />
    </ClerkProvider>
  );
};
