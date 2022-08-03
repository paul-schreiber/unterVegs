import { RuntimeConfig } from "@nuxt/schema";
import emailjs, { EmailJSResponseStatus } from "../node_modules/@emailjs/browser";

export class MailService {

    private serviceId: string
    private templateId: string
    private publicKey: string

    constructor(serviceId: string, templateId: string, publicKey: string) {
        this.serviceId = serviceId
        this.templateId = templateId
        this.publicKey = publicKey
    }

    public sendMail(userName: string, email: string, topic: string, message: string): Promise<EmailJSResponseStatus> {
        const templateParams = {
            user: {
                name: userName,
                mail: email,
            },
            topic,
            message,
        };

        return emailjs
            .send(
                this.serviceId,
                this.templateId,
                templateParams,
                this.publicKey
            )
    }


}
