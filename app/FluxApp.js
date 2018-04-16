import React, { PureComponent } from "react";
import {
    Router,
    Scene,
    Modal,
    Tabs
} from 'react-native-router-flux'

import Images from "./resources/Images";
import TabBarItem from './components/TabBarItem';
import Colors from "./resources/Colors";
import { Platform, StyleSheet } from "react-native";
import TabIcon from './components/TabIcon'

import MainDemo from "./screens/demopage/MainDemo";
import MainCreate from './screens/createpage/MainCreate'
import MainFound from './screens/foundpage/MainFound'
import MainMsg from './screens/msgpage/MainMsg'
import MainMine from './screens/minepage/MainMine'

import TextDemo from './screens/demopage/widgets/TextDemo'
import ImageDemo from './screens/demopage/widgets/ImageDemo'
// import CameraDemo from "./screens/demopage/widgets/CameraDemo";
import ImageBackGroundDemo from "./screens/demopage/widgets/ImageBackGroundDemo";
import InputDemo from "./screens/demopage/widgets/InputDemo";
import ButtonDemo from "./screens/demopage/widgets/ButtonDemo";
import ScrollViewDemo from "./screens/demopage/widgets/ScrollViewDemo";
import RefDemo from "./screens/demopage/widgets/RefDemo";
import WebViewDemo from "./screens/demopage/widgets/WebViewDemo";
import StorageDemo from "./screens/demopage/widgets/StorageDemo";
import RefreshDemo from "./screens/demopage/widgets/RefreshDemo";
import SectionListDemo from "./screens/demopage/widgets/SectionListDemo";
import TxtPicPageDemo from "./screens/demopage/widgets/TxtPicPageDemo";
import NetDemo from "./screens/demopage/widgets/NetDemo";
import LifeCycleDemo from "./screens/demopage/widgets/LifeCycleDemo";
import AnimateDemo from "./screens/demopage/widgets/AnimateDemo";
import ToastDemo from "./screens/demopage/widgets/ToastDemo";
import { RnAndroidCommunicationDemo } from "./screens/demopage/widgets/RnAndroidCommunicationDemo";
import SkipDemo from "./screens/demopage/widgets/SkipDemo";
import SkipEditNamePage from "./screens/demopage/widgets/SkipEditNamePage";
import SkipEditAgePage from "./screens/demopage/widgets/SkipEditAgePage";
import RouterFluxPage3 from "./screens/demopage/widgets/RouterFluxPage3";
import RouterFluxPage1 from "./screens/demopage/widgets/RouterFluxPage1";
import RouterFluxPage2 from "./screens/demopage/widgets/RouterFluxPage2";

export default class App extends PureComponent {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key="modal" component={Modal} hideNavBar>
                    <Scene key="root" hideNavBar>
                        <Scene key="home" type='replace' initial tabBarPosition='bottom' tabs style={styles.navigationBar}>
                            <Scene hideBackImage key="MainDemo" title="首页" component={MainDemo}
                                   icon={TabIcon}
                                   Image={Images.home_button.ic_search_normal}
                                   selectedImage={Images.home_button.ic_search_select}/>
                            <Scene hideBackImage key="MainFound" component={MainFound} title="发现"
                                   icon={TabIcon}
                                   Image={Images.home_button.ic_search_normal}
                                   selectedImage={Images.home_button.ic_search_select}/>
                            <Scene hideBackImage key="MainCreate" component={MainCreate} title="新建"
                                   icon={TabIcon}
                                   Image={Images.home_button.ic_create_normal}
                                   selectedImage={Images.home_button.ic_create_select}/>
                            <Scene hideBackImage key="MainMsg" component={MainMsg} title="消息"
                                   icon={TabIcon}
                                   Image={Images.home_button.ic_msg_normal}
                                   selectedImage={Images.home_button.ic_msg_select}/>
                            <Scene hideBackImage key="MainMine" component={MainMine} title="我的"
                                   icon={TabIcon}
                                   Image={Images.home_button.ic_my_normal}
                                   selectedImage={Images.home_button.ic_my_select}/>
                        </Scene>
                    </Scene>
                    <Scene key="TextDemo" component={TextDemo}/>
                    <Scene key="ImageDemo" component={ImageDemo}/>
                    <Scene key="ImageBackGroundDemo" component={ImageBackGroundDemo}/>
                    <Scene key="InputDemo" component={InputDemo}/>
                    <Scene key="ButtonDemo" component={ButtonDemo}/>
                    <Scene key="ScrollViewDemo" component={ScrollViewDemo}/>
                    <Scene key="RefDemo" component={RefDemo}/>
                    <Scene key="WebViewDemo" component={WebViewDemo}/>
                    <Scene key="StorageDemo" component={StorageDemo}/>
                    <Scene key="RefreshDemo" component={RefreshDemo}/>
                    <Scene key="SectionListDemo" component={SectionListDemo}/>
                    <Scene key="TxtPicPageDemo" component={TxtPicPageDemo}/>
                    <Scene key="NetDemo" component={NetDemo}/>
                    <Scene key="LifeCycleDemo" component={LifeCycleDemo}/>
                    <Scene key="AnimateDemo" component={AnimateDemo}/>
                    <Scene key="ToastDemo" component={ToastDemo}/>
                    <Scene key="RnAndroidCommunicationDemo" component={RnAndroidCommunicationDemo}/>
                    <Scene key="SkipDemo" component={SkipDemo}/>
                    <Scene key="SkipEditNamePage" component={SkipEditNamePage}/>
                    <Scene key="SkipEditAgePage" component={SkipEditAgePage}/>
                    <Scene hideNavBar>
                        <Tabs
                            key="RouterFluxDemo"
                            swipeEnabled
                            wrap={false}
                            // 是否显示标签栏文字
                            showLabel={false}
                            tabBarStyle={styles.navigationBar}
                            //tab选中的颜色
                            activeBackgroundColor={Colors.primary}
                            // tab没选中的颜色
                            inactiveBackgroundColor={Colors.gray}
                        >
                            <Scene key="RouterFluxPage1" hideNavBar hideBackImage component={RouterFluxPage1} title="第一页" initial={true}/>
                            <Scene key="RouterFluxPage2" hideNavBar hideBackImage component={RouterFluxPage2} title="第二页"/>
                            <Scene key="RouterFluxPage3" hideNavBar hideBackImage component={RouterFluxPage3} title="第三页"/>
                        </Tabs>
                    </Scene>

                </Scene>
            </Router>
        );
    }
}

const getSceneStyle = () => ({
    backgroundColor : 'white',
    shadowOpacity : 1,
    shadowRadius : 3,
});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
    },
    navigationBar : {
        backgroundColor : 'white',
    }, titleStyle : {
        color : Colors.primary,
    }
})
