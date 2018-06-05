import { View,Text, StyleSheet } from "react-native";
import React  from "react";
import BaseComponent from "../../../base/BaseComponent";

/**
 * Description:爸爸组件
 *
 * Author: zoe
 * Time: 2018/6/5 0005
 */
export default class FatherComponent extends BaseComponent {

   initTitle(){
       this.setTitleCenter("FatherComponent")
   }

    renderComponent() {
        return (
            <View style={styles.container}>
                <Text>FatherComponent</Text>
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