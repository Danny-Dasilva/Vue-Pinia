import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  id: 'cart',
  state: () => ({
    items: [],
   
  }),
  getters: {
    itemsCount() {
      return this.items.length
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addItem(item) {
      // you can directly mutate the state
      this.items.push(item)
    },
    removeItem(item) {
      const i = this.items.findIndex(s => s.name === item.name)
      if (i > -1) this.items.splice(i, 1)
    }
  },
})
