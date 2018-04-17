import React, {PropTypes, Component}  from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import Colors from '../resources/Colors'
const tabIconStyles = StyleSheet.create({
    tabIconItem: {
        flex: 1,
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'white',
    },
    tabIconImage: {
        width: 24,
        height: 24
    },
    titleText: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 11
    },
    titleTextDefaultColor: {
        color: Colors.inactiveTint
    },
    titleTextSelectColor: {
        color: Colors.primary
    },
    tabItemRow: {
        flexDirection: 'row'
    },
});

export default TabIcon=(props)=>{
    var color = props.focused ? Colors.primary : Colors.inactiveTint
    return (
        <View style={tabIconStyles.tabIconItem}>
            <Image style={tabIconStyles.tabIconImage}
                   source={props.focused ? props.selectedImage : props.Image}/>

        </View>
    );
};
