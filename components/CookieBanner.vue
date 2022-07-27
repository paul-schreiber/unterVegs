<template>
    <div class="cookie-banner" v-if="!hideBanner">
        <div>
            <p><span>🍪</span> Wir nutzen <b>Cookies</b> um die Website stetig zu verbessern und deinen Besuch nutzerfreundlicher zu
                gestalten. Wie genau das funktioniert erfährst du in unserer <NuxtLink to="privacy">Datenschutzerklärung</NuxtLink>. Bist du mit den Cookies einverstanden?</p>
        </div>
        <Button name="Ja, ich will 🍪!" :isPrimary="true" tooltip="Cookies akzeptieren" :onClick="onConfirm" />
        <Button name="Nein!" :isPrimary="false"  tooltip="Cookies ablehnen" :onClick="onReject" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            hideBanner: false
        }
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
            this.hideBanner = true
        }
    }
})
</script>

<style lang="scss" scoped>
.cookie-banner {
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: $sp-medium;
    border-radius: 10px;
    box-shadow: $box-shadow;
    width: 95%;
    max-width: 800px;

    p {
        margin: 0px;
        text-align: left;

        span {
            font-size: $fs-large;
        }
    }
}
</style>