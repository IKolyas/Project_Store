<template>
    <header class="container">
        <div class="row d-flex align-items-center justify-content-center mb-3 mt-5 mt-sm-0 pt-2">
            <router-link 
                :to="{name: 'Index'}" 
                class="logo col-7 col-sm-4 col-lg-2 d-flex justify-content-center pl-5">
                Bran
                <span>d</span>
            </router-link >
            <div class="input-group search__browse col-sm-8 col-lg-5 pr-sm-5 mb-1">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                            type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Browse
                    </button>
                    <div class="dropdown-menu dr__menu__left">
                        <a class="dropdown-item left__link__h pl-4" href="#">WOMAN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item left__link" href="#">Dresses</a>
                        <a class="dropdown-item left__link" href="#">Tops</a>
                        <a class="dropdown-item left__link" href="#">Sweaters/Knits</a>
                        <a class="dropdown-item left__link" href="#">Jackets/Coats</a>
                        <a class="dropdown-item left__link" href="#">Blazers</a>
                        <a class="dropdown-item left__link" href="#">Denim</a>
                        <a class="dropdown-item left__link" href="#">Leggings/Pants</a>
                        <a class="dropdown-item left__link" href="#">Skirts/Shorts</a>
                        <a class="dropdown-item left__link" href="#">Accessories</a>
                        <a class="dropdown-item left__link__h pl-4" href="#">MEN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item left__link" href="#">Tees/Tank tops</a>
                        <a class="dropdown-item left__link" href="#">Shirts/Polos</a>
                        <a class="dropdown-item left__link" href="#">Sweaters</a>
                        <a class="dropdown-item left__link" href="#">Sweatshirts/Hoodies</a>
                        <a class="dropdown-item left__link" href="#">Blazers</a>
                        <a class="dropdown-item left__link" href="#">Jackets/vests</a>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with dropdown button"
                       placeholder="Search for Item...">
                <button type="button"><i class="fas fa-search"></i></button>
            </div>
            <div class="rTop d-none d-sm-flex col-lg-3 ml-lg-auto justify-content-center justify-content-lg-end p-0 align-items-center">
                <div class="basket__block" id="basket">
                    <i class="fa fa-shopping-cart my__cart" aria-hidden="true" @click="showBasket = !showBasket"></i>

                    <!-- BASKET -->
                    <transition name="basket-show">
                        <basket v-show="showBasket" ref="bask"/>
                    </transition>

                </div>
                <div class="btn-group ml-4">
                    <router-link :to="{name: 'CheckOut'}" tag="button" type="button" class="btn btn-danger"> 
                        My Account
                    </router-link>
                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        <router-link :to="{name: 'CheckOut'}"> 
                            <a class="dropdown-item" href="#">You profile</a>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Sign out</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    const Basket = () => import('./Basket.vue');
    export default {
        name: "Header",
        components: {
            Basket,
        },
        data() {
            return {
                showBasket: false,
            }
        },
    }
</script>

<style>
    .basket-show{
        position: absolute;
        top: 63px;
    }
    .basket-show-enter-active {
        transition: all .3s ease;
    }

    .basket-show-leave-active {
        transition: all .3s cubic-bezier(0.7, 0.5, 0.8, 1.0);
    }

    .basket-show-enter, .basket-show-leave-to {
        transform: translateY(-100px);
        opacity: 0;
    }
</style>