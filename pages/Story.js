import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Tab from '../component/Tab'
import StoryItem from '../component/StoryItem'

const Story = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Tab title={['입양후기', '임보일기', '입양일기']} />
        <View style={styles.contents}>
          <StoryItem 
            src={require('../assets/imgs/img_best_stroy_sample.jpg')}
            title='콩고물 묻은 아기 강아지 우우우우 너무귀여워'
            name='포크엄마ddddddddddddddddddddd'
            profileSrc={require('../assets/imgs/img_profile_sample.svg')}
            view='1212'
            date='2024. 10. 10'
            heartNum='12'
            commentNum='8'
          />
          <StoryItem 
            src={require('../assets/imgs/img_best_stroy_sample.jpg')}
            title='콩고물 묻은 아기 강아지 우...'
            name='포크엄마'
            profileSrc={require('../assets/imgs/img_profile_sample.svg')}
            view='1212'
            date='2024. 10. 10'
            heartNum='12'
            commentNum='8'
          />
          <StoryItem 
            src={require('../assets/imgs/img_best_stroy_sample.jpg')}
            title='콩고물 묻은 아기 강아지 우...'
            name='포크엄마'
            profileSrc={require('../assets/imgs/img_profile_sample.svg')}
            view='1212'
            date='2024. 10. 10'
            heartNum='12'
            comment='8'
          />
          <StoryItem 
            src={require('../assets/imgs/img_best_stroy_sample.jpg')}
            title='콩고물 묻은 아기 강아지 우...'
            name='포크엄마'
            profileSrc={require('../assets/imgs/img_profile_sample.svg')}
            view='1212'
            date='2024. 10. 10'
            heartNum='12'
            comment='8'
          />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    backgroundColor: '#fff',
  },
  top: {
    borderTopWidth: 3,
    borderColor: '#E7E9ED',
    paddingTop: 20
  },
  contents: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px 10px'
  },

})

export default Story