import {reactive} from 'vue';
import ldb from "localforage";
import {remote} from "electron";

const state = reactive({
    groups: {
        'Boveda @ Local': {
            '192.168.0.21': [
                'bovedainc.com',
                'store.bovedainc.com',
                'www.bovedainc.com'
            ]
        },
        'FWS @ Local': {
            '192.168.0.3': [
                'dev.com',
                'store.dev.com',
                'www.dev.com'
            ],
            '192.168.0.5': [
                'meh.com',
                'store.meh.com',
                'www.meh.com'
            ],
        }
    },
    test: 'passed'
});

const methods = {
    init() {
        window.ldb = ldb;
        window.win = remote.getCurrentWindow();
        ((on) => {
            if (on) {
                ldb.getItem('groups').then(groups => {
                    if (groups) {
                        state.groups = groups;
                    }
                });
                ldb.getItem('active').then(groups => {
                    if (groups) {
                        state.groups = active;
                    }
                });
            }
        })(false)
    },
};

export default {
    state,
    ...methods
}