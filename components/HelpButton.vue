<template>
    <div class="help-button">
        <Transition name="slide-right">
            <div class="help-text" v-if="showHelp">
                <h3>So funktionierts:</h3>
                Mit <i>unterVegs</i> kannst du nach veganen Gerichten suchen und wir zeigen dir welcher Shop dein
                nächstes
                Ziel
                wird.
                <p>Deine Freunde haben schon entschieden? Kein Ding, gib einfach den Namen des Shops ein und wir zeigen
                    dir die vegane Auswahl.
                </p>
                <p>
                    VE - steht für vegan<br>
                    VB - steht für veganisierbar - bei diesen Gerichten können Zutaten ersetzt oder weggelassen werden
                </p>
            </div>
        </Transition>
        <button @click="toggleHelp()">
            <span v-if="!showHelp">🤔</span>
            <span v-else>
                <ClientOnly>
                    <font-awesome-icon class="warning-icon" :icon="['fas', 'close']" />
                </ClientOnly>
            </span>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const showHelp = ref(false)
const toggleHelp = () => {
    showHelp.value = !showHelp.value
}
</script>

<style lang="scss" scoped>
.help-button {
    position: fixed;
    bottom: $sp-medium;
    right: $sp-medium;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: $color-font-light;
    text-align: left;
    margin-left: $sp-medium;

    .help-text {
        font-size: $fs-small;
        padding: $sp-medium;
        border-radius: 15px;
        min-height: 200px;
        width: 100%;
        max-width: 350px;
        background-color: $color-primary;
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
        background-color: $color-primary;
        border-radius: 50%;
        box-shadow: $box-shadow;

        user-select: none;
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