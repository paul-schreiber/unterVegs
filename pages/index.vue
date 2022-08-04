<template>
    <div class="welcome-container">
        <h1>Ist das Eis vegan???</h1>
        <section>
            <p>Diese und weitere Fragen halten dich Tag und Nacht wach?</p>
            <p>Mit <i>unterVegs</i> kannst du nach
                veganen Gerichten suchen und wir zeigen dir welcher Shop dein nächstes Ziel wird. Deine Freunde haben schon entschieden?
                Kein Ding, gib einfach den Namen des Shops ein und wir zeigen dir die vegane Auswahl.
            </p>
        </section>
        <ProductSearch />
    </div>
</template>

<style lang="scss">
.welcome-container {
    padding: 0px $sp-medium;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3.5rem;
        margin-bottom: $sp-medium;
    }

    p {
        margin: 0px;
        margin-bottom: $sp-tiny;
    }

    section {
        font-size: $fs-medium;
        margin-bottom: $sp-big;
        max-width: 800px;
    }
}
</style>