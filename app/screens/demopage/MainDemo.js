/**
 * Description:引导页
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import ImageBackGroundDemo from "./widgets/ImageBackGroundDemo";
import InputDemo from "./widgets/InputDemo";
import RefDemo from "./widgets/RefDemo";
import StorageDemo from "./widgets/StorageDemo";

import Colors from '../../resources/Colors'
import TxtPicPageDemo from "./widgets/TxtPicPageDemo";
import AnimateDemo from "./widgets/AnimateDemo";
import LifeCycleDemo from "./widgets/LifeCycleDemo";
import { RnAndroidCommunicationDemo } from "./widgets/RnAndroidCommunicationDemo";
import SkipDemo from "./widgets/SkipDemo";
import RouterFluxPage from "./widgets/RouterFluxPage";
import StateDemo from "./widgets/StateDemo";
import DifferentItemFlatList from "./widgets/DifferentItemFlatList";
import MobxDemo from "./widgets/MobxDemo";
// import RouterFluxDemo from "./widgets/RouterFluxDemo";

var strList = [
    {
        key : 'Text',
        action : 'TextDemo'
    },
    {
        key : 'Image',
        action : 'ImageDemo'
    },
    {
        key : 'Camera',
        action : ''
    },
    {
        key : 'ImageBackground ',
        action : 'ImageBackGroundDemo'
    },
    {
        key : 'Input',
        action : 'InputDemo'
    },
    {
        key : 'Button',
        action : 'ButtonDemo'
    },
    {
        key : 'ScrollView',
        action : 'ScrollViewDemo'
    },
    {
        key : 'StateDemo',
        action : 'StateDemo'
    },
    {
        key : 'RouterFlux',
        action : 'RouterFluxDemo'
    }, {
        key : 'RouterFlux2',
        action : 'RouterFluxPage'
    },
    {
        key : 'Ref',
        action : 'RefDemo'
    },
    {
        key : 'WebView',
        action : 'WebViewDemo'
    },{
        key : 'Mobx',
        action : 'MobxDemo'
    },
    {
        key : 'Storage',
        action : 'StorageDemo'
    },
    {
        key : 'Picker',
        action : 'PickerDemo'
    },
    {
        key : 'Refresh',
        action : 'RefreshDemo'
    }, {
        key : '多样式FlatList',
        action : 'DifferentItemFlatList'
    },
    {
        key : 'CheckBox',
        action : 'CheckBoxDemo'
    },
    {
        key : 'Toast',
        action : 'ToastDemo'
    },
    {
        key : 'Video',
        action : 'VideoDemo'
    },
    {
        key : 'Media',
        action : 'MediaDemo'
    },
    {
        key : 'Swiper',
        action : 'SwiperDemo'
    },
    {
        key : '长列表FlatList',
        action : 'FlatListDemo'
    },
    {
        key : '分组列表SectionList',
        action : 'SectionListDemo'
    },
    {
        key : '图文列表',
        action : 'TxtPicPageDemo'
    },
    {
        key : '页面跳转，数据回传',
        action : 'SkipDemo'
    },
    {
        key : '网络请求',
        action : 'NetDemo'
    },
    {
        key : '生命周期',
        action : 'LifeCycleDemo'
    },
    {
        key : '动画',
        action : 'AnimateDemo'
    },
    {
        key : '进度圈',
        action : 'AnimateDemo'
    },
    {
        key : '自定义控件',
        action : 'CustomCompontDemo'
    },
    {
        key : '聚合页面',
        action : '此页面主要测试聚合页面'
    },
    {
        key : '与Android交互',
        action : 'RnAndroidCommunicationDemo'
    },
    {
        key : '与iOS交互',
        action : '此页面主要测试与原生iOS交互'
    },
    {
        key : '热更新',
        action : '此页面主要测试与原生iOS交互'
    },
    {
        key : '打包',
        action : 'PickUpDemo'
    },
];

export default class MainDemo extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={strList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    //列表的每一行
    renderItem({ item }) {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.clickItem(item)}>
                <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        //跳转方法一（使用react-navigation）：
        // console.log(item.action+"///"+item.key)
        // const {navigate} = this.props.navigation;
        // navigate(item.action);

        //跳转方法二（使用react-navigation）：
        // jumpPager(this.props.navigation.navigate,item.action)

        //跳转方法三（使用flux）：
        Actions.push(item.action)
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.bg,
    },
    item : {
        alignItems : 'center',
        justifyContent : 'center',
        padding : 10,
        fontSize : 18,
        backgroundColor : 'white',
        height : 55,
        borderBottomWidth : 1,
        borderBottomColor : Colors.border
    }, one : {
        fontSize : 30,
        textAlign : 'center',
        color : Colors.gray,
    }
});