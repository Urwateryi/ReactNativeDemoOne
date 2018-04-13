/**
 * Description:路由
 *
 * Author: zoe
 * Time: 2018/4/13 0013
 */
import Images from "./resources/Images";
import TabBarItem from './components/TabBarItem';
import {Platform} from "react-native";
import Colors from './resources/Colors'

import React from "react";

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';

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

