import { StyleSheet, Text, View,ScrollView ,TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'
import axios from 'axios';
import Card from '../Components/Card';

export default function Home({navigation}) {

  const [trendingData, setTrendingData] = React.useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://api.coinranking.com/v2/coins', {
        headers: {
          'x-access-token': 'coinranking402d36f3bd8f775a0186c11c3feaf61607a0a864d9897695',
        },
      });

      setTrendingData(res.data.data.coins.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
    
  }
  
  React.useEffect(() => {
    getData();
  }, [])
  
  console.log(trendingData);
  return (
    <View style={styles.outerContainer}>
      <View><Text>Top Trending Crypto Currencies</Text></View>
      <View style={styles.currContainer}>
        {trendingData.length > 0 &&
          trendingData.map((item) => {
            
            return (
              <View key={item.uuid}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('CurrencyDetails', { currId: item.uuid })}

                >
                  <Card cardItem={item} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer:{
      display:'flex',
      alignItems:'center',
      marginTop:30
    },  
    currContainer:{
      paddingTop:20,
      flexDirection:'row',
      flexWrap:'wrap',
      gap:15,
      justifyContent:'center'
    },
})