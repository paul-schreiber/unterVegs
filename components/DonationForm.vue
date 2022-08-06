<template>
    <div>
        <div class="donation-ideas">
            <div class="donation-idea" @click="selectAmount(idea.amount)" v-for="idea in donationIdeas">
                <div class="image-container">
                    <font-awesome-icon :icon="['fas', idea.img]" />
                </div>
                <div class="text-container">
                    <header>
                        {{ idea.name }}
                    </header>
                    {{ idea.description }}
                </div>
            </div>
        </div>
        <div class="donation-action-container">
            <div><input v-model="donationAmount" />€</div>
            <a :href="paypalURL" target="_blank">Los gehts!
                <font-awesome-icon :icon="['fab', 'paypal']" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { DonationIdea } from '../types'
import donationIdeas from '../data/donation-ideas'
export default defineComponent({
    data() {
        return {
            donationIdeas: donationIdeas as DonationIdea[],
            donationAmount: 0,
        }
    },
    computed: {
        paypalURL() {
            return `https://www.paypal.com/paypalme/paulschreiber96/${this.donationAmount}`
        }
    },
    methods: {
        selectAmount(amount: number) {
            this.donationAmount = amount
        }
    }
})
</script>

<style lang="scss">
.donation-ideas {
    display: flex;
    gap: $sp-medium;
    flex-wrap: wrap;

    .donation-idea {
        background-color: white;
        padding: $sp-medium;
        border-radius: 15px;
        display: flex;
        cursor: pointer;
        width: 400px;

        &:hover {
            transform: scale(1.05);
        }

        .image-container {
            margin-right: $sp-medium;
            font-size: $fs-large;
            color: $color-secondary
        }

        .text-container {
            display: flex;
            flex-direction: column;

            header {
                font-weight: $fw-bold;
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
