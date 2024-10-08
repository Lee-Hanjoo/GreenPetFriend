import React from 'react'
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
// style={styles.}

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.visual, {background: 'linear-gradient(180deg, rgba(100, 199, 250, 1) 0%, rgba(78, 166, 207, 1) 60%, rgba(255, 255, 255, 1) 100%)'}]}>
        <View style={styles.visualText}>
          <Image source={require('../assets/imgs/logo_white.svg')} />
          <Text style={styles.visualTextTitle}>사지말고<br/>입양하세요!</Text>
          <Pressable style={styles.visualBtn}>무료로 입양받기</Pressable>
        </View>
        <View style={styles.visualImg}>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_01.svg')} resizeMode="cover" style={styles.visualImgItem01}/>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_02.svg')} resizeMode="cover" style={styles.visualImgItem02}/>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_03.svg')} resizeMode="cover" style={styles.visualImgItem03}/>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_04.svg')} resizeMode="cover" style={styles.visualImgItem04}/>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_05.svg')} resizeMode="cover" style={styles.visualImgItem05}/>
          <ImageBackground source={require('../assets/imgs/img_visual_animal_06.svg')} resizeMode="cover" style={styles.visualImgItem06}/>
        </View>
      </View>
      <View style={styles.contents}>
        <View>
          <View>
            <View style={styles.titleWrap}>
              <Text>Adopted Animal</Text>
              <Text>입양 대기 동물</Text>
            </View>
            <Pressable>더보기</Pressable>
          </View>
          <View>

          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    backgroundColor: '#fff',
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
    textAlign: 'center',
    alignItems: 'center',
  },
  visualTextTitle: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 48,
    color: '#fff',
    textAlign: 'center',
  },
  visualBtn: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#1F2329',
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 999
  },
  visualImg: {
    width: '100%',
    height: 236,
    position: 'relative',
    left: 0,
    top: -8,
  },
  visualImgItem01: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  visualImgItem02: {
    position: 'absolute',
    left: 0,
    top: 100,
  },
  visualImgItem03: {
    position: 'absolute',
    left: 40,
    top: 64,
  },
  visualImgItem04: {
    position: 'absolute',
    left: 205,
    top: 84,
  },
  visualImgItem05: {
    position: 'absolute',
    left: 'auto',
    right: 20,
    top: 12,
  },
  visualImgItem06: {
    position: 'absolute',
    left: 'auto',
    right: 20,
    top: 172,
  },
  contents: {
    marginTop: 80
  },
})

export default Home