
<template>
  <div class="container">
    <div>
      <h4>Add new item</h4>
      <!-- Create new item -->
      <AddItem />
    </div>
    <div>
      <h4>Your items ({{ cart.itemsCount }})</h4>
      <ItemsList />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AddItem from '@/components/AddItem.vue'
import ItemsList from '@/components/ItemList.vue'
import { useCartStore } from '@/store/cart'
export default defineComponent({
  components: { AddItem, ItemsList },
  setup() {
    const cart = useCartStore()
    return { cart }
  }
})
</script>