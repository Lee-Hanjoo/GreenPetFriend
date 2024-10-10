import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Tag from './Tag'
import Heart from './Heart'

const AdoptPet = (props) => {
  const [heart, setHeart] = useState(false)
  return (
    <Pressable style={styles.AdoptPetWrap}>
      <View style={{gap: 8}}>
        <Heart />
        <Image source={require('../assets/imgs/img_adopt_animal_sample.jpg')} />
        <View style={styles.petBox}>
          <View style={styles.tagWrap}>
            {
              props.tagTitle.map((title, i)=>(
                <Tag key={i} title={title} />
              ))
            }
          </View>
          <View style={styles.petWrap}>
            <Text style={styles.petName}>포메라니안</Text>
            <Text style={styles.petInfo}>(수컷, 6개월)</Text>
          </View>
          <View style={styles.locationWrap}>
            <Image source={require('../assets/imgs/icon/icon_location.svg')} />
            <Text style={styles.location}>충청남도 공주시</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  AdoptPetWrap: {
    borderWidth: 1,
    borderColor: '#E7E9ED',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative'
  },
  petBox: {
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  tagWrap: {
    flexDirection: 'row', 
    gap: 4, 
    marginTop: 4,
  },
  petWrap: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'flex-end'
  },
  petName: {
    fontSize: 18,
    fontFamily: 'Wanted Sans',
    fontWeight: 700,
    color: '#1F2329'
  },
  petInfo: {
    fontSize: 12,
    fontFamily: 'Wanted Sans',
    color: '#8D96A4',
    marginBottom: 2
  },
  locationWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  location: {
    fontSize: 12,
    fontFamily: 'Wanted Sans',
    fontWeight: 400,
    color: '#8D96A4'
  },
})


export default AdoptPet