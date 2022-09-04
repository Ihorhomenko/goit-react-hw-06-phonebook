import { configureStore, createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {items: [], filter: ""}, 

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    addFilter(state, action) {
      state.filter = action.payload
    }     
  },
});


export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
    },
  })

export const {addContact, deleteContact, addFilter} = contactsSlice.actions