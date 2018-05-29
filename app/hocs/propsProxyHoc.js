/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from "react-native";

const propsProxyHoc = WrappedComponent => class extends Component {

    constructor(props) {
        super(props);
        console.log('propsProxyHoc constructor');
        this.state = {
            showLoad : true,
        };
    }

    handleClick() {
        console.log('propsProxyHoc click');
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showLoad : false
            })
        }, 2500)
    }

    render() {
        return (
                this.state.showLoad ? <ActivityIndicator style={styles.indicator} size='large' color='#ff0000'/> : <WrappedComponent
                    {...this.props}
                    handleClick={this.handleClick}
                />
        );
    }
};

const styles = StyleSheet.create({
    indicator : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
    }
});

export default propsProxyHoc;