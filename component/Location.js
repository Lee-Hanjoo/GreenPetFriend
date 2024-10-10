import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Location = (props) => {
  const {location, bg} = props;
  return (
    <View style={bg ? styles.locationWrapBg : styles.locationWrap}>
      {
        bg ? 
        <Image source={require('../assets/imgs/icon/icon_location_white.svg')} />
        :
        <Image source={require('../assets/imgs/icon/icon_location.svg')} />
      }
      <Text style={bg? styles.locationBg : styles.location}>{location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  locationWrapBg: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    width: 'fit-content',
    paddingVertical: 4,
    paddingLeft: 8,
    paddingRight: 12,
    backgroundColor: 'rgba(31, 35, 41, 0.7)',
    borderRadius: 999
  },
  locationWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  locationBg: {
    fontSize: 12,
    fontFamily: 'Wanted Sans',
    fontWeight: 400,
    color: '#fff'
  },
  location: {
    fontSize: 12,
    fontFamily: 'Wanted Sans',
    fontWeight: 400,
    color: '#8D96A4'
  },
})

export default Location