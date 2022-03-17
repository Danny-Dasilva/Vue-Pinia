<template>
  <form></form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCartStore } from "@/store/cart";

export default defineComponent({
  setup() {
    const inputs = reactive({ name: "", url: "" });
    const submit = () => {};
    return { inputs, submit };
  },
});
</script>
