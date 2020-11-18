

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':{
        const newQty = state.hasOwnProperty(action.item.id) ? state[action.item.id].quantity + 1 : 1
        return {
            ...state,
            [action.item.id]:{
                ...action.item,
                quantity: newQty,
            }
        }
    }
    case 'REMOVE_ITEM':{
        const stateCopy = { ...state };
        delete stateCopy[action.id];
        
        return {
            ...stateCopy,
        }
    }
    case 'UPDATE_QUANTITY':{
        
        
        return {
           [action.id]:{
               quantity: action.newQty,
           }
        }
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);