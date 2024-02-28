import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Offer = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.slider}>
            <Image style={styles.feature} source={require('../assets/Promotion Image.png')} />
            <View style={{position:'absolute', padding:10}}>
            <Text style={styles.promotion}>Super Flash Sale</Text>
            <Text style={styles.promotion}>50% Off</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop: 25}}>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
            </View>
            </View>
            
        </View>
        <View style={styles.slider}>
            <Image style={styles.feature} source={require('../assets/Promotion Image.png')} />
            <View style={{position:'absolute', padding:10}}>
            <Text style={styles.promotion}>Super Flash Sale</Text>
            <Text style={styles.promotion}>50% Off</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop: 25}}>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
            </View>
            </View>
            
        </View>
        <View style={styles.slider}>
            <Image style={styles.feature} source={require('../assets/Promotion Image.png')} />
            <View style={{position:'absolute', padding:10}}>
            <Text style={styles.promotion}>Super Flash Sale</Text>
            <Text style={styles.promotion}>50% Off</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop: 25}}>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
                <View style={styles.ratio}>
                    <Text style={styles.ratiotext}>:</Text>
                </View>
                <View style={styles.timebox}>
                    <Text style={styles.timetittle}>01</Text>
                </View>
            </View>
            </View>
            
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Offer

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    slider:{
        position:'relative',
        margin: 10
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
    }    
})