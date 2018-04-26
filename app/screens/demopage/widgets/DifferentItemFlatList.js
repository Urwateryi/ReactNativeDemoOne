/**
 * Description:利用FlatList实现多种样式列表
 *
 * Author: zoe
 * Time: 2018/4/26 0026
 */
import {
    Platform,
    View,
    Image,
    Button,
    Text,
    ToastAndroid,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Dimensions
} from "react-native";
import React, { PureComponent } from "react";
import Colors from "../../../resources/Colors";
import Images from "../../../resources/Images";
import PullToRefreshLayout from "../../../components/PullToRefreshLayout";

const dataList = [
    {
        key : 'Text',
        type : 1,
        content : 'THIS IS TEXT'
    },
    {
        key : 'Image',
        type : 2,
        content : Images.other_test.bg_beauty
    },
    {
        key : 'Button',
        type : 3,
        content : 'THIS IS BUTTON'
    },
];

export default class DifferentItemFlatList extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "多样式FlatList",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS === "ios" ? 64 : 48 },
    });

    onRefresh=()=> {
        ToastAndroid.show("refresh...",ToastAndroid.SHORT)
        this.refs.refresh.stopRefresh()
    }

    render() {
        return (
            <View>
                <PullToRefreshLayout ref='refresh' style={styles.container} onRefresh={this.onRefresh}>
                    <FlatList
                        data={dataList}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItem.bind(this)}
                    />
                </PullToRefreshLayout>
            </View>
        )
            ;
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    //列表的每一行
    renderItem({ item }) {
        if (item.type === 1) {
            return (
                <TouchableOpacity activeOpacity={1} onPress={() => this.clickItem(item)}>
                    <Text style={styles.item}>{item.content}</Text>
                </TouchableOpacity>
            )
        } else if (item.type === 2) {
            return (
                <TouchableOpacity activeOpacity={1} onPress={() => this.clickItem(item)}>
                    <Image
                        style={styles.img}
                        source={item.content}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )
        } else if (item.type === 3) {
            return (
                <Button
                    activeOpacity={1}
                    onPress={() => this.clickItem(item)}
                    title={item.content}
                    color="#841584"
                />
            )
        }
    }

    //点击列表点击每一行
    clickItem(item) {
        ToastAndroid.show(item.key, ToastAndroid.SHORT)
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        backgroundColor : 'white'
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
    }, img : {
        backgroundColor : 'white',
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').width / 2,
    }
});