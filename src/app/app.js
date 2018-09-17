import React from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../store/appStore';
import { AppRouter } from '../routes/appRouter';

// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div>
            <AppRouter />
        </div>
    </Provider>
);
