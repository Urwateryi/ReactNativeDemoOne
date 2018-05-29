/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import { observable, action } from 'mobx';

class LoadStore {

    @observable
    isLoad=false;

    @action
    showLoadPage(){
        isLoad=true;
    }

    @action
    hideLoadPage(){
        isLoad=false;
    }
}

export default new LoadStore();