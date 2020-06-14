import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator, TextInput, Alert } from 'react-native'

import { Item } from './components'
import { SearchBar } from './components/SearchBar'
import styles from './styles'

const Main = () => {
  const [originalList, setOriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    fetchData()
  }, [])


  const fetchData = async () => {

    try{
    setLoading(true)
    let response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums').catch(err => { throw err})
    setList(response.data)
    setOriginalList(response.data)
    setLoading(false)

    } catch (err) {
      setLoading(false)
      Alert.alert("bir hata oldu")

    }
    
  }

  const renderSongs = ({ item }) => <Item data={item} />

  const searchSong = (text) => {
    let filteredList = originalList.filter(function (item){
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()

      return itemData.indexOf(textData) > -1
    })
    setList(filteredList)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>


        <View style={styles.searchBar.container}>
          <SearchBar onSearch={searchSong}
          />
        </View>

        
            <FlatList
              refreshing = {loading}
              onRefresh = {fetchData}
              keyExtractor={(item, index) => index.toString()}
              data={myList}
              renderItem={renderSongs}
            />
        
        
      </View>
    </SafeAreaView>
  )
}

export default Main