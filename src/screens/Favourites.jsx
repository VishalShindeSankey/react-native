import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import Card from '../Components/Card';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../redux/favouriteActions';


export default function Favourites({ navigation }) {
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  return (
    <View style={styles.outerContainer}>
      {/* <Text>Favourite Cryptocurrencies</Text> */}

      {favourites.length === 0 ? (
        <Text>No favourites added yet.</Text>
      ) : (

        <ScrollView>
          {favourites.map((cardItem) => {
            const imgUrl = encodeURI(cardItem.iconUrl.split('?')[0]);

            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('CurrencyDetails', { currId: cardItem.uuid })}
              >

                <View style={styles.cardContainer}>

                  {/* {imgUrl.endsWith('.svg') ?
                      <SvgUri
                        width={100}
                        height={100}
                        uri={imgUrl}
                      />
                      : <Image source={{ uri: imgUrl }} style={styles.currImg} />
                  }

                  <View style={styles.cardText}>
                    <Text style={styles.cardName}>{cardItem.name}</Text>
                    <Text style={cardItem.change > 0 ? styles.changeGreen : styles.changeRed}>{cardItem.change}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => dispatch(removeFavourite(cardItem.uuid))}
                  >
                    <Image
                      source={require('../images/removeStar.png')}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableOpacity> */}

                  <View key={cardItem.uuid} style={styles.cardRow}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate('CurrencyDetails', { currId: cardItem.uuid })}

                    >
                      <Card cardItem={cardItem} />
                    </TouchableOpacity>

                  </View>
                  <View style={styles.removeStar}>

                    <TouchableOpacity
                      onPress={() => dispatch(removeFavourite(cardItem.uuid))}
                    >
                      <Image
                        source={require('../images/removeStar.png')}
                        style={{ width: 15, height: 15 }}
                      />
                    </TouchableOpacity>
                  </View>

                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

      )}
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 15,
    paddingLeft:25
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // padding: 10,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    gap: 10

  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.95,
    borderRadius:5
  }
  ,
  removeStar:{
    display:'flex',
    flex:0.05
  }
})