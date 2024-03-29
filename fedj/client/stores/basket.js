import { defineStore} from "pinia"

export const userBasketStore = defineStore("basket" , {
    state: () => ({
        basketContent : [],
        quantity: 0
    }),
    getters: {
        productsTotal(){
            return this.basketContent.length
        },
        getProducts(){
            return this.basketContent;
        }
    },
    actions: {
        add(product){
            if(product){
                this.basketContent.push(product);
                this.quantity+1;
            }
        },
        remove(id){
            let index = this.basketContent.findIndex((obj) => obj.id === id);
            if(index !== -1){
                this.basketContent.splice(index, 1);
            }
        }
    }
})