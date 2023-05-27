import { Profile } from "@prisma/client";
import { Event, EventTicket } from "src/proto/fy/blog/v1/models";
import { Telegraf } from "telegraf";
import { bold, fmt, FmtString } from "telegraf/format";
import { getUrl } from "~/utils/url";

export const telegramConfig = {
  token: process.env.TELEGRAM_TOKEN || "",
  chatID: process.env.TELEGRAM_ADMIN_CHAT_ID || "",
};

class TelegramBot {
  private readonly bot: Telegraf;
  constructor(token: string, private readonly adminChat: string) {
    this.bot = new Telegraf(token);
  }

  async sendToAdmin(message: FmtString | string) {
    await this.bot.telegram.sendMessage(telegramConfig.chatID, message);
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

export const bot = new TelegramBot(telegramConfig.token, telegramConfig.chatID);
