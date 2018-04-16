/**
 * Description:
 */
import React, { PureComponent } from 'react';
import {Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import Colors from '../../../resources/Colors'

export default class RouterFluxPage1 extends PureComponent {

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={ Actions.RouterFluxPage2}
                activeOpacity={0.5}>
                <Text style={styles.text}>首页</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',//当前容器使用什么布局
        justifyContent : 'space-around',//定制主轴
        alignItems : 'stretch',//定制副轴
        alignContent : 'flex-start',
        backgroundColor : Colors.bg,
    }, text : {
        fontSize : 50,
        textAlign : 'center',
        color : Colors.gray,
    }
})