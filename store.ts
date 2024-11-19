import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand'
import { OptionChoice } from '@prisma/client';
import { createJSONStorage, persist } from 'zustand/middleware'


export type CartItem = {
    name: string
    menuNum: string;
    qty: number;
    options?: OptionChoice[]
    itemTotal: number
}

export type Cart = {
    cartItems: CartItem[],
    itemCount: number,
    cartTotal: number,
    tax: number
}

export type Actions = {
    addCartItem: (item: CartItem) => void
    updateCartItem: (item: CartItem) => void
    resetCart: () => void
}

const isCartItemEqual: (cartItemA: CartItem, cartItemB: CartItem) => boolean = (cartItemA, cartItemB) => {
    return cartItemA.menuNum === cartItemB.menuNum && JSON.stringify(cartItemA.options) === JSON.stringify(cartItemB.options)
}

export const useCartStore = create<Cart & Actions>()(persist(immer((set) => ({
    cartItems: [],
    itemCount: 0,
    cartTotal: 0,
    tax: 0
    ,
    addCartItem: (item: CartItem) => set((state) => {
        let isUpdated = false
        // if there is no options sent, make default it to an empty array
        item.options = item.options || []

        state.cartItems.map(cartItem => {
            if (isCartItemEqual(cartItem, item)) {
                cartItem.qty = cartItem.qty + item.qty
                isUpdated = true
            }
        })
        if (!isUpdated) {
            state.cartItems = state.cartItems.concat(item)
        }
        state.itemCount = state.itemCount + item.qty
        state.cartTotal = state.cartTotal + item.itemTotal * item.qty
    }),
    updateCartItem: (item: CartItem) => set((state) => {
        let qtyChange = 0
        if (item.qty === 0) {
            state.cartItems = state.cartItems.filter(cartItem => !isCartItemEqual(cartItem, item))
            state.itemCount -= 1
            state.cartTotal -= item.itemTotal
            return
        }
        state.cartItems.map(cartItem => {
            if (isCartItemEqual(cartItem, item)) {
                qtyChange = item.qty - cartItem.qty
                cartItem.qty = item.qty
            }
        })
        state.itemCount = state.itemCount + qtyChange
        state.cartTotal += item.itemTotal * qtyChange

    }),
    resetCart: () => set((state) => {
        state.cartItems = []
        state.itemCount = 0
        state.cartTotal = 0
        state.tax = 0
    })
})), {
    name: 'cart-store',
    storage: createJSONStorage(() => localStorage),
}))