import React from 'react'
//redux
import { Provider} from 'react-redux';
import store from './redux/store';

import AuthNavigator from './AuthNavigator';

const Authentication = () => {
    
    return (
        <Provider store={store}>
            <AuthNavigator/>
        </Provider>
    )
}

export default Authentication