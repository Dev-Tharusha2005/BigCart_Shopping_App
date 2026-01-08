import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import SplashScreen from './Screens/SplashScreen';
import Home from './Screens/Home';
import SingleProductView from './Screens/SingleProductView';
import UserProfile from './Screens/UserProfile';
import Wishlist from './Screens/Wishlist';
import Cart from './Screens/Cart';
import Orders from './Screens/Orders';
import Address from './Screens/Address';

const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SingleProductView' component={SingleProductView}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Wishlist' component={Wishlist}/>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='Address' component={Address}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 