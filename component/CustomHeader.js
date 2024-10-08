import React from 'react'
import { View, StyleSheet, Pressable, Image } from 'react-native';

const CustomHeader = () => {

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/imgs/logo_black.svg')}/>
      </View>
      <Pressable>
        <Image source={require('../assets/imgs/icon/icon_alarm.svg')}/>
      </Pressable>
    </View>
  )
}

export default CustomHeader



const styles = StyleSheet.create({
  container: {  
    flexDirection: 'row',  
    width: '100%',
    padding: 20,
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#fff'
  },
});

