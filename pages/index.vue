<template>
    <div class="welcome-container">
        <h1>{{ randomMessage }}</h1>
        <section>
            <p>Diese Frage hält dich Tag und Nacht wach? Dann haben wir was für dich:</p>
        </section>
        <ProductSearch />
        <section class="explanation">
            <p>Mit <i>unterVegs</i> kannst du nach
                veganen Gerichten suchen und wir zeigen dir welcher Shop dein nächstes Ziel wird. Deine Freunde haben
                schon entschieden?
                Kein Ding, gib einfach den Namen des Shops ein und wir zeigen dir die vegane Auswahl.
            </p>
        </section>
        <HelpButton />
    </div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            welcomeMessages: ['Ist das Eis vegan?', 'Wo gibts vegane Nuggets?', 'Hat BK nur Pommes?']
        }
    },
    setup () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    },
    computed: {
        randomMessage() {
            const randomIndex = Math.floor(Math.random() * this.welcomeMessages.length)
            const message = this.welcomeMessages[randomIndex]
            return `${message}`

        }
    }
})
</script>

<style lang="scss" scoped>
.welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3.5rem;
        margin-bottom: $sp-medium;
        line-height: 3.4rem;
    }

    p {
        margin: 0px;
        margin-bottom: $sp-tiny;
    }

    section {
        font-size: $fs-medium;
        max-width: 800px;
    }

    .explanation {
        display: none;
    }
}
</style>