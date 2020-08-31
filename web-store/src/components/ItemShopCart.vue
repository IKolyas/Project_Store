<template>
   <div class="prodHeaders row col-12 d-flex justify-content-between mt-4 mb-3 text-uppercase">
        <div class="row col-5 img-responsive">
            <div class="productDet d-flex">
                <img :src="item.img" :alt="item.name">
                <div class="ProdDetText d-flex flex-column ml-3 text-capitalize ">
                    <h3>{{item.name}}</h3> <span>Color: <mark>Red</mark></span> <span>Size: <mark>Xll</mark></span>
                </div>
            </div>
        </div>
        <div class="row col-7 d-flex"><span
                class="col-12 col-md-3 d-flex justify-content-center align-items-center">${{+item.price}}</span>
            <div class="ProdHeadInp col-12 col-md-3 d-flex justify-content-center align-items-center">
                <label>
                    <input 
                    type="number" 
                    v-model.number="count"
                    @change="quantity(item, count)"
                    required pattern="^[ 0-9]+$"
                   >
                    
                </label></div>
            <span class="col-12 col-md-2 pl-md-0 d-flex justify-content-center align-items-center">free</span>
            <span class="col-12 col-md-2 d-flex justify-content-center align-items-center">${{+item.price * +item.quantity}}</span>
             <button name="remove" class="dell__Product fa fa-times-circle d-flex col-12 col-md-2 justify-content-center align-items-center"
                            @click="dell(item)"
                            data-id="${item.id}"
                            aria-hidden="true">
                    </button>
        </div>
    </div>
</template>

<script>
    import Item from "./Item.vue";
    export default {
        name: "ItemShopCart",
        components: {
            Item
        },
        data() {
            return {
                count: 0,
            };
        },
         props: {
            type: {
                type: String,
                default: 'catalog'
            },
            item: { type: Object }
        },

        computed: {

        },

        methods: {
            removeCard(item) {
                this.$store.commit('remove', item);
            },
            quantity(item, count) {
                this.$store.commit('quantity', {item, count});
            },
            dell(item) {
                this.$store.commit('dell', item)
            }

        },
        mounted() {
             this.count = this.item.quantity
        }
    }

</script>

<style>

</style>