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
import RouterFluxDemo from "./RouterFluxDemo";

export default class RouterFluxPage3 extends PureComponent {

    onSkip = () => {
        jumpPager(this.props.navigation.navigate, 'RouterFluxDemo')
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.onSkip}
                activeOpacity={0.5}>
                <Text style={styles.text}>RouterFluxPage3</Text>
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