<template>
  <form>
      <input v-model="inputs.name" type="text" class="form-control">
      <input v-model="inputs.url" type="text" class="form-control">
  </form>
  <button type="submit">Add</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCartStore } from "@/store/cart";

export default defineComponent({
  setup() {
    const inputs = reactive({ name: "", url: "" });
    const cart = useCartStore()
    const submit = () => {
        cart.addItem({ ...inputs})
        inputs.name = ''
        inputs.url = ''

    };
    return { inputs, submit };
  },
});
</script>
