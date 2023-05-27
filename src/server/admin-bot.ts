import { Profile } from "@prisma/client";
import { Telegraf } from "telegraf";
import { bold, fmt, FmtString } from "telegraf/format";
import { env } from "~/env.mjs";
import type { Event, EventTicket } from "~/proto/fy/blog/v1/models";
import { getUrl } from "~/utils/url";

class TelegramBot {
  private readonly bot: Telegraf;
  constructor(token: string, private readonly adminChatId: string) {
    this.bot = new Telegraf(token);
  }

  async sendToAdmin(message: FmtString | string) {
    await this.bot.telegram.sendMessage(this.adminChatId, message);
  }

  async notifyTicketRegistered(event: Event, ticket: EventTicket) {
    await this.sendToAdmin(
      fmt`🎫 Utente ${bold(ticket.email)} registrato all'evento ${event.title}!

  ${getUrl(`/events/${event.slug}/tickets/${ticket!.ticketId}`)}`,
    );
  }

  async notifyUserCreated(user: { email: string }) {
    await this.sendToAdmin(
      fmt`🚀 Nuovo utente ${bold(user.email)} registrato!`,
    );
  }

  async notifyMembershipRequest(profile: Profile) {
    await this.sendToAdmin(
      fmt`🚀 ${bold(profile.firstName + " " + profile.lastName)} ha chiesto di diventare membro di FY! 
      
${getUrl("/dashboard/admin/association/members/" + profile.id)}`,
    );
  }

  async notifyMembershipPaid(profile: Profile) {
    await this.sendToAdmin(
      fmt`💰 ${bold(profile.firstName + " " + profile.lastName)} ha pagato la quota associativa! 
      
${getUrl("/dashboard/admin/association/members/" + profile.id)}`,
    );
  }
}

export const adminbBot = new TelegramBot(
  env.TELEGRAM_BOT_TOKEN,
  env.TELEGRAM_ADMIN_CHAT_ID,
);
