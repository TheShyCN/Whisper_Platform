import { defineStore } from "pinia";

// 接口
interface IGoods {
  name: string;
  price: number;
  num?: number;
  check?: boolean;
}

export const useShopStore = defineStore("shop", {
  state() {
    return {
      goods: [
        {
          name: "羊肉串",
          price: 20,
        },
        {
          name: "鸡肉串",
          price: 15,
        },
        {
          name: "鸡翅",
          price: 10,
        },
      ] as IGoods[],
      isCheckAll: false,
    };
  },
  getters: {
    totalPrice(): number {
      return this.goods
        .filter((good) => good.check)
        .reduce((pre, cur) => {
          return pre + (cur.num || 1) * cur.price;
        }, 0);
    },
  },
  actions: {
    updateNum(index: number, num: number) {
      // 初始化
      this.goods[index].num = this.goods[index].num || 1;
      // 数值操作 断言
      this.goods[index].num! += num;
    },
    allCheckChange() {
      this.goods.forEach((good) => {
        good.check = this.isCheckAll;
      });
    },
    singleChange() {
      this.isCheckAll = this.goods.every((item) => item.check);
    },
  },
});
