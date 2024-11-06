import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/bikes";

const fetchBikes = createAsyncThunk('fetchBikes', async () => {
    try {
        const response = await axios.get(`${URL_API}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
const updateBikes = createAsyncThunk('updateBikes', async (data) => {
    try {
        const response = await axios.put(`${URL_API}/${data.id}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }

})

const addBike = createAsyncThunk('addBike', async (data) => {
    try {
        const response = await axios.post(`${URL_API}`, data.body)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})

const findByTypeId = createAsyncThunk('findByTypeId', async (data) => {
    try {
        const response = await axios.get(`${URL_API}?typeId=${data.id}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
const bikeSlice = createSlice({
  name: "bikes",
  initialState: {value: []},
  reducers: {
    setBikes: (state, action) => {
        state.value = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
        state.value = action.payload 
    }) 
    builder.addCase(updateBikes.fulfilled, (state, action) => {
        
    })
    builder.addCase(addBike.fulfilled, (state, action) => {
        state.value = [...state.value, action.payload]
    })
    builder.addCase(findByTypeId.fulfilled, (state, action) => {
        state.value =  action.payload;
    })
  }
});

export {fetchBikes, updateBikes, addBike, findByTypeId}
export const { setBikes } = bikeSlice.actions
export default bikeSlice.reducer;