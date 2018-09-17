import * as actions from './postActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action to request post', () => {
        const text = 'hot';
        const expectedAction = {
            type: actions.POST_REQUEST,
            reddit: text
        };
        expect(actions.requestPost('hot')).toEqual(expectedAction);
    });
});

describe('get post mock api', () => {
    it('creates POST_SUCCESS when fetching posts has been done', () => {
        let mock = new MockAdapter(axios);
        mock.onGet('https://www.reddit.com/r/all/hot.json?limit=10').reply(
            200,
            {
                data: {
                    after: 'a1234bc',
                    children: []
                },
                kind: 'Listing'
            }
        );

        const expectedActions = [
            {
                type: actions.POST_REQUEST,
                reddit: 'hot'
            },
            {
                type: actions.POST_SUCCESS,
                reddit: 'hot',
                posts: {
                    data: {
                        after: 'a1234bc',
                        children: []
                    },
                    kind: 'Listing'
                }
            }
        ];
        const store = mockStore({});

        return store.dispatch(actions.fetchPost('hot', 10)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
