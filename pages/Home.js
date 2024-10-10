import React from 'react'
import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Tab from '../component/Tab';
import AdoptPet from '../component/AdoptPet';
import MainTitle from '../component/MainTitle';
import BestStory from '../component/BestStory';
import MissingPet from '../component/MissingPet';
import CommunityCard from '../component/CommunityCard';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.visual, {background: 'linear-gradient(180deg, rgba(100, 199, 250, 1) 0%, rgba(78, 166, 207, 1) 60%, rgba(255, 255, 255, 1) 100%)'}]}>
        <View style={styles.visualText}>
          <Image source={require('../assets/imgs/logo_white.svg')} />
          <Text style={styles.visualTextTitle}>사지말고<br/>입양하세요!</Text>
          <Pressable style={styles.visualBtn}>
            <Text style={styles.visualBtnText}>무료로 입양받기</Text>
          </Pressable>
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
        <View style={styles.section}>
          <MainTitle titleEng='Adopted Animal' title='입양 대기 동물' />
          <View>
            <Tab title={['강아지','고양이','기타']} />
            <View style={styles.list}>
              <AdoptPet 
                name='포메라니안' 
                info='암컷, 6개월' 
                tagTitle={['보호중','중성화O']} 
                location='충청남도 공주시'
                src={require('../assets/imgs/img_adopt_animal_sample.jpg')} 
              />
              <AdoptPet 
                name='똥개' 
                info='수컷, 4살' 
                tagTitle={['공고중','중성화X']} 
                location='전라남도 전주시'
                src={require('../assets/imgs/img_adopt_animal_sample.jpg')} 
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <MainTitle titleEng='Best Adoption Story' title='베스트 입양 일기' />
          <View style={styles.list}>
            <BestStory 
              title='우리 땅콩이 귀엽지 않나용?' 
              desc='진짜 짱 귀여운거 같아요. 그래서 자랑하려고 게시글 올립니다...' 
              src={require(`../assets/imgs/img_best_stroy_sample.jpg`)} 
            />
            <BestStory 
              title='우리 땅콩이 귀엽지 않나용?' 
              desc='진짜 짱 귀여운거 같아요. 그래서 자랑하려고 게시글 올립니다...' 
              src={require(`../assets/imgs/img_best_stroy_sample.jpg`)} 
            />
            <BestStory 
              title='우리 땅콩이 귀엽지 않나용?' 
              desc='진짜 짱 귀여운거 같아요. 그래서 자랑하려고 게시글 올립니다...' 
              src={require(`../assets/imgs/img_best_stroy_sample.jpg`)} 
            />
          </View>
        </View>
        <View style={styles.section}>
          <MainTitle titleEng='Missing Animal' title='실종 동물' />
          <View style={styles.missingPet}>
            <MissingPet 
              tagTitle='실종'
              location='상봉역 인근'
              src={require(`../assets/imgs/img_missing_pet_sample.jpg`)} 
              name='믹스견'
              date='2024. 09. 26'
              info='암컷, 5개월, 흰색 갈색, 중성화X...'
            />
            <MissingPet 
              tagTitle='목격'
              location='상봉역 인근'
              src={require(`../assets/imgs/img_missing_pet_sample.jpg`)} 
              name='믹스견'
              date='2024. 09. 26'
              info='암컷, 5개월, 흰색 갈색, 중성화X...'
            />
            <MissingPet 
              tagTitle='완료'
              location='상봉역 인근'
              src={require(`../assets/imgs/img_missing_pet_sample.jpg`)} 
              name='믹스견'
              date='2024. 09. 26'
              info='암컷, 5개월, 흰색 갈색, 중성화X...'
            />
            <MissingPet 
              tagTitle='실종'
              location='상봉역 인근'
              src={require(`../assets/imgs/img_missing_pet_sample.jpg`)} 
              name='믹스견'
              date='2024. 09. 26'
              info='암컷, 5개월, 흰색 갈색, 중성화X...'
            />
          </View>
        </View>
        <View style={styles.section}>
          <MainTitle titleEng='Community' title='커뮤니티' />
          <View>
            <Tab title={['캠페인&이벤트','자원봉사','뉴스']} />
            <View style={styles.community}>
              <Swiper 
                showsPagination={false} 
                width={390}
                height={326}
                removeClippedSubviews={false}
              >
                <View>
                  <CommunityCard 
                    src={require('../assets/imgs/img_community_sample.jpg')}
                    title='튼튼 펫 페스타1'
                    desc='튼튼 펫 페스타는 반려인과 반려동물이 함께 넓은 야외 행사장에서 신나게 뛰어놀고 다양한 체험도 할 수 있는 행사이다. 짱좋은 행사이다 짱짱짱짱'
                    location='경기도 화성시'
                    date='2024. 10. 05 ~ 2024. 10. 06'
                  />
                </View>
                <View>
                <CommunityCard 
                  src={require('../assets/imgs/img_community_sample.jpg')}
                  title='튼튼 펫 페스타2'
                  desc='튼튼 펫 페스타는 반려인과 반려동물이 함께 넓은 야외 행사장에서 신나게 뛰어놀고 다양한 체험도 할 수 있는 행사이다. 짱좋은 행사이다 짱짱짱짱'
                  location='경기도 화성시'
                  date='2024. 10. 05 ~ 2024. 10. 06'
                />
                </View>
                <View>
                <CommunityCard 
                  src={require('../assets/imgs/img_community_sample.jpg')}
                  title='튼튼 펫 페스타3'
                  desc='튼튼 펫 페스타는 반려인과 반려동물이 함께 넓은 야외 행사장에서 신나게 뛰어놀고 다양한 체험도 할 수 있는 행사이다. 짱좋은 행사이다 짱짱짱짱'
                  location='경기도 화성시'
                  date='2024. 10. 05 ~ 2024. 10. 06'
                />
                </View>
              </Swiper>
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
    paddingVertical: 64,
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
    borderRadius: 999
  },
  visualBtnText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Wanted Sans',
    fontWeight: 700,
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
  section: {
    marginBottom: 64
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
  list: {
    flexDirection: 'row', 
    gap: 12, 
    flexShrink: 0, 
    overflow: 'auto', 
    paddingLeft:20
  },
  missingPet: {
    flexDirection:'row', 
    gap: '24px 10px', 
    flexWrap: 'wrap',
    paddingLeft: 20
  },
  community: {
  },
})

export default Home