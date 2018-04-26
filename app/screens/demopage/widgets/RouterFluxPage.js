/**
 * Description:
 */
import React, { PureComponent } from 'react';
import { Actions, Scene, Stack } from 'react-native-router-flux';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import Colors from '../../../resources/Colors'
import RouterFluxPage1 from "./RouterFluxPage1";
import RouterFluxPage2 from "./RouterFluxPage2";
import RouterFluxPage3 from "./RouterFluxPage3";

export default class RouterFluxPage extends PureComponent {

    render() {
        return (
            <Scene hideNavBar key="RouterFluxDemo" tabs
                   tabBarStyle={styles.tabBarStyle}
                   labelStyle={styles.routerFluxLabelStyle}
                   activeTintColor={Colors.primary}
                   inactiveTintColor={Colors.gray}>
                    <Stack key="RouterFluxPage1" hideNavBar hideBackImage component={RouterFluxPage1} title="第一页" initial={true}/>
                    <Stack key="RouterFluxPage2" hideNavBar hideBackImage component={RouterFluxPage2} title="第二页"/>
                    <Stack key="RouterFluxPage3" hideNavBar hideBackImage component={RouterFluxPage3} title="第三页"/>
            </Scene>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
    },
    navigationBar : {
        backgroundColor : 'white',
    },
    routerFluxLabelStyle : {
        marginTop : 5,
        textAlign : 'center',
        fontSize : 15
    }, tabBarStyle : {
        justifyContent : "center",
        alignItems : "center",
        paddingBottom : 10,
        height : 45,
        backgroundColor : 'white'
    }
})