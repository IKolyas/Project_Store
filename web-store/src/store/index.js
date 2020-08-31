import Vue from 'vue'
import Vuex from 'vuex'
import { get, put, del, post } from "../utils/reqs.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsBasket: [],
    basketSum: null,
    basketURL: "/api/basket",

  },
  mutations: {

    getCart(state) {
      get(state.basketURL).then((basket) => {
        state.itemsBasket = basket.contents;
      });
    },

    countingGoods(state) {
      state.basketSum = null;
      state.itemsBasket.forEach((item) => (state.basketSum += +item.price * +item.quantity));
    },

    add(state, item) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      if (!find) {
          let newItem = Object.assign({}, item, {quantity: 1,});
          console.log(newItem);
          post(state.basketURL, newItem).then((res) => {
          if (res.status) {
            state.itemsBasket.push(newItem);
          } else {
              console.log("Server err");
          }
          });
      } else {
          put(`${state.basketURL}/${item.id}`, 1).then((res) => {
          if (res.status) {
              find.quantity++;
          } else {
              console.log("Server err");
          }
          });
      }
    },

    remove(state, item) {
      let find = state.itemsBasket.find((el) => el.id == item.id);
      if (find.quantity > 1) {
          put(`${state.basketURL}/${item.id}`, -1).then((res) => {
          if (res.status) {
              find.quantity--;
          } else {
              console.log("Server err");
          }
          });
      } else {
          del(`${state.basketURL}/${item.id}`).then((res) => {
          if (res.status) {
            state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
          } else {
              console.log("Server err");
          }
          });
      }
    },

    quantity(state, {item, count}) {
      console.log(count)
      let find = state.itemsBasket.find((el) => el.id == item.id);
      put(`${state.basketURL}/${item.id}`, +count).then((res) => {
        if (res.status) {
            find.quantity = count;
        } else {
            console.log("Server err");
        }
      })
    },

    dell(state, item) {
      del(`${state.basketURL}/${item.id}`).then((res) => {
          if (res.status) {
            state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
          } else {
              console.log("Server err");
          }
          })
  }


  },
  actions: {
  },
  modules: {
  }
})
