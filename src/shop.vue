<template>
  <div>我是购物车</div>
  <div>
    全选
    <input
      type="checkbox"
      v-model="shopStore.isCheckAll"
      @change="allCheckChange"
    />
  </div>
  <div>
    <div v-for="(good, index) in shopStore.goods" :key="good.name">
      <input type="checkbox" v-model="good.check" @change="singleChange" />
      商品名: {{ good.name }} --- 商品价格: {{ good.price }}￥
      <button @click="updateNum(index, 1)">+</button>
      数量: {{ good.num || 1 }}
      <button @click="updateNum(index, -1)">-</button>
      小计:{{ good.price * (good.num || 1) }}
    </div>
  </div>
  <div>总价: {{ shopStore.totalPrice }}</div>
</template>

<script setup lang="ts">
import { useShopStore } from "./store/shop";

const shopStore = useShopStore();
const updateNum = (index: number, num: number) => {
  shopStore.updateNum(index, num);
};
const allCheckChange = () => {
  shopStore.allCheckChange();
};
const singleChange = () => {
  shopStore.singleChange();
};
</script>

<style></style>
