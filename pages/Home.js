import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      Home
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 64,
    backgroundColor: 'red'
  }
})

export default Home