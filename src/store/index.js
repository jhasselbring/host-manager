import {reactive} from 'vue';
import ldb from "localforage";
import {remote} from "electron";
const state = reactive({});

const methods = {
    init(){
        window.ldb = ldb;
        window.win = remote.getCurrentWindow();
    },
};

export default {
    state,
    ...methods
}