import React from 'react'
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.visual, {background: 'linear-gradient(180deg, rgba(100, 199, 250, 1) 0%, rgba(78, 166, 207, 1) 60%, rgba(255, 255, 255, 1) 100%)'}]}>
        <View style={styles.visualText}>
          <Image source={require('../assets/imgs/logo_white.svg')} />
          <Text>사지말고 입양하세요!</Text>
          <Pressable>무료로 입양받기</Pressable>
        </View>
        <View>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_01.svg')} resizeMode="cover" />
          <ImageBackground source={require('../assets/imgs/img_visual_animal_02.svg')} resizeMode="cover" />
          <ImageBackground source={require('../assets/imgs/img_visual_animal_03.svg')} resizeMode="cover" />
          <ImageBackground source={require('../assets/imgs/img_visual_animal_04.svg')} resizeMode="cover" />
          <ImageBackground source={require('../assets/imgs/img_visual_animal_05.svg')} resizeMode="cover" />
          <ImageBackground source={require('../assets/imgs/img_visual_animal_06.svg')} resizeMode="cover" />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
  },
  visual: {
    height: 502,
    paddingTop: 80,
    alignItems: 'center',
    position: 'relative',
    left: 0,
    top: 0,
  },
  visualText: {
    textAlign: 'center'
  },
})

export default Home