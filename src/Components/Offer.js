import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Offer = ({imagePath, saleTitle, saleValue, hour, minute, seconds}) => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.slider}>
            <Image style={styles.feature} source={imagePath} />
            <View style={{position:'absolute', padding:10}}>
            <Text style={styles.promotion}>{saleTitle}{'\n'}
            <Text style={styles.promotion}>{saleValue}</Text>
            </Text>
            <View style={{display:'flex', flexDirection:'row', marginTop: 25}}>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>{hour}</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>{minute}</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>{seconds}</Text>
                </View>
            </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Offer

const styles = StyleSheet.create({
    container:{
        padding:0,
    },
    slider:{
        position:'relative',
        marginHorizontal: 10,
        marginVertical:20,
        width:360,
        borderRadius:20,
        overflow:"hidden"
    },
    promotion:{
        fontSize:32,
        fontWeight:'bold',
        color:'white'
     },
    
    timebox:{
        marginHorizontal:5,
        padding:15,
        backgroundColor:'white',
        borderRadius:15,
    },
    ratio:{
        paddingVertical:15,
    },
    ratiotext:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize: 22
    },
   
    timetittle:{
        color:'black',
        fontWeight:'bold',
        fontSize: 22
    } ,
    feature:{
        width:'100%',
        height:220,     
    }   
})