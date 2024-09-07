import React from "react";
import EventsCommands from "@/components/en/commands/events";
import GeneralsCommands from "@/components/en/commands/generals";
import ModerationCommands from "@/components/en/commands/moderation";
import RegisterCommands from "@/components/en/commands/registro";
import TicketCommands from "@/components/en/commands/ticket";
import RolePlayCommands from "@/components/en/commands/roleplay";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function All() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • All commands</title>
                <meta name="description" content="List all commands" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <EventsCommands />
                    <GeneralsCommands />
                    <ModerationCommands />
                    <RegisterCommands />
                    <RolePlayCommands />
                    <TicketCommands />
                </div>

            </div>

        </div>
    )
}