import TokenDetails from '../../components/ReceiveTokens.jsx/TokenDetails';
import { getAllTokens, updateToken, addToken, deleteToken} from '../../components/actions/TokenActions';
import { range } from "lodash";
describe('Token Details', () => {


    it('Initial State test', () => {
        // Response body sample
        const usertokens = [
            {
                id: 1,
                meter: 28932455,
                amount: 40000
            },
            {
                id: 2,
                meter: 43748328,
                amount: 43000
            }
        ]

        expect(tokenDetails.getState()).toEqual(usertokens)
    })

    it("add token test", async () => {
        const newToken = {
            id: 3,
            meter: 43984759,
            amount: 50000
        }


        const initialLength = tokenDetails.getState().length 

        await tokenDetails.dispatch(addToken(newTestimony))

        expect(tokenDetails.getState().length).toBeGreaterThan(initialLength)

        expect(tokenDetails.getState()[2].meter).toEqual(newToken.meter)
    })


    it('Update token test', async () => {
        // Response body sample
        const stateToUpdate = {
            id: 2,
            meter: 43847593,
            amount: 60000
        }

        await tokenDetails.dispatch(updateToken(stateToUpdate))
        expect(tokenDetails.getState()[1].meter).toEqual(stateToUpdate.meter)
    })


    it('Update Unexisting token test', async () => {
        // Response body sample
        const stateToUpdate = {
            id: 4,
            meter: 65448934,
            amount: 4398473
        }

        await tokenDetails.dispatch(updateToken(stateToUpdate))
        expect(tokenDetails.getState()[1]).not.toEqual(stateToUpdate)
    })

    it("delete tokens", async () => {

        const initialLength = tokenDetails.getState().length

        await tokenDetails.dispatch(deleteToken(tokenDetails.getState()[1]))

        expect(tokenDetails.getState().length).toBeLessThan(initialLength)
    })

    it('View token test', async () => {
        // Response body sample

        const initialState = tokenDetails.getState()
        let views = initialState[0].views
        await tokenDetails.dispatch(getAllTokens())
        expect(tokenDetails.getState().length).toEqual(initialLength)
    })

})