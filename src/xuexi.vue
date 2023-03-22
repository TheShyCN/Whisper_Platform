<template>
  <div @click="add">你好,我是pinia---{{ userStore.age }}</div>
  <div>
    我是当前年龄的两倍---{{ userStore.doubleAge }}---{{
      userStore.getNameAndDoubleAge
    }}
  </div>
  <div>
    num:{{ num }}
    <button @click="addNum">点我num+1</button>
    <p>我是传递参数的getter{{ userStore.getNumAndAge(num) }}</p>
  </div>
  <div @click="updateName">
    {{ userStore.name }}
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "./store/user";
import { ref } from "vue";
/**
 * 不能直接从store中解构值
 * 这样会破坏响应式的依赖
 * let {age} = useUSerStore()
 */
const userStore = useUserStore();
const add = () => {
  // userStore里的数据是响应式的
  userStore.age++;
};

let num = ref(1);

const addNum = () => {
  num.value++;
};

const updateName = () => {
  /**
   * 如果是同步方法, 拿到的是最新的值
   * 如果是异步方法, 无法拿到最新的值
   */
  userStore.saveName("李四");
  console.log(userStore.name);
};
</script>
