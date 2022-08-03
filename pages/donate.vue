<template>
    <div class="donate-page">
        <h1>Deine Hilfe wird gebraucht!</h1>
        <section>Ob du selbst Produkte hinzufügst oder aktualisierst, deinen Freunden von unterVegs erzählst, etwas spendest
            oder uns einfach eine nette Nachricht da lässt - Wir freuen uns auf Feedback und deine Unterstützung!</section>
        <h2>📣 Shout it out loud!</h2>
        <section class="description-section">
            <p>Du findest unterVegs übertrieben praktisch und hast noch sie so ein extrem cooles Projekt gesehen? So geht es
                uns auch 😎. Leg los und
                erzähl deinen Freunden, Kollegen und der Oma nebenan davon! Teile es auf <a
                    href="https://www.instagram.com/untervegs_com/" aria-label="Link zu Instagram"><b>Instagram</b></a> oder wo auch immer du willst. Dir passt etwas nicht? Dann gib uns
                Feedback was wir ändern können! </p>
            <NuxtLink to="/contact">
                <ActionButton title="Gib uns dein Feedback!" aria-label="Feedback geben" name="Feedback geben"
                    :isPrimary="true" />
            </NuxtLink>
        </section>
        <h2>🤜🏼 Mach mit!</h2>
        <section class="description-section">
            <p>
                Du willst selbst mitmachen und fleißig Produkte hinzufügen? Super, denn wir können helfende Hände und
                wachsame Augen auf dem Sortiment der Restaurants gebrauchen.
                Aktuell überlegen wir, wie wir Unterstützer am besten einbinden können. Hast du ein Vorschlag
                oder
                einfach Lust die Ergebnisse zu erweitern? Dann schreib uns einfach!
            </p>
            <NuxtLink to="/contact">
                <ActionButton title="Kontaktiere uns!" aria-label="Kontaktiere uns!" name="Werde ein unterVegs-Hero!"
                    :isPrimary="true" />
            </NuxtLink>
        </section>
        <h2>🙏🏼 Sag Danke!</h2>
        <section class="description-section">
            <p>
                Falls du keine Zeit hast uns mit Rat und Tat zur Seite zu stehen, ist das nicht schlimm. Wir freuen uns
                auch
                wenn du unterVegs einfach regelmäßig nutzt. Wenn du uns noch mehr unterstützen willst und der Meinung
                bist
                unsere Arbeit an unterVegs ist eine Spende wert, dann freuen wir uns über jeden Betrag. Wir möchten
                unterVegs frei von Werbung oder Affiliate-Links halten, weshalb wir aktuell alle Kosten selbst tragen.
                Mit
                deiner Spende gibst du uns die Möglichkeit, die Domain weiterhin zu finanzieren und Zeit in das Projekt
                zu
                investieren. Wir sagen schon mal Danke! ☺️
            </p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
a {
    color: $color-font-dark;
    text-decoration: none;
}


h1 {
    width: fit-content;
    border-bottom: 6px solid $color-secondary;
}

h2 {
    width: fit-content;
    margin: $sp-small 0px;
}



.donate-page {
    text-align: left;

    .description-section {
        margin-bottom: $sp-huge;
    }
}
</style>