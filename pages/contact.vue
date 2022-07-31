<template>
    <div>
        <h1>Schön, dass du uns schreibst!</h1>
        <form novalidate onsubmit="return false">
            <section class="form-section">
                <UserInputWithCaption caption="Dein Name" isMandatory>
                    <input v-model="userName" aria-placeholder="Wie heißt du?" placeholder="Wie heißt du?" name="name"
                        type="text" @focus="mailError = false" />
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
                    <textarea v-model="message" aria-placeholder="Schreib los!"
                        placeholder="Schreib los!" name="message" />
                </UserInputWithCaption>
            </section>
            <section class="form-section captcha-container">

            </section>
            <div class="action-bar">
                <ActionButton name="Absenden" aria-label="Absenden" :onClick="submitForm" :disabled="!formIsFilled" :isPrimary=true />
            </div>
        </form>
    </div>
</template>


<script>
//import VueFriendlyCaptcha from "@somushq/vue-friendly-captcha";
import { defineComponent } from "vue";
import UserInputWithCaption from "~~/components/Contact/UserInputWithCaption.vue";
export default defineComponent({
    data() {
        return {
            userName: "",
            email: "",
            message: "",
            topic: this.$route.params.topic,
            //siteKey: process.env.friendlyCaptchaKey,
            isHuman: false,
            mailError: false,
        };
    },
    computed: {
        formIsFilled() {
            return this.email != "" && this.isHuman;
        },
        isMailInputValid() {
            return this.email && this.validateMail(this.email);
        },
    },
    methods: {
        sanitiseText(value) {
            return value.replace("<", "&lt;").replace(">", "&gt;");
        },
        validateMail(mail) {
            const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return mailRegEx.test(mail);
        },
        submitForm() {
            if (this.checkForm()) {
                this.sendMail(this.userName, this.email, this.sanitiseText(this.message));
            }
        },
        checkForm() {
            if (this.isHuman && this.isMailInputValid) {
                return true;
            }
            else {
                this.mailError = true;
                return false;
            }
        },
    },
    components: { UserInputWithCaption }
})
</script>

<style lang="scss" scoped>

.form-section {
    margin-bottom: $sp-medium;
}

.captcha-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: $sp-small;
}

.action-bar {
    display: flex;
    justify-content: space-between;
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