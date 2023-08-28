import React from "react";
import {View, Text, inputText, StyleSheet} from 'react-native';


const FlexDimensionsBasics = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <Text style={styles.heading}>Tela de Login</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBotton: 20,

    },
});

export default FlexDimensionsBasics;