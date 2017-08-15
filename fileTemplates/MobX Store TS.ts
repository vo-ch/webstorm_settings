import { IApplicationStores } from 'ClientApp/stores/ApplicationStores';
import BaseStore, { IBaseState, IBaseStore } from 'ClientApp/stores/BaseStore';

export interface I${NAME}State extends IBaseState {

}

export interface I${NAME}Store extends I${NAME}State, IBaseStore<I${NAME}State> {
    getState(): I${NAME}State;
}

export default class ${NAME}Store extends BaseStore<I${NAME}State> implements I${NAME}Store {
    constructor(appStores: IApplicationStores,
                private initialState: I${NAME}State = {}) {
        super();
    }

    getState(): I${NAME}State {
        return {  };
    }
}