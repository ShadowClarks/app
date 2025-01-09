import { Stack } from 'expo-router';

// const Stack = createNavigationStack();
export default function RootLayout() {
 
  return (

      <Stack>
        <Stack.Screen name="home" options={{headerShown: false}} />
        <Stack.Screen name="profile" options={{headerShown: false}}/>
      </Stack>
  );
}
