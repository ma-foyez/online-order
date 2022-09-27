import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { Text } from 'react-native';
import Order from './src/screens/Order';


const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'GraphikRegular' : require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium'  : require('./assets/fonts/GraphikMedium.otf'),
    'GraphikSemibold': require('./assets/fonts/GraphikSemibold.otf'),
    'GraphikBold'    : require('./assets/fonts/GraphikBold.otf'),
  })

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}