import React from 'react'
import { View, StyleSheet, Pressable, Image, Text } from 'react-native';

const CustomHeader = ({title}) => {

  return (
    <View style={styles.CustomHeaderWrap}>
      <View>
        {
          title === '홈' ? 
            <Image source={require('../assets/imgs/logo_black.svg')}/>
          :
            <View style={styles.titleWrap}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}>
                  {title === '입양 대기 동물' && 'Adopted Animal'}
                  {title === '스토리' && 'Story'}
                  {title === '시설 찾기' && 'Map'}
                  {title === '실종 동물 찾기 및 신고' && 'Missing Animal'}
                  {title === '커뮤니티' && 'Community'}
              </Text>
            </View>
        }
      </View>
      <Pressable>
        <Image source={require('../assets/imgs/icon/icon_alarm.svg')}/>
      </Pressable>
    </View>
  )
}

export default CustomHeader



const styles = StyleSheet.create({
  CustomHeaderWrap: {  
    flexDirection: 'row',  
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    zIndex: 999,
    borderBottomWidth: 1,
    borderColor: '#E7E9ED'
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'Wanted Sans',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 700,
    marginRight: 8
  },
  desc: {
    fontFamily: 'Wanted Sans',
    fontSize: 12,
    color: '#8D96A4'
  }
});

