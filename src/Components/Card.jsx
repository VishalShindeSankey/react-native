import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import { NavigationContainer } from '@react-navigation/native';

//redux
// import { useDispatch } from 'react-redux';
// import { addFavourite } from '../redux/favouriteActions';

export default function Card({cardItem}) {
    const imgUrl = encodeURI(cardItem.iconUrl.split('?')[0]);
    console.log("from home :" + cardItem);
  return (
    <View style={styles.cardContainer}>
        
        <View style={styles.cardLeft}>
            <Text style={styles.cardName}>{cardItem.rank}.</Text>
            {
                imgUrl.endsWith('.svg') ?
                <SvgUri
                width={30}
                height={30}
                uri={imgUrl}
                />
                :<Image source={{uri:imgUrl}} style={styles.currImg}/> 
                
            }
                <Text style={styles.cardName}>
                    {cardItem.name}
                </Text>
        </View>


        <View style={styles.cardRight}>
            <Text style={styles.cardPrice}>${Number(cardItem.price).toFixed(3)}</Text>
            {cardItem.change>0 ? 
                <Image
                    source={require('../images/caret-arrow-up.png')}
                    style={{ width: 15, height: 15 }}
                />:
                <Image
                    source={require('../images/caret-arrow-down.png')}
                    style={{ width: 15, height: 15 }}
                />
            }
        </View>
        
        

    </View>
    
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        width:'100%',
        justifyContent:'space-between',
        padding:15
    },
    cardLeft:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        flexWrap:'wrap'
    },
    cardName:{
        marginHorizontal:10,
        maxWidth:20
    },
    cardText:{
       
    },
    cardName:{
       
    },
    cardRight:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    changeGreen:{
        fontSize:16,
        color:'green'
    },
    changeRed:{
        fontSize:16,
        color:'red'
    },
    cardPrice:{
        fontWeight:'bold',
        fontSize:16
    },
    currImg:{
        height:30,
        width:30,
        resizeMode: 'contain',
    }

})