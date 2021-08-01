import { createSlice, current } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items:[],
    nutrientsSum: []
  },
  reducers: {
    addItemToBasket: (state, { payload }) => {
      state.items = [...state.items, payload]
      state.nutrientsSum = calcNutrientsSum(current(state).items)
        
    },
    removeBasketItem: (state, { payload }) => {
      state.items = [...state.items].filter((e) => e.name !== payload.name) 
      state.nutrientsSum = calcNutrientsSum(current(state).items)
    },
  },
})

export const calcNutrientsSum = (items) => {
  const mergedNutrients = items.map((e) => e.nutrients).reduce((a, b) => a.concat(b), []);
    
  let result = []

  mergedNutrients.reduce((a, b) =>{
    if (!a[b.id]) {
      a[b.id] = { id: b.id, amount: 0 };
      result.push(a[b.id])
    }
    a[b.id].amount += b.amount;
    return a;
  }, {});

  return result
}

export const basketReducer = basketSlice.reducer

export const { addItemToBasket, removeBasketItem } = basketSlice.actions
