import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    dialog: {
      isDialogOpen: false,
      heading: '',
      content: ''
    },
    isOffCanvasOpen: false
  },
  reducers: {
    setDialog: (state, { payload }) => {
      state.dialog = payload
    },

    setOffCanvasOpen: (state, { payload }) => {
      state.isOffCanvasOpen = payload
    },
  },
})

export const globalReducer = globalSlice.reducer

export const {setDialog, setOffCanvasOpen } = globalSlice.actions
