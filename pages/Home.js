import React from 'react'
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Tab from '../component/Tab';
import AdoptPet from '../component/AdoptPet';
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
          <View>
            <Image source={require('../assets/imgs/img_visual_animal_01.svg')} style={styles.visualImgItem01} />
            <Image source={require('../assets/imgs/img_visual_animal_02.svg')} style={styles.visualImgItem02} />
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Image source={require('../assets/imgs/img_visual_animal_03.svg')} style={styles.visualImgItem03} />
            <Image source={require('../assets/imgs/img_visual_animal_04.svg')} style={styles.visualImgItem04} />
          </View>
          <View style={{marginLeft:20}}>
            <Image source={require('../assets/imgs/img_visual_animal_05.svg')} style={styles.visualImgItem05} />
            <Image source={require('../assets/imgs/img_visual_animal_06.svg')} style={styles.visualImgItem06} />
          </View>
        </View>
      </View>
      <View style={styles.contents}>
        <View>
          <View style={styles.titleWrap}>
            <View>
              <Text style={styles.contentsTitleEng}>Adopted Animal</Text>
              <Text style={styles.contentsTitle}>입양 대기 동물</Text>
            </View>
            <Pressable style={styles.contentsMoreBtn}>더보기</Pressable>
          </View>
          <View>
            <Tab title={['강아지','고양이','기타']}></Tab>
            <View style={styles.adoptPetList}>
              <AdoptPet tagTitle={['보호중','중성화O']} ></AdoptPet>
              <AdoptPet tagTitle={['공고중','중성화X']} ></AdoptPet>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}


const tBlack = '#1F2329';
const tGray = '#8D96A4';
const gray = '#E7E9ED';
const pink = '#EE7196';
const purple = '#978FF3';
const green = '#64DC41';
const yellow = '#F3B255';
const orange = '#EE815E';
const blue = '#64C7FA';

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingBottom: 200,
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
    fontFamily: 'Wanted Sans',
    color: '#fff',
    textAlign: 'center',
  },
  visualBtn: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: tBlack,
    color: '#fff',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Wanted Sans',
    fontWeight: 700,
    borderRadius: 999
  },
  visualImg: {
    flexDirection: 'row',
    maxWidth: 550,
    height: 236,
    marginTop: -8,
    justifyContent: 'space-between',
  },
  visualImgItem02: {
    marginTop: 20
  },
  visualImgItem03: {
    marginTop: 64
  },
  visualImgItem04: {
    marginTop: 84,
    marginLeft: 20,
  },
  visualImgItem05: {
    marginTop: 16
  },
  visualImgItem06: {
    marginTop: 20
  },
  contents: {
    marginTop: 80
  },
  titleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 24,
    paddingHorizontal:20
  },
  contentsTitleEng: {
    fontSize: 14,
    fontFamily: 'Wanted Sans',
    color: tGray,    
    marginBottom: 8
  },
  contentsTitle: {
    fontSize: 32,
    fontFamily: 'Wanted Sans',
    fontWeight: 700,
    color: tBlack,
  },
  contentsMoreBtn: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Wanted Sans',
    color: tGray
  },
  adoptPetList: {
    flexDirection: 'row', 
    gap: 12, 
    flexShrink: 0, 
    overflow: 'auto', 
    paddingLeft:20
  }
})

export default Home