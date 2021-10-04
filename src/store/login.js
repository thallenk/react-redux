import { combineReducers } from '@reduxjs/toolkit';
import createAsyncSlice from "./helper/createAsyncSlice";




const token = createAsyncSlice({
    name: 'token',
    fetchConfig: (payload) => ({
        url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }
    })
})


const user = createAsyncSlice({
    name: 'user',
    fetchConfig: (payload) => ({
        url: 'https://dogsapi.origamid.dev/json/api/user',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + payload,
            }
        }
    })
})

const reducer = combineReducers({token: token.reducer, user: user.reducer})
 const fetchToken = token.asyncAction;
 const fetchUser = user.asyncAction;
export default reducer

export const login = (user) => async (dispatch) => {
    try{
        const { payload } = await dispatch(fetchToken(user))
        if(payload.token !== undefined) await dispatch(fetchUser(payload.token))

    }catch {

    }
}

//forma mais trabalhosa
// const slice = createSlice({
//     name: 'login',
//     initialState: {
//         token:{
//             loading: false,
//             data: null,
//             error: null
//         },
//         user: {
//             loading: false,
//             data: null,
//             error: null
//         }

//     },
//     reducers: {
//         fetchTokenStarted(state) {
//             // o react-redux utiliza o immer internamente
//             state.token.loading = true
//         },
//         fetchTokenSuccess(state, action) {
//             state.token.loading = false;
//             state.token.data = action.payload;
//             state.token.error = null;
//         },
//         fetchTokenError(state, action) {
//             state.token.loading = false;
//             state.token.data = null;
//             state.token.error = action.payload;
//         },
//         fetchUserStarted(state) {
//             // o react-redux utiliza o immer internamente
//             state.user.loading = true
//         },
//         fetchUserSuccess(state, action) {
//             state.user.loading = false;
//             state.user.data = action.payload;
//             state.user.error = null;
//         },
//         fetchUserError(state, action) {
//             state.user.loading = false;
//             state.user.data = null;
//             state.user.error = action.payload;
//         }
//     }
// })

// const { fetchTokenStarted, 
//         fetchTokenSuccess, 
//         fetchTokenError, 
//         fetchUserStarted, 
//         fetchUserSuccess, 
//         fetchUserError} = slice.actions


// //thunk para fazer o fetch na api e buscar o token 
// export const fetchToken = (user) => async (dispatch) => {
//     try {
//         dispatch(fetchTokenStarted())
//         const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(user)
//         })
//         const data = await response.json()
//         return dispatch(fetchTokenSuccess(data))

//     } catch (error) {
//         return dispatch(fetchTokenError(error.message))
//     }
// }

// //thunk para fazer o fetch na api e buscar o usuario
// export const fetchUser = (token) => async (dispatch) => {
//     try {
//         dispatch(fetchUserStarted())
//         const response = await fetch('https://dogsapi.origamid.dev/json/api/user',{
//             method: 'GET',
//             headers: {
//                 Authorization: 'Bearer ' + token,
//             }
//         })
//         const data = await response.json()
//         return dispatch(fetchUserSuccess(data))

//     } catch (error) {
//         return dispatch(fetchUserError(error.message))
//     }
// }



// export default slice.reducer