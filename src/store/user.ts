import { defineStore } from "pinia";

const delay = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
};

/**
 * defineStore方法用来定义store
 * 第一个参数为store的唯一id
 * 第二参数是store的配置项
 */
export const useUserStore = defineStore("user", {
  /**
   * state是一个函数,必须有返回值
   * pinia可以完整的推断出state的类型
   */
  state() {
    return {
      age: 18,
      name: "peter",
    };
  },
  getters: {
    /**
     * getters是一个对象
     * 接收一个参数,这个参数就是当前模块的state
     * @param state
     * @returns 当前年龄的两倍
     */
    doubleAge: (state) => state.age * 2,
    /**
     * 如果在getters中使用其它getter,不能写成箭头函数
     * this的指向必须为store实例
     * 需要自己定义返回值的类型
     */
    getNameAndDoubleAge(): string {
      return this.name + this.doubleAge;
    },
    /**
     * 接受页面传递过来的参数的getter
     * 使用闭包
     */
    getNumAndAge() {
      /**
       * 返回一个方法，这个方法的参数就是页面传递过来的参数
       */
      return (num: number) => {
        return num + this.age;
      };
    },
  },
  /**
   * 存放当前模块的相关业务逻辑
   */
  actions: {
    // saveName(name: string) {
    //   this.name = name;
    // },
    async saveName(name: string) {
      await delay();
      this.name = name;
    },
  },
});
