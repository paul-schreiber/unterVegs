<template>
    <div class="donate-page">
        <header>
            <Slugline title="Unterstütze uns" />
            <h1>Deine Hilfe wird gebraucht!</h1>
        </header>
        <section class="intro">Ob du selbst Produkte hinzufügst oder aktualisierst, deinen Freunden von unterVegs
            erzählst, etwas
            spendest
            oder uns einfach eine nette Nachricht da lässt - Wir freuen uns auf Feedback und deine Unterstützung!
        </section>
        <div class="section-group">
            <div class="description-section">
                <h2>📣 Shout it out loud!</h2>
                <section>
                    <p>Du findest unterVegs übertrieben praktisch und hast noch sie so ein extrem cooles Projekt
                        gesehen? So
                        geht es
                        uns auch 😎. Leg los und
                        erzähl deinen Freunden, Kollegen und der Oma nebenan davon! Teile es auf <a
                            :href="socialInfo.instagram" aria-label="Link zu Instagram"><b>Instagram</b></a>
                        oder wo auch immer du willst. Dir passt etwas nicht? Dann gib uns
                        Feedback was wir ändern können! </p>
                </section>
                <div class="call-to-action-container">
                    <NuxtLink to="/contact">
                        <ActionButton title="Gib uns dein Feedback!" aria-label="Feedback geben" name="Feedback geben"
                            :isPrimary="true" />
                    </NuxtLink>
                </div>
            </div>
            <div class="description-section">
                <h2>🤜🏼 Mach mit!</h2>
                <section>
                    <p>
                        Du willst selbst mitmachen und fleißig Produkte hinzufügen? Super, denn wir können helfende
                        Hände
                        und
                        wachsame Augen auf dem Sortiment der Restaurants gebrauchen.
                        Aktuell überlegen wir, wie wir Unterstützer am besten einbinden können. Hast du ein Vorschlag
                        oder
                        einfach Lust die Ergebnisse zu erweitern? Dann schreib uns einfach!
                    </p>
                </section>
                <div class="call-to-action-container">
                    <NuxtLink to="/contact">
                        <ActionButton title="Kontaktiere uns!" aria-label="Kontaktiere uns!"
                            name="Werde Teil des Teams!" :isPrimary="true" />
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="description-section">
            <h2>🙏🏼 Sag Danke!</h2>
            <section>
                <p>
                    Falls du keine Zeit hast uns mit Rat und Tat zur Seite zu stehen, ist das nicht schlimm. Wir freuen
                    uns
                    auch
                    wenn du unterVegs einfach regelmäßig nutzt. Wenn du uns noch mehr unterstützen willst und der
                    Meinung
                    bist
                    unsere Arbeit an unterVegs ist eine Spende wert, dann freuen wir uns über jeden Betrag. Wir möchten
                    unterVegs frei von Werbung oder Affiliate-Links halten, weshalb wir aktuell alle Kosten selbst
                    tragen.
                    Mit
                    deiner Spende gibst du uns die Möglichkeit, die Domain weiterhin zu finanzieren und Zeit in das
                    Projekt
                    zu
                    investieren. Wir sagen schon mal Danke! ☺️
                </p>
            </section>
            <div>
                <DonationForm />
            </div>
        </div>
    </div>
</template>

<script>
import content from '../data/content'
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            socialInfo: content.social,
        }
    },
    setup() {
        const description = 'Du möchstest unterVegs unterstützen? Dafür gibt es viele Möglichkeiten:'
        useHead({
            title: 'Unterstütze uns!',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: description
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: description
                }
            ]
        })
    },
    mounted() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
})
</script>

<style lang="scss" scoped>
a {
    color: $color-font-dark;
    text-decoration: none;
}

h2 {
    width: fit-content;
    margin: $sp-small 0px;
    text-align: left;
}

.donate-page {
    text-align: justify;

    header {
        text-align: center;
    }

    .intro {
        margin-bottom: $sp-large;
    }

    .section-group {
        display: flex;
        gap: $sp-large;
        flex-wrap: wrap;
        justify-content: space-between;

        .description-section {
            flex: 1 0 45%
        }
    }

    .description-section {
        margin-bottom: $sp-huge;

        .call-to-action-container {
            display: flex;
            justify-content: center;
        }
    }
}
</style>