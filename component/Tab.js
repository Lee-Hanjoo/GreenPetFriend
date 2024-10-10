import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Tab = (props) => {

  const {title} = props;
  const [tabActive, setTabActive] = useState(0)

  return (
    <View style={styles.tabWrap}>
      {title.map((title,i)=>(
        <Pressable key={i} onPress={()=>{setTabActive(i)}}>
          <Text style={tabActive === i ? styles.tabItemActive : styles.tabItem}>{title}</Text>
        </Pressable>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  tabWrap: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    paddingLeft:20,
    flexShrink: 0, 
    overflow: 'auto', 
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 14,
    fontFamily: 'Wanted Sans',
    lineHeight: 17,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E7E9ED",
    color: '#8D96A4',
  },
  tabItemActive: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 14,
    fontFamily: 'Wanted Sans',
    lineHeight: 17,
    borderRadius: 999,
    borderWidth: 1,
    color: "#fff",
    fontWeight: 700,
    borderColor: "#64C7FA",
    backgroundColor: '#64C7FA'
  }
})

export default Tab