/**
 * Description:
 */
import { Actions } from 'react-native-router-flux';
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import Colors from '../../../resources/Colors'
import RouterFluxPage1 from "./RouterFluxPage1";

export default class RouterFluxPage3 extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={Actions.pop}
                    activeOpacity={0.5}>
                    <Text style={styles.text}>点我返回第二页，我是第二页调出我的</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {Actions.popTo('RouterFluxPage1')}}>
                    <Text style={styles.text}>
                        点我直接返回首页
                    </Text>
                </TouchableOpacity>
            </View>
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