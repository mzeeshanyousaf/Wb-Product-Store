import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductSlider = ({ imageSource, title, price, discountedPrice, discount, titledetail }) => {
  return (
    <TouchableOpacity>
    <View style={styles.cardbox}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.cardtext}>{title}{'\n'}
      <Text>{titledetail}</Text>
      </Text>
      <Text style={styles.cardtext2}>{price}</Text>
      <Text style={styles.cardtext3}>
        {discountedPrice} {'       '}
        <Text style={styles.cardtext4}> {discount}</Text>
      </Text>
    </View>
    </TouchableOpacity>
  )
}

export default ProductSlider

const styles = StyleSheet.create({
    cardbox:{
        padding:10,
        borderWidth:1,
        borderColor:'silver',
        borderRadius:10,
        display:'flex',
        gap:10,
        marginRight:20
    },
    image:{
        width:'100%'
    },
    
    cardtext:{
        fontWeight:'bold'
    },
    cardtext2:{
        fontWeight:'bold',
        color:'#40BFFF'
    },
    cardtext3:{
        color:'#9098B1',
        fontWeight:'bold',
        fontSize:12
    },
    cardtext4:{
        color:'#FB7181'
    }
})
