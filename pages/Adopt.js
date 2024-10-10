import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Select from '../component/Select'

const Adopt = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Select></Select>
        <View style={styles.contents}>

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

export default Adopt