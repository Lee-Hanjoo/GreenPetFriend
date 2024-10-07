import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator  } from '@react-navigation/drawer';
import { Button, View,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './pages/Home';
import Story from './pages/Story';
import Adopt from './pages/Adopt';
import Map from './pages/Map';
import MissingAnimal from './pages/MissingAnimal';
import Community from './pages/Community';
import Mypet from './pages/Mypet';
import Write from './pages/Write';
import Detail from './pages/Detail';
import CustomHeader from './component/CustomHeader';
import BottomMenu from './component/BottomMenu';


export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation, route }) => { 
          return ({        
            header: () => <BottomMenu navigation={navigation} title={route.name} />,
          })
        }
      }>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="story" component={Story} />
        <Drawer.Screen name="adopt" component={Adopt} />
        <Drawer.Screen name="map" component={Map} />
        <Drawer.Screen name="missingAnimal" component={MissingAnimal} />
        <Drawer.Screen name="community" component={Community} />
        <Drawer.Screen name="mypet" component={Mypet} />
        <Drawer.Screen name="write" component={Write} />
        <Drawer.Screen name="detail" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//사이드 드러우 바
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>로그인</Text>
        <View>
            <ImageBackground 
            	style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
              // source={require("./assets/imgs/icon/icon_alarm.svg")}  //이미지경로
              resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
            >
              <View style={styles.alarmBtn}></View>
            </ImageBackground>
            <ImageBackground 
            	style={{ width: "100%", height: "100%" }}  //View를 꽉채우도록
              source={require("./assets/background.png")}  //이미지경로
              resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
            >
              <View style={styles.settingBtn}></View>
            </ImageBackground>
        </View>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => alert('Custom Action!')}
      >
        <Text style={styles.buttonText}>Custom Action</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderBottomColor: '#E7E9ED',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alarmBtn: {
  },
  settingBtn: {
    backgroundColor: 
  },
  customButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

