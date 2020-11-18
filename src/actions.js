

export const addItem= item => ({
    type: 'ADD_ITEM',
    item,
})

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    id,

})
export const updateQuantity = (id, newQty) => ({
    type: 'UPDATE_QUANTITY',
    id,
    newQty,

})

