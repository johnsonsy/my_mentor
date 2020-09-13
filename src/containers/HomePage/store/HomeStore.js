/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import { callGetAllIssues } from '@api';
import storeAction from '@storeAction';

const initState = {
    list: ["123"],
};
const api = {
    list: callGetAllIssues
}

class HomeStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action getList = async () => {
        const { list } = await this.api.list();
        this.assignData({ list })
    }


}

const store = new HomeStore();
export default store;

