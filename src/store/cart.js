import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
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
    addItem(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
