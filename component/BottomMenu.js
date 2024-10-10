import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const BottomMenu = ({navigation, title}) => {
  
  const [menuActive, setMenuActive] = useState(title)
  
  useEffect(()=>{
    setMenuActive(title)
  },[menuActive, title])

  return (
    <View style={styles.container}>
      <View style={styles.menuList}>
        <Pressable style={menuActive === '홈' ? styles.active : ''}
          onPress={()=>{setMenuActive('홈'); navigation.navigate('홈')}}
        >
          {
            menuActive === '홈' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_home_white.svg')} />
              <Text style={styles.textActive}>home</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_home.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === '입양 대기 동물' ? styles.active : ''}
          onPress={()=>{setMenuActive('입양 대기 동물'); navigation.navigate('입양 대기 동물')}}
        >
          {
            menuActive === '입양 대기 동물' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_adopt_white.svg')} />
              <Text style={styles.textActive}>adopt</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_adopt.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === '스토리' ? styles.active : ''}
          onPress={()=>{setMenuActive('스토리'); navigation.navigate('스토리')}}
        >
          {
            menuActive === '스토리' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_story_white.svg')}  />
              <Text style={styles.textActive}>story</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_story.svg')}  />
          }
        </Pressable>
        <Pressable style={menuActive === '시설 찾기' ? styles.active : ''}
          onPress={()=>{setMenuActive('시설 찾기'); navigation.navigate('시설 찾기')}}
        >
          {
            menuActive === '시설 찾기' ? 
            <>
              <Image source={require('../assets/imgs/icon/icon_map_white.svg')} />
              <Text style={styles.textActive}>map</Text>
            </>
            :
            <Image source={require('../assets/imgs/icon/icon_map.svg')}  />
          }
        </Pressable>
        <Pressable style={styles.menu} onPress={() =>navigation.openDrawer()}>
          <Image source={require('../assets/imgs/icon/icon_menu.svg')}  />
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

