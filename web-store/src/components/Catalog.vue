
<template >
    <div class="d-flex col-12 p-0">
        <div class="d-flex col-12 m-0 p-0" v-if="items">
            <!-- ITEMSCATALOG -->
            <div v-if="type === 'index'" class="row d-flex justify-content-around justify-content-lg-between p-0">
                <Item 
                    v-for="item of itemsFiltered.slice(0, 8)"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
            </div>
            <div v-if="type === 'singlePage'" class="row d-flex col-12 justify-content-around justify-content-lg-between p-0">
                <Item 
                    v-for="item of itemsFiltered.slice(0, 4)"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
            </div>
            <div v-if="type === 'products'" class="row d-flex justify-content-around justify-content-lg-between p-0">
                <Item 
                    v-for="item of itemsFiltered"
                    type="catalog"
                    :item="item"
                    :key="item.id"
                />
            </div>
        </div>
        <div v-else>
            <h3>Not Products</h3>
        </div>
    </div>
</template>

<script>

    import Item from "./Item.vue";
    import {get} from "../utils/reqs.js";

    export default {
        components: {
            Item,
        },
        props: {
            type: {
                type: String,
                default: 'index'
            },
        },
        data() {
            return {
                url: '/api/catalog',
                items: [],
                itemsFiltered: []
            }
        },
        methods: {
            filterItem(priceFilter = {min: 0, max: 1000}) {
                this.itemsFiltered = [...this.items];
                this.itemsFiltered = this.itemsFiltered
                    .filter(item => priceFilter.min <= +item.price && +item.price <= priceFilter.max)
            },
        },

        mounted() {
            get(this.url)
                .then(items => {
                    items.map(item => item.quantity = 1)
                    this.items = [...items];
                    this.filterItem()
                })
        },
    }
</script>

<style>

</style>