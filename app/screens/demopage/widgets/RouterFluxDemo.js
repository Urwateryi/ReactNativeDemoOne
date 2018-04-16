/**
 * Description:
 */
import React, { PureComponent } from 'react';
import { Router, Scene, Actions ,Modal } from 'react-native-router-flux';
import {
    StyleSheet,
    Image,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';

import Colors from '../../../resources/Colors'
import Images from "../../../resources/Images";

import RouterFluxPage1 from './RouterFluxPage1'
import RouterFluxPage2 from './RouterFluxPage2'
import RouterFluxPage3 from './RouterFluxPage3'

export default class RouterFluxDemo extends PureComponent {

    renderRightButton() {
        return (
            <TouchableOpacity onPress={Actions.RouterFluxPage3}>
                <Image source={Images.title.ic_setting} style={styles.title_pic}/>
            </TouchableOpacity>
        )
    }

    pageThreeBack() {
        ToastAndroid.show('返回', ToastAndroid.SHORT);
        Actions.pop
    }

    /**
     * 其中key相当于页面标识，用于Action跳转用，相当于android中的id
     * @returns {*}
     *
     * initial 默认显示页面
     */
    render() {
        return (
            <Router>
                <Scene key="fluxhome" type='replace' hideNavBar initial tabs style={styles.navigationBar}>
                    <Scene key="RouterFluxPage1" hideBackImage component={RouterFluxPage1} title="第一页" initial={true}/>
                    <Scene key="RouterFluxPage2" hideBackImage component={RouterFluxPage2} title="第二页"/>
                    <Scene key="RouterFluxPage3" hideBackImage component={RouterFluxPage3} title="第三页"/>
                </Scene>
            </Router>
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
    }, title_pic : {
        width : 20,
        height : 20,
        marginRight : 16
    }, navigationBar : {
        backgroundColor : 'white',
    }
})