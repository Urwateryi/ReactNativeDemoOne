import React,{ PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

/**
 * Description:页面加载
 *
 * Author: zoe
 * Time: 2018/5/28 0028
 */
export default class PageLoad extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>welcome</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    txt:{
        color:'black',
        fontSize:'40',
        fontWeight :'200'
    },
});