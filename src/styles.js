import {StyleSheet, Dimensions} from 'react-native'

const styles = {
    item : StyleSheet.create({
        container: {
            borderRadius: 10,
            margin: 5,
            backgroundColor: "#7fdbff",
            padding: 10,
        },
        songName: {
            fontSize: 10,
            fontWeight: 'bold'
        },
        artistName: {
            color: 'gray',
        },
        image: {

            height: Dimensions.get("window").height / 2,
            resizeMode: "contain"
        }
    }),
    searchBar: StyleSheet.create({
        container: {
            backgroundColor: "#fff3e0",
            margin: 10,
            padding: 5,
            borderRadius: 10,
            shadowOpacity: 3
        }
    })

}

export default styles