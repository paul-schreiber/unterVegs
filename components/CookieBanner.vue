<template>
    <Transition name="slide-down" appear>
        <div class="cookie-banner" v-if="!hideBanner">
            <div class="cookie-icon-container"><span>🍪</span> </div>
            <div>
                <p>Wir nutzen <b>Cookies</b> um die Website stetig zu verbessern und deinen Besuch
                    nutzerfreundlicher zu
                    gestalten. Wie genau das funktioniert erfährst du in unserer <NuxtLink to="/privacy">
                        Datenschutzerklärung
                    </NuxtLink>.
                </p>
            </div>
            <ActionButton name="Gib mir 🍪🍪🍪!" is-primary tooltip="Cookies akzeptieren" @click="onConfirm" />
        </div>
    </Transition>
</template>

<script lang="ts">
    // NUXT 3 usecookies
import { useCookies } from "vue3-cookies";
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            hideBanner: true
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    mounted() {
        const cookieIsSet = this.cookies.get("cookiesAccepted")
        this.hideBanner = cookieIsSet
    },
    props: {
        onAccept: {
            type: Function,
            required: true
        }
    },
    methods: {
        onConfirm() {
            this.onAccept()
            this.closeBanner()
        },
        onReject() {
            this.closeBanner()
        },
        closeBanner() {
            this.cookies.set("cookiesAccepted", true, "1y");
            this.hideBanner = true
        }
    }
})
</script>

<style lang="scss" scoped>
.cookie-banner {
    position: fixed;
    bottom: $sp-medium;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: $sp-medium;
    border-radius: 10px;
    box-shadow: $box-shadow;
    width: 95%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $sp-small;

    z-index: 15;

    .cookie-icon-container {
        user-select: none;
        animation: spin 8s linear infinite;

        span {
            font-size: $fs-large;
        }
    }

    p {
        margin: 0px;
        text-align: left;
        font-size: 16px;
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: transform 2s ease-in-out;
}

.slide-down-enter-from {
    transition-delay: 3s;
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translate(-50%, 400px);
}

@media only screen and (min-width: 700px) {
    .cookie-banner {
        flex-direction: row;
    }
}
</style>