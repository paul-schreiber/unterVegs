<template>
    <div class="help-button">
        <div class="help-text" v-if="showHelp">
            <h3>So funktionierts:</h3>
            Mit <i>unterVegs</i> kannst du nach veganen Gerichten suchen und wir zeigen dir welcher Shop dein nächstes
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
        <button @click="toggleHelp">
            <span v-if="!showHelp">🤔</span>
            <span v-else>
                <font-awesome-icon class="warning-icon" :icon="['fas', 'close']" />
            </span>
        </button>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            showHelp: false
        }
    },
    methods: {
        toggleHelp() {
            this.showHelp = !this.showHelp
        }
    }
})
</script>

<style lang="scss">
.help-button {
    position: fixed;
    bottom: $sp-big;
    right: $sp-big;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: $color-font-light;
    text-align: left;

    .help-text {
        font-size: $fs-small;
        padding: $sp-medium;
        border-radius: 15px;
        min-height: 200px;
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
        padding: $sp-tiny;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        all: unset;
        width: 40px;
        height: 40px;
        cursor: pointer;
        background-color: $color-primary;
        border-radius: 50%;
        box-shadow: $box-shadow;

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
}
</style>