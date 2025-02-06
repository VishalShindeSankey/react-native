import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import axios from 'axios';
import Card from '../Components/Card';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites } from '../redux/favouritesReducer';
// import { addFavourite } from '../redux/favouriteActions';

export default function Currencies({ navigation }) {
    const [currData, setCurrData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    //redux functions
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);

    console.log(favourites);
    //get all currency data from api
    const getData = async () => {
        const res = await axios.get('https://api.coinranking.com/v2/coins', {
            headers: {
                'x-access-token': 'coinranking402d36f3bd8f775a0186c11c3feaf61607a0a864d9897695',
            },
        });
        setCurrData(res.data.data.coins);
        setFilteredData(res.data.data.coins);
    }

    React.useEffect(() => {
        getData();
    }, [])


    //to check if currency is already added to favourites
    const isFavourite = (cardId) => {
        return favourites.some((item) => item.uuid == cardId);
    };

    //adding header counter of total favourites
    React.useEffect(() => {

        navigation.setOptions({
            headerRight: () => (

                <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                    <Text style={{ fontSize: 18, marginRight: 15 }}>
                        ⭐ {favourites.length}
                    </Text>
                </TouchableOpacity>
            ),
        });
    }, [favourites.length]);


    //Filter functionality
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredData(currData);
        } else {
            const filteredData = currData.filter((item) => item.name.toLowerCase().startsWith(query.toLowerCase()));
            setFilteredData(filteredData);
        }
    };

    return (
        <View style={styles.outerContainer}>

            <TextInput
                style={styles.searchBar}
                placeholder="Search Cryptocurrency..."
                value={searchQuery}
                onChangeText={handleSearch}
                placeholderTextColor='black'
            />
            
            <ScrollView>
                <View style={styles.currContainer}>
                    {filteredData.length > 0 &&
                        filteredData.map((item) => {
                    
                            return (
                                <View key={item.uuid} style={styles.currRow}>
                                    <View style={styles.currData}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => navigation.navigate('CurrencyDetails', { currId: item.uuid })}

                                        >
                                            <Card cardItem={item} />
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <View style={styles.rowStar}>
                                        
                                    {!isFavourite(item.uuid) ?
                                        <TouchableOpacity
                                        onPress={() => dispatch(addToFavourites(item))}
                                        >
                                            <Image
                                                source={require('../images/star.png')}
                                                style={{ width: 15, height: 15 }}
                                            />
                                        </TouchableOpacity> :
                                        <Image
                                        source={require('../images/filledStar.png')}
                                        style={{ width: 15, height: 15 }}
                                        />
                                    }
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}


// CSS
const styles = StyleSheet.create({
    outerContainer:{
        display:'flex',
        alignItems:'center',
        paddingVertical:15,
        paddingLeft:30
        
    },
    searchBar: {
        height: 40,
        width:'90%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        // marginHorizontal:5,
        marginTop:15,
        backgroundColor: 'white',
        color: 'black',
        alignSelf:'flex-start'
    },
    currContainer: {
        width:'100%',
        paddingTop: 20,
    
    },
    currRow:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'


    },
    currData:{
        display:'flex',
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'gray',
        // padding:10
    },
    rowStar:{
        width:'10%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }

})