import React, { useRef, useState } from 'react'
import { Animated, Pressable, TouchableOpacity } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'

const CustomHeader = ({navigation}) => {

  const [nav, setNav] = useState(false);  

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <View style={styles.HeaderStyle}>
        <View>
          <Pressable onPress={()=>{setNav(true); fadeIn();}} >
            <Image source={require('../assets/imgs/icon/icon_menu.svg')}  />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={()=>navigation.navigate('Home')} >
            <Image source={require('../assets/imgs/logo_black.svg')}  />
          </Pressable>
        </View>
        <View>
          <Image source={require('../assets/imgs/icon/icon_alarm.svg')} />
        </View>
      </View>
      <Animated.View style={[styles.Nav, nav ? styles.NavActive : '',{ opacity: fadeAnim}]}>
        <View style={styles.NavTop}>
          <Image source={require('../assets/imgs/logo_black.svg')}  />
          <Pressable onPress={()=>{setNav(false); fadeOut();}} >
            <Image source={require('../assets/imgs/icon/icon_x_black.svg')}  />
          </Pressable>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: "row",
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9ED',
    zIndex: 10
  },
  Nav: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    top: 0,
    backfaceVisibility: 'hidden',
  },
  NavActive: {
    display: 'block',
    backfaceVisibility: 'visible',
    zIndex: 999,
  },
  NavTop: {
    flexDirection: "row",
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E7E9ED'
  }
})


export default CustomHeader