import { createSlice } from "@reduxjs/toolkit"



const slice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
        incrementar: (state) => state + 1,
        reduzir: (state) => state - 1,
        // Adiciona o prepare para ter o controle do ojeto da ação
        somar: {
            reducer: (state, action) => state + action.payload,
            prepare: (payload) => ({payload, meta: 'local'})
        }
    },
});


export const { incrementar, reduzir, somar } = slice.actions;
export default slice.reducer;