/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/6/5 0005
 */
import { View,Text, StyleSheet } from "react-native";
import React  from "react";
import BaseComponent from "../../../base/BaseComponent";

/**
 * Description:孩子组件
 *
 * Author: zoe
 * Time: 2018/6/5 0005
 */
export default class ChildComponent extends BaseComponent {

    initTitle(){
        this.setTitleCenter("ChildComponent")
    }

    renderComponent() {
        return (
            <View style={styles.container}>
                <Text>ChildComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});