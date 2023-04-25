import { KannonCli, Recipient } from "kannon.js";
import { env } from "~/env.mjs";
import { Event, EventTicket } from "~/proto/fy/blog/v1/models";
import { resizeCloudinaryImage } from "~/ui/cloudinary-image";
import { getTicketImage } from "~/utils/ticket-image";
import { getUrl } from "~/utils/url";

const conf = {
  apiUrl: env.KANNON_API_URL,
  apiKey: env.KANNON_API_KEY,
  domain: env.KANNON_DOMAIN,
  fromAlias: env.KANNON_FROM_ALIAS,
  fromEmail: env.KANNON_FROM_EMAIL,
};

class Mailer {
  constructor(private readonly mailer: KannonCli) {}

  async sendMail(
    recipients: Recipient[],
    subject: string,
    html: string,
    scheduledTime = new Date()
  ) {
    return this.mailer.sendHtml(recipients, subject, html, scheduledTime);
  }

  async sendMailTemplate(
    recipients: Recipient[],
    subject: string,
    templateId: string,
    scheduledTime = new Date()
  ) {
    return this.mailer.sendTemplate(
      recipients,
      subject,
      templateId,
      scheduledTime
    );
  }

  async sendMembershipRequest(email: string, name: string) {
    await this.sendMailTemplate(
      [
        {
          email: email,
          fields: {
            name: name,
          },
        },
      ],
      "💊 La tua richiesta di diventare socio di FY è stata ricevuta!",
      "template_clbgfmnwi0033018z3zfn3oga@k.farmaceuticayounger.science"
    );
  }

  async sendMembershipApproved(
    email: string,
    name: string,
    paymentUrl: string
  ) {
    await this.sendMailTemplate(
      [
        {
          email: email,
          fields: {
            name: name,
            paymentUrl: paymentUrl,
          },
        },
      ],
      "🎉 La tua richiesta è stata approvata!",
      "template_clbgfna9m0034018z6h5wg985@k.farmaceuticayounger.science"
    );
  }

  async sendMembershipPaymentConfirmed(email: string, name: string) {
    await this.sendMailTemplate(
      [
        {
          email: email,
          fields: {
            name: name,
          },
        },
      ],
      "💊 Ora fai parte di di Farmaceutica Younger!",
      "template_clbgn7oix003d018z6bvv1oth@k.farmaceuticayounger.science"
    );
  }

  async sendEventTicketRegistered(ticket: EventTicket, event: Event) {
    const image = getTicketImage(ticket!, event, true);
    const url =
      getUrl("events", event.slug!, "tickets", ticket!.ticketId, "success") +
      `?token=${ticket!.token}`;

    await this.sendMailTemplate(
      [
        {
          email: ticket!.email,
          fields: {
            name: ticket!.firstName,
            ticketImage: resizeCloudinaryImage(image, 600),
            ticketUrl: url,
            eventName: event.title,
          },
        },
      ],
      "🎫 Ecco il tuo Biglietto per partecipare all'evento di Farmaceutica Younger!",
      "template_cl6nckogj000a01b2l2zktm39@k.farmaceuticayounger.science"
    );
  }
}

const cli = new KannonCli(
  conf.domain,
  conf.apiKey,
  {
    email: conf.fromEmail,
    alias: conf.fromAlias,
  },
  {
    host: conf.apiUrl,
  }
);

export const kannon = new Mailer(cli);
