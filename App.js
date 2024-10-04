import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Story from './pages/Story';
import AdoptedAnimal from './pages/AdoptedAnimal';
import Map from './pages/Map';
import MissingAnimal from './pages/MissingAnimal';
import Community from './pages/Community';
import Mypet from './pages/Mypet';
import Write from './pages/Write';
import Detail from './pages/Detail';
import CustomHeader from './component/CustomHeader';

export default function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={({route, navigation}) => {
        return {        
          header:()=><CustomHeader title={route.name} navigation={navigation}/>
        }
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="AdoptedAnimal" component={AdoptedAnimal} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="MissingAnimal" component={MissingAnimal} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Mypet" component={Mypet} />
        <Stack.Screen name="Write" component={Write} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}