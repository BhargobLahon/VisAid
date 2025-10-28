import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Hide the tab bar completely, as it was before
        tabBarStyle: {
          display: 'none',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index" // This tells the layout to load your index.tsx screen
      />
    </Tabs>
  );
}