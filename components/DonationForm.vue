<template>
    <div>
        <div class="donation-ideas">
            <button class="donation-idea" @click="selectAmount(idea.amount)" v-for="idea in ideas">
                <div class="image-container">
                    <ClientOnly>
                        <font-awesome-icon :icon="['fas', idea.img]" />
                    </ClientOnly>
                </div>
                <div class="text-container">
                    <header>
                        {{ idea.name }}
                    </header>
                    <p>
                        {{ idea.description }}
                    </p>
                </div>
            </button>
        </div>
        <div class="donation-action-container">
            <div><input v-model="donationAmount" />€</div>
            <a :href="paypalURL()" target="_blank">Los gehts!
                <ClientOnly>
                    <font-awesome-icon :icon="['fab', 'paypal']" />
                </ClientOnly>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { DonationIdea } from '../types'
import donationIdeas from '../data/donation-ideas'
import { ref } from 'vue'

const ideas = ref(donationIdeas as DonationIdea[])
const donationAmount = ref(0)

const paypalURL = () => {
    return `https://www.paypal.com/paypalme/paulschreiber96/${donationAmount.value}`
}
const selectAmount = (amount: number) => {
    donationAmount.value = amount
}
</script>

<style lang="scss" scoped>
.donation-ideas {
    display: flex;
    gap: $sp-medium;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;

    .donation-idea {
        all: unset;
        background-color: white;
        padding: $sp-medium;
        border-radius: 15px;
        display: flex;
        cursor: pointer;
        width: 330px;

        &:hover {
            transform: scale(1.05);
        }

        .image-container {
            margin-right: $sp-medium;
            font-size: $fs-large;
            color: $color-secondary;
            width: 15%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .text-container {
            display: flex;
            flex-direction: column;

            header {
                font-weight: $fw-bold;
            }

            p {
                all: unset;
            }
        }
    }
}

.donation-action-container {
    margin: auto;
    margin-top: $sp-large;
    width: fit-content;
    font-weight: $fw-bold;
    display: flex;
    align-items: center;
    gap: $sp-medium;

    input {
        font-size: $fs-medium;
        padding: $sp-tiny;
        width: 80px;
        margin-right: $sp-tiny;
        border: solid 2px $color-font-medium;
        border-radius: 15px;
        text-align: right;
    }

    a {
        border-radius: 15px;
        padding: $sp-small;
        background-color: #0079C1;
        color: $color-font-light;
        text-decoration: none;
        font-size: $fs-medium;

        svg {
            color: white;
        }
    }
}
</style>
