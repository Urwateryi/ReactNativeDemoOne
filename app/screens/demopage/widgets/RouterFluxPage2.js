/**
 * Description:
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import Colors from '../../../resources/Colors'
import { Actions } from "react-native-router-flux";

export default class RouterFluxPage2 extends PureComponent {

    render() {
        return (
            <TouchableOpacity style={styles.container}
                              onPress={Actions.RouterFluxPage3}
                              activeOpacity={0.5}>
                <Text style={styles.text}>第二页，请点击我跳转到第三页</Text>
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