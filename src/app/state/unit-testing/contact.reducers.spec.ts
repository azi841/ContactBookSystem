import * as ContactActions from '../contact.actions'
import { ContactData } from '../contact.model'
import { ContactState } from '../contact.reducers'
import { initialState } from '../contact.reducers'
import { reducer } from '../contact.reducers'


describe('Reducer', ()=>{
    describe('unknown action', () => {
        it('should return the initial state', () =>{
            const action = {} as any;
            const result = reducer(initialState, action);
            expect(result).toBe(initialState)
        })
    })
})