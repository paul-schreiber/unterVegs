<template>
    <div class="about-page">
        <header>
            <Slugline title="Die Idee" />
            <h1>Warum unterVegs?</h1>
        </header>
        <section>
            <p>
                In einer fremden Stadt nur Karotten mit Hummus aus dem Supermarkt?
                Mit Freunden im Restaurant und die einzige Option sind Pommes?
                Beim Essen bestellen nur Gemüsepizza ohne Käse?
                Unterwegs nur ein trockenes Brötchen vom Bäcker?
            </p>
            <p>
                Das ist ja sowas von 2021. UnterVegs hilft euch, ganz einfach veganes Essen zu finden, auf das ihr
                wirklich
                Lust habt. Burger, Pizza oder Mexikanisch: wir haben die veganen Produkte aller gängigen Fastfood-,
                Bäckerei- und Restaurantketten zusammengetragen und euch hier zur Verfügung gestellt.
                Weil wir es selbst satt hatten, am Bahnhof nach der besten veganen Option zu suchen und dabei fast den
                Zug
                zu verpassen, wollten wir mit unterVegs genau dieses Problem angehen.
            </p>
            <p>
                Ihr könnt in der Suchleiste
                unkompliziert nach Produkten suchen. So wisst ihr genau, welche Läden vegane Sandwiches oder
                Zimtschnecken verkaufen. Oder ihr sucht einfach direkt nach einer Fastfoodkette, um alle veganen
                Optionen dort angezeigt zu bekommen.
            </p>
        </section>
        <h3>Hier noch ein kleiner Hinweis:</h3>
        <section>
            <p>
                Die Produktangaben auf dieser Website gelten nur für deutsche Filialen der jeweiligen Ketten und auch
                innerdeutsch kann es zu Abweichungen im Sortiment kommen. Die Infos stammen entweder von den einzelnen
                Produktwebseiten der Hersteller oder wurden durch Überprüfung der Allergenlisten zusammengetragen.
            </p>
            <p>
                Wir haben
                uns
                große Mühe gegeben, alles Wichtige zu sammeln und das Sortiment der jeweiligen Ketten so transparent wie
                möglich
                aufzuschlüsseln. Weil es aber natürlich sein kann, dass sich Angaben ändern, wird bei jedem Produkt das
                Datum der letzten Aktualisierung angezeigt. So wisst ihr, wie aktuell die Info ist. Es ist auch möglich,
                dass
                nicht alle Produkte auch in jeder Filiale verfügbar sind oder wir etwas übersehen haben. Wir haben aber
                auf
                jeden Fall unser bestes gegeben und nach bestem Wissen die Daten zusammengetragen.
            </p>
        </section>

    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
const description = 'In einer fremden Stadt nur Karotten mit Hummus aus dem Supermarkt? Mit Freunden im Restaurant und die einzige Option sind Pommes ? Beim Essen bestellen nur Gemüsepizza ohne Käse ? Unterwegs nur ein trockenes Brötchen vom Bäcker? Nichts da! Dafür gibt es jetzt unterVegs!'
useHead({
    title: 'Die Idee',
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
h3 {
    width: fit-content;
    border-bottom: 3px solid $color-secondary;
}

.about-page {
    text-align: left;

    header {
        text-align: center;
    }
}
</style>