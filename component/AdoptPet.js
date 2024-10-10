import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Tag from './Tag'
import Heart from './Heart'
import Location from './Location'

const AdoptPet = (props) => {
  const {location, name, info, src} = props;
  return (
    <Pressable style={styles.AdoptPetWrap}>
      <View style={{gap: 8}}>
        <Heart />
        <Image source={src} />
        <View style={styles.petBox}>
          <View style={styles.tagWrap}>
            {
              props.tagTitle.map((title, i)=>(
                <Tag key={i} title={title} />
              ))
            }
          </View>
          <View style={styles.petWrap}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.info}>({info})</Text>
          </View>
          <Location location={location} />
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
  name: {
    fontSize: 18,
    fontFamily: 'Wanted Sans',
    fontWeight: 700,
    color: '#1F2329'
  },
  info: {
    fontSize: 12,
    fontFamily: 'Wanted Sans',
    color: '#8D96A4',
    marginBottom: 2
  },
})


export default AdoptPet