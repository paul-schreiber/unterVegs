<template>
    <div class="legal-container">
        <h2>Impressum</h2>
        <div>
            <h3>Angaben gemäß § 5 TMG:</h3>
            <section>
                <address class="contact-data">
                    <div>{{ address.name }}</div>
                    <div>
                        {{ address.street }}
                    </div>
                    <div>{{ address.zipCode }} {{ address.city }}</div>

                    <div class="mt-s">
                        <a :href="`mailto:${mail}`">{{ mail }}</a>
                    </div>
                </address>
            </section>
            <h3>Haftung für Inhalte</h3>

            <section>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
            </section>

            <h3>Haftung für Links</h3>
            <section>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
            </section>

            <h3>Urheberrecht</h3>
            <section>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
            </section>
        </div>
    </div>

</template>

<script lang="ts" setup>
import content from "../data/content";

const address = content.address
const mail = content.mail
const description = 'Impressum von unterVegs'
useHead({
    title: 'Impressum',
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

onMounted(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
</script>

<style lang="scss" scoped>
.legal-container {
    text-align: left;

    section {
        font-weight: $fw-light;
        line-height: 1.6rem;
        margin-bottom: $sp-large;
    }

    a {
        color: $color-font-dark;
    }
}
</style>