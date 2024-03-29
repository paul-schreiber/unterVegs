<template>
    <div>
        <Slugline title="Kontakt" />
        <div v-if="isLoading">
            Papierflieger werden gefaltet...
            <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" color="#498830"
                background-color="#000" :opacity="0.5" :width="80" :lock-scroll="true" loader="dots" />
        </div>
        <div v-if="isEdited">
            <h1>Schön, dass du uns schreibst!</h1>
            <form novalidate onsubmit="return false">
                <section class="form-section">
                    <UserInputWithCaption caption="Dein Name" isMandatory>
                        <input v-model="userName" aria-placeholder="Wie heißt du?" placeholder="Wie heißt du?"
                            name="name" type="text" @focus="mailError = false" />
                    </UserInputWithCaption>
                </section>
                <section class="form-section">
                    <UserInputWithCaption caption="Deine E-Mail" isMandatory :hasError="mailError">
                        <input v-model="email" aria-placeholder="Wie können wir dich erreichen?"
                            placeholder="Wie können wir dich erreichen?" name="email" type="email"
                            @focus="mailError = false" />
                    </UserInputWithCaption>
                </section>
                <section class="form-section">
                    <UserInputWithCaption caption="Betreff" isMandatory>
                        <input v-model="topic" aria-placeholder="Worum gehts?" placeholder="Worum gehts?" name="name"
                            type="text" @focus="mailError = false" />
                    </UserInputWithCaption>
                </section>
                <section class="form-section">
                    <UserInputWithCaption caption="Deine Nachricht" :isMandatory="false">
                        <textarea v-model="message" aria-placeholder="Schreib los!" placeholder="Schreib los!"
                            name="message"></textarea>
                    </UserInputWithCaption>
                </section>
                <section class="form-section captcha-container">
                    <VueFriendlyCaptcha :sitekey="config.FRIENDLY_CAPTCHA_SITE_KEY" @done="isHuman = true"
                        language="de" />
                </section>
                <div class="action-bar">
                    <ActionButton name="Absenden" aria-label="Absenden" @click="submitForm" :disabled="!formIsFilled"
                        :isPrimary=true />
                </div>
            </form>
        </div>
        <div v-if="hasBeenSent">
            <h1>Danke für deine Nachricht! 💌</h1>
            <div>Wir kümmern uns so schnell wie möglich drum!</div>
            <NuxtLink to="/">
                <ActionButton name="Supi!" tooltip="Link zur Startseite" :isPrimary="true" />
            </NuxtLink>
        </div>
        <div v-if="hasFailed">
            <h1>Da ist wohl was schief gegangen... ☹️</h1>
            <div>Deine Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder kontaktiere uns über <a
                    href="https://www.instagram.com/untervegs_com/" aria-label="Link zu Instagram"><b>Instagram</b></a>.
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>
import UserInputWithCaption from "~~/components/Contact/UserInputWithCaption.vue";
import VueFriendlyCaptcha from '@somushq/vue3-friendly-captcha';
import Loading from 'vue-loading-overlay';
import { MailService } from '../services/MailService'
import { computed, ref } from 'vue'

const route = useRoute()

enum SENDINGSTATUS {
    EDITING = 'EDITING',
    LOADING = 'LOADING',
    SENT = 'SENT',
    FAILED = 'FAILED',
}

const userName = ref("")
const email = ref("")
const message = ref("")
const topic = ref(route.query.topic || "")
const isHuman = ref(false)
const mailError = ref(false)
const sendingStatus = ref(SENDINGSTATUS.EDITING)

const config = useRuntimeConfig();
const MS = new MailService(config.EMAIL_JS_SERVICE_ID, config.EMAIL_JS_TEMPLATE_ID, config.EMAIL_JS_PUBLIC_KEY);

onMounted(() => {
    sendingStatus.value = SENDINGSTATUS.EDITING
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

const formIsFilled = computed((): Boolean => {
    return [email.value, userName.value, topic.value, message.value].every(inputValue => inputValue != "") && isHuman.value;
})
const isMailInputValid = computed((): Boolean => {
    return email.value && validateMail(email.value);
})
const isEdited = computed(() => {
    return sendingStatus.value === SENDINGSTATUS.EDITING
})
const isLoading = computed(() => {
    return sendingStatus.value === SENDINGSTATUS.LOADING
})
const hasBeenSent = computed(() => {
    return sendingStatus.value === SENDINGSTATUS.SENT
})
const hasFailed = computed(() => {
    return sendingStatus.value === SENDINGSTATUS.FAILED
})

const sanitiseText = (value: string) => {
    return value.replace("<", "&lt;").replace(">", "&gt;");
}
const validateMail = (mail) => {
    const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegEx.test(mail);
}
const submitForm = () => {
    if (checkForm()) {
        sendingStatus.value = SENDINGSTATUS.LOADING
        const response = MS.sendMail(userName.value, email.value, topic.value as string, sanitiseText(message.value));
        response.then(
            (result) => {
                sendingStatus.value = SENDINGSTATUS.SENT
                console.log("SUCCESS!", result.text);
            },
            (error) => {
                sendingStatus.value = SENDINGSTATUS.FAILED
                console.log("FAILED...", error.text);
            }
        );
    }
}
const checkForm = () => {
    if (isHuman.value && isMailInputValid.value) {
        return true;
    }
    else {
        mailError.value = true;
        return false;
    }
}

const description = 'Du hast Anmerkungen, einen Fehler gefunden oder möchtest ein neues Produkt in den Katalog von unterVegs aufnehmen? Dann nimm einfach Kontakt mit uns auf!'
useHead({
    title: 'Kontakt',
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
</script>

<style lang="scss" scoped>
a {
    color: $color-font-dark;
    text-decoration: none;
}

.form-section {
    margin-bottom: $sp-medium;
}

.captcha-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: $sp-small;
    height: 30px;
}

.action-bar {
    display: flex;
    justify-content: flex-end;
}

//Override captcha styles (scoped)
.frc-captcha {
    justify-self: right;
    background-color: transparent;
    opacity: 0.75;
    border: none;
    width: fit-content;
    padding-bottom: 0px;
}
</style>

<style lang="scss">
//Override captcha styles (global)
.frc-banner {
    display: none;
}

.frc-container {
    min-height: 0px !important;
}

.frc-icon {
    margin: 0 !important;
    width: 20px;
    height: 20px;
}

.frc-button {
    display: none;
}
</style> 