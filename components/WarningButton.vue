<template>
    <div class="help-button">
        <Transition name="slide-right">
            <div class="help-text" v-if="showWarning">
                <div class="error-click-to-action">
                    <div class="header">
                            <font-awesome-icon class="warning-icon" :icon="['fas', 'circle-exclamation']" />
                        <span>Du hast einen Fehler entdeckt oder eine Angabe stimmt nicht? Her damit!</span>
                    </div>
                    <NuxtLink :to="{
                        name: 'contact',
                        params: {
                            topic: `Fehler - ${product.name}/${getShopName}`
                        }
                    }">
                        <button title="Melde ein Problem oder einen Fehler!" aria-label="Fehler melden">👷🏽‍♀️ Fehler
                            melden</button>
                    </NuxtLink>
                </div>
            </div>
        </Transition>
        <button @click="toggleHelp">
            <span v-if="!showWarning">🔧</span>
            <span v-else>
                <font-awesome-icon class="warning-icon" :icon="['fas', 'close']" />
            </span>
        </button>
    </div>
</template>

<script lang="ts">
import { Product } from "../types"
export default defineComponent({
    props: {
        product: {
            type: Object as () => Product,
            required: true
        }
    },
    data() {
        return {
            showWarning: false
        }
    },
    computed: {
        getShopName() {
            return this.$DS.getShopById(this.product.shop).name
        },
    },
    methods: {
        toggleHelp() {
            this.showWarning = !this.showWarning
        }
    }
})
</script>

<style lang="scss" scoped>
a {
    color: $color-font-dark;
    text-decoration: none;
}

.help-button {
    position: fixed;
    bottom: $sp-medium;
    right: $sp-medium;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: left;
    margin-left: $sp-medium;

    .help-text {
        font-size: $fs-small;
        padding: $sp-medium;
        border-radius: 15px;
        width: 100%;
        max-width: 350px;
        background-color: white;
        margin-bottom: $sp-medium;
        box-shadow: $box-shadow;

        h3 {
            margin: 0px;
            margin-bottom: $sp-small ;
        }
    }

    button {
        //to center the icon
        padding-top: 3px;

        all: unset;
        padding: $sp-tiny;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        text-align: center;
        width: 45px;
        height: 45px;
        cursor: pointer;
        background-color: $color-warning;
        border-radius: 50%;
        box-shadow: $box-shadow;
        color: white;

        user-select: none;
        /* supported by Chrome and Opera */
        -webkit-user-select: none;
        /* Safari */
        -khtml-user-select: none;
        /* Konqueror HTML */
        -moz-user-select: none;
        /* Firefox */
        -ms-user-select: none;
        /* Internet Explorer/Edge */

    }

    .error-click-to-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $sp-small;
        margin: auto;
        text-align: left;
        font-weight: bold;

        .header {
            display: flex;
            gap: $sp-small;
        }

        .warning-icon {
            color: $color-warning;
            font-size: 1.6rem;
        }

        button {

            width: 145px;
            all: unset;
            cursor: pointer;
            border-radius: 10px;
            padding: $sp-small;
            margin: $sp-small;
            font-weight: bold;
            background-color: $color-warning;
            color: $color-font-light;
        }
    }
}

.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.5s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
    transform: translateX(400px);
    opacity: 70%;
}
</style>