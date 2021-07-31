import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalOpen: false
  },
  reducers: {
    setModalOpen: (state, { payload }) => {
      state.isModalOpen = payload
    },
  },
})

export const globalReducer = globalSlice.reducer

export const { setModalOpen } = globalSlice.actions
