import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator  } from '@react-navigation/drawer';
import { Button, View,  Text, TouchableOpacity, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
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

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function App() {

  const root = document.getElementById('root')
  root.style.cssText = "width:100vw; overflow:hidden; position:relative;"

  const Drawer = createDrawerNavigator();

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator 
        initialRouteName="입양 대기 동물"
        drawerContent={(props) => 
            <CustomDrawerContent {...props} />
        }
        screenOptions={({ navigation, route }) => { 
            return ({        
              header: () => (
              <>
                <CustomHeader navigation={navigation} title={route.name} />
                <BottomMenu navigation={navigation} title={route.name} />
              </>
            ),
              drawerStyle: {
                width: screenWidth,
              },
              drawerLabelStyle: {
                marginLeft: -16,
                fontSize: 16,
                color: '#1F2329',
                fontWeight: '500',
                fontFamily: 'Wanted Sans'
              },
              drawerItemStyle: {
                padding:0,
                margin:0,
                marginLeft:24,
              },
              // 활성화 스타일
              drawerActiveTintColor: '#1F2329',
              drawerActiveBackgroundColor: 'transparent',
              // 딤 색상
              overlayColor: 'transparent',
              backBehavior: 'history',
              drawerPosition: 'right'
            })
          }
        }>
          <Drawer.Screen name="홈" component={Home} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_home_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          <Drawer.Screen name="입양 대기 동물" component={Adopt} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_adopt_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          <Drawer.Screen name="스토리" component={Story} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_story_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          <Drawer.Screen name="시설 찾기" component={Map} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_map_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          <Drawer.Screen name="실종 동물 찾기 및 신고" component={MissingAnimal} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_home_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          <Drawer.Screen name="커뮤니티" component={Community} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_community_black.svg')} style={styles.iconBackground} />
              ),
            }}
          />
          {/* <Drawer.Screen name="마이페이지" component={Mypet} 
            options={{
              drawerIcon: () => (
                <Image source={require('./assets/imgs/icon/icon_mypet_black.svg')} style={styles.iconBackground} />
              ),
            }}
          /> */}
          {/* <Drawer.Screen name="write" component={Write} />
          <Drawer.Screen name="detail" component={Detail} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

// 메뉴
function CustomDrawerContent(props) {

  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.navTop}>
        <Pressable style={styles.navTopLeft} onPress={()=>{}}>
          <Text style={styles.navTopLeftText}>로그인</Text>
          {/* <Image source={require('./assets/imgs/icon/icon_login.svg')}  /> */}
        </Pressable>
        <Pressable onPress={()=>navigation.closeDrawer()}>
          <Image source={require('./assets/imgs/icon/icon_x_black.svg')}  />
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  navTop: {
    flexDirection: 'row',
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderBottomColor: '#E7E9ED',
  },
  navTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTopLeftText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D96A4',
    marginRight: 12
  },
  iconBackground: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 6,
    borderColor: 'rgba(231,233,237,0.4)',
    backgroundColor: 'rgba(231,233,237,0.4)'
  }
});

