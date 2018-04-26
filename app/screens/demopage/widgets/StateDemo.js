import React, {PureComponent} from 'react';
import {
    View,
} from 'react-native'
import TodoListComponent from "../../../components/TodoListComponent";

/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/4/17 0017
 */
export default class StateDemo extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            todoList: [{title:'Eat',status:false},{title:'Play',status:false},{title:'Sleep',status:false} ],
        };
    }

    toggleTodo(index){    // 数据处理，切换 todo 状态，更新 state

        var todoList = this.state.todoList;
        var todo = todoList[index];
        if(todo){
            todo.status = !todo.status;
            this.setState({
                todoList: todoList,
            })
        }
    }

    render(){
        return (
            <View>
                <TodoListComponent todoList={this.state.todoList} toggleTodo={(index)=>{this.toggleTodo(index)}} />
            </View>
        );
    }
}