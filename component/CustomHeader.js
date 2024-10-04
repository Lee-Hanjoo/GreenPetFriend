import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'

const CustomHeader = ({navigation}) => {

  const [nav, setNav] = useState(false);

  console.log(nav);

  return (
    <View>
      <View style={styles.HeaderStyle}>
        <View>
          <TouchableOpacity onPress={()=>{setNav(true)}} >
            <Image source={require('../assets/imgs/icon/icon_menu.svg')}  />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
            <Image source={require('../assets/imgs/logo_black.svg')}  />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require('../assets/imgs/icon/icon_alarm.svg')} />
        </View>
      </View>
      <View style={[styles.Nav, nav ? styles.NavActive : '']}>
        12345
      </View>
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
    borderBottomColor: '#E7E9ED'
  },
  Nav: {
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    top: 0
  },
  NavActive: {
    backgroundColor: 'blue'
  }
})


export default CustomHeader