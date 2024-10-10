import React, { useState } from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

const Heart = () => {
  const [heart, setHeart] = useState(false)
  return (
    <Pressable style={styles.heart} onPress={()=>{setHeart(!heart)}}>
      {
        heart ? 
        <Image source={require('../assets/imgs/icon/icon_heart_on.svg')} />
        :
        <Image source={require('../assets/imgs/icon/icon_heart.svg')} />
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  heart: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 1,
    borderRadius: '50%',
    boxShadow: '2px 2px 12px rgba(31, 35, 41, 0.1)'
  },
})

export default Heart