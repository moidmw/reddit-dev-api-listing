import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from './state/stores/appStore';
import { AppRouter } from './routers/appRouter';

// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div>
            <AppRouter />
        </div>
    </Provider>
);
