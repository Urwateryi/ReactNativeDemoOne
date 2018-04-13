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
import { jumpPager } from "../../../utils/PageUtil";
import RouterFluxPage2 from "./RouterFluxPage2";

export default class RouterFluxDemo extends PureComponent {

    onSkip=()=>{
        jumpPager(this.props.navigation.navigate,'RouterFluxPage2')
    }

// {/*<TouchableOpacity*/}
// {/*style={styles.container}*/}
// {/*onPress={this.onSkip}*/}
// {/*activeOpacity={0.5}>*/}
// {/*<Text style={styles.text}>RouterFluxDemo</Text>*/}
// {/*</TouchableOpacity>*/}

    _renderRightButton(){
        return (
            <TouchableOpacity onPress={Actions.test3}>
                <Image source={{uri:'setting'}} style={{width:20,height:20,marginRight:16}} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
        <Router>
            <Scene key="root">
                <Scene key="test1" component={RouterFluxPage2} title="首页" initial={true}  />
                <Scene key="test2" component={RouterFluxPage3} title="第二页标题"
                       renderRightButton={this._renderRightButton}
                />
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
    }
})