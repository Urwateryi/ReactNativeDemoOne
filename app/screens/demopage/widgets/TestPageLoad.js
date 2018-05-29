import React, { PureComponent } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PageLoad from "./PageLoad";

/**
 * Description:页面加载
 *
 * Author: zoe
 * Time: 2018/5/28 0028
 */
export default class TestPageLoad extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showLoad : true,
        };
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showLoad : false
            })
        }, 6000)
    }

    render() {
        return (
            <View style={styles.container}>{
                this.state.showLoad ? <ActivityIndicator size='large' color='#ff0000'/> : <PageLoad/>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
    }
});