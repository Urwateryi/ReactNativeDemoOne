/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React, { Component } from 'react';
import { StyleSheet, Text,View } from "react-native";
import simpleHoc from '../../../hocs/simpleHoc';
import propsProxyHoc from "../../../hocs/propsProxyHoc";

//---------写法一--------------
//普通模式
// class HocDemo extends Component {
//     render() {
//         console.log(this.props, 'props');
//         return (
//             <Text>
//                 Usual
//             </Text>
//         )
//     }
// }
// export default simpleHoc(Usual);

//---------写法二--------------
//装饰器模式
@simpleHoc
@propsProxyHoc
export default class HocDemo extends Component {
    render() {
        console.log(this.props, 'props');
        return (
            <View style={styles.container}>
                <Text style={styles.txt} onPress={()=>this.props.handleClick}>
                    HocDemo
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    txt : {
        fontSize : 40,
        color : 'black',
        justifyContent : 'center',
        alignItems : 'center',
    }
});