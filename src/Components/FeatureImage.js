import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FeatureImage = ({featureImagePath, Recomended,  Product, discription}) => {
  return (
    <View style={styles.slider}>
       <Image style={styles.feature} source={featureImagePath} />
            <View style={{position:'absolute',top:40, padding:10}}>
            <Text style={styles.promotion}>{Recomended}</Text> {'\n'}
            <Text>{Product}</Text>
            <Text style={styles.promotiontext}>{discription}</Text>
        </View>
    </View>
  )
}

export default FeatureImage

const styles = StyleSheet.create({
 
    promotion:{
        fontSize:32,
        fontWeight:'bold',
        color:'white'
     },
     promotiontext:{
         color:'white',
         marginTop:10,
         fontSize:16,
         fontWeight:'300'
      },
      slider:{
        position:'relative',
        margin: 10,
        paddingVertical:10
    },
})