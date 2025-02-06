import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native'
import React from 'react'
import axios from 'axios';
import millify from 'millify';
import Icon from "react-native-vector-icons/FontAwesome";
import { LineChart } from 'react-native-chart-kit';

export default function CurrencyDetails({ route }) {
  const [data, setData] = React.useState({});
  // const [pastData, setPastData] = React.useState([]);
  const [chartData, setChartData] = React.useState({ labels: [], values:[]});
  

  const getData = async () => {

    const res = await axios.get(`https://api.coinranking.com/v2/coin/${route.params.currId}`, {
      headers: {
        'x-access-token': 'coinranking402d36f3bd8f775a0186c11c3feaf61607a0a864d9897695',
      },
      params: {
        referenceCurrencyUuid: `${route.params.currId}`,
        timePeriod: '24h'
      },
    });

    console.log(res.data.data);
    setData(res.data.data.coin);

  }

  const getPastData = async()=>{
    const res = await axios.get(`https://api.coinranking.com/v2/coin/${route.params.currId}/history`, {
      headers: {
        'x-access-token': 'coinranking402d36f3bd8f775a0186c11c3feaf61607a0a864d9897695',
      },
      params: {
        referenceCurrencyUuid: `${route.params.currId}`,
        timePeriod: '24h'
      },
    });

    // console.log(res.data.data);
    // console.log(res.data.data.history);

    const arr = res.data.data.history;
    const timeHistory = arr.filter((_,index)=> index%30 == 0).map((item)=>new Date(item.timestamp * 1000).toLocaleString("en-GB",{
      hour: "2-digit",
      minute: "2-digit",
    }));
    const valueHistory = arr.filter((_,index)=> index%30 == 0).map((item)=>parseFloat(Math.random()*100));

    setChartData({
      labels: timeHistory,
      values: valueHistory
    });

  }
  
  React.useEffect(() => {
    getData();
    getPastData();
  }, [])
  
  console.log(chartData);
  
  return (
    <ScrollView >
      
        
      {data.name &&
        <View style={styles.outerContainer}>
          <Text style={styles.heading}>{data.name}</Text>

          {/* <View style={styles.chartContainer}> */}

        {/* {chartData.labels.length > 0 && chartData.values.length > 0 &&
        <LineChart
        data={{
                labels: chartData.labels,
                datasets: [
                  {
                    data: chartData.values
                  }
                ]
              }}
              width={380} 
              height={220}
              chartConfig={{
                backgroundColor: "#FFFFFF",
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              }}
            />
            
          } */}
        {/* </View> */}

          <Text style={styles.subHeading}>{data.name} Value Statistics</Text>
          <View style={styles.detailsContainer}>
            
            <View style={styles.detailRow}>
              <Text style={styles.rowText}><Icon name="usd" size={18} />Price to USD</Text>
              <Text style={styles.rowValue}>{Number(data.price).toFixed(4)}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.rowText}>Rank</Text>
              <Text style={styles.rowValue}>{millify(data.rank)}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.rowText}>24h Volume</Text>
              <Text style={styles.rowValue}>{millify(data['24hVolume'])}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.rowText}>Market Cap</Text>
              <Text style={styles.rowValue}>{millify(data.marketCap)}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.rowText}>All Time High</Text>
              <Text style={styles.rowValue}>{millify(data.allTimeHigh.price)}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.rowText}>Website</Text>
              <Text style={styles.rowValue} onPress={()=>Linking.openURL(data.links[0].url)}>click here</Text>
            </View>
          </View>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  chartContainer:{
    display:'flex',
    alignItems:'center'
  },
  outerContainer:{
    display:'flex',
    alignItems:'center'
  },
  heading: {
    color:'blue',
    fontSize:26,
    fontWeight:'bold',
    marginVertical:15

  },
  subHeading: {
    fontSize:20,
    paddingHorizontal:20,
    marginVertical:10,
    alignSelf:'flex-start',
    fontWeight:'bold',
    marginTop:20

  },

  detailsContainer: {
    backgroundColor:'white',
    width:"90%",
    
  },


  detailRow: {
    display:'flex',
    flexDirection:'row',
    // marginVertical:10,
    padding:10,
    borderBottomWidth:1,
    borderColor:'gray',
    justifyContent:'space-between'
  },

  rowText:{
    fontSize:18,
  },
  rowValue:{
    fontSize:18,
    fontWeight:'bold'
  }
})