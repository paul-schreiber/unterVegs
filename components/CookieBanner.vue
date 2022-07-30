<template>
    <div class="cookie-banner" v-if="!hideBanner">
        <div class="cookie-icon-container"><span>🍪</span> </div>
        <div>
            <p>Wir nutzen <b>Cookies</b> um die Website stetig zu verbessern und deinen Besuch
                nutzerfreundlicher zu
                gestalten. Wie genau das funktioniert erfährst du in unserer <NuxtLink to="privacy">Datenschutzerklärung
                </NuxtLink>.</p>
        </div>
        <ActionButton name="Gib mir 🍪🍪🍪!" :isPrimary="true" tooltip="Cookies akzeptieren" :onClick="onConfirm" />
    </div>
</template>

<script lang="ts">
import { useCookies } from "vue3-cookies";
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            hideBanner: this.cookies.get("cookiesAccepted")
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies };
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
            this.cookies.set("cookiesAccepted", true);
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

    .cookie-icon-container {
        span {
            font-size: $fs-large;
        }
    }

    p {
        margin: 0px;
        text-align: left;
    }
}

@media only screen and (min-width: 700px) {
    .cookie-banner {
        flex-direction: row;
    }
}
</style>