import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './res/screens/Home';
import Info from './res/screens/Info';
import List from './res/screens/List';
import Add from './res/screens/Add';
import Update from './res/screens/Update';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Info' component={Info} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='Update' component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
