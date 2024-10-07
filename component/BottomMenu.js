import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomMenu = ({navigation, title}) => {
  
  const [menuActive, setMenuActive] = useState(title)
  
  useEffect(()=>{
    setMenuActive(title)
  },[menuActive, title])

  return (
    <View style={styles.container}>
      <View style={styles.menuList}>
        <Pressable style={menuActive === 'home' ? styles.active : ''}
          onPress={()=>{setMenuActive('home'); navigation.navigate('home')}}
        >
          {
            menuActive === 'home' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_home_on.svg')} />
              <Text style={styles.textActive}>home</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_home.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === 'adopt' ? styles.active : ''}
          onPress={()=>{setMenuActive('adopt'); navigation.navigate('adopt')}}
        >
          {
            menuActive === 'adopt' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_adopt_on.svg')} />
              <Text style={styles.textActive}>adopt</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_adopt.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === 'story' ? styles.active : ''}
          onPress={()=>{setMenuActive('story'); navigation.navigate('story')}}
        >
          {
            menuActive === 'story' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_story_on.svg')}  />
              <Text style={styles.textActive}>story</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_story.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === 'map' ? styles.active : ''}
          onPress={()=>{setMenuActive('map'); navigation.navigate('map')}}
        >
          {
            menuActive === 'map' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_map_on.svg')} />
              <Text style={styles.textActive}>map</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_map.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === 'menu' ? styles.menuActive : styles.menu} 
          onPress={() => {navigation.toggleDrawer(); setMenuActive('menu')}}
        >
          {
            menuActive === 'menu' ? 
            <Image source={require('../assets/imgs/icon/icon_menu_on.svg')}  />
            :
            <Image source={require('../assets/imgs/icon/icon_menu.svg')}  />
          }
        </Pressable>
      </View>
    </View>
  )
}

export default BottomMenu



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    padding: 12,
    backgroundColor: '#fff',
    position: 'fixed',
    left: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#E7E9ED',
  },
  menuList: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  active: {
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#64C7FA',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  textActive: {
    paddingHorizontal: 4,
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Wanted Sans'
  },
  menu: {
    padding: 8,
    backgroundColor: 'rgba(231,233,237,0.4)',
    borderRadius: 8
  },
  menuActive: {
    padding: 8,
    backgroundColor: '#64C7FA',
    borderRadius: 8
  }
});

