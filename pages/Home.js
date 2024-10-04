import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
{/* <Button onPress={()=>navigation.navigate('Details')}> */}
const Home = ({navigation }) => {
  return (
    <ScrollView style={styles.container}>
      Home
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  }
})

export default Home