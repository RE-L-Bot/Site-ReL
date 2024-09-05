import React from "react";
import EventsCommands from "@/components/br/commands/events";
import GeneralsCommands from "@/components/br/commands/generals";
import ModerationCommands from "@/components/br/commands/moderation";
import RegisterCommands from "@/components/br/commands/registro";
import TicketCommands from "@/components/br/commands/ticket";
import RolePlayCommands from "@/components/br/commands/roleplay";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function All() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Todos os comandos</title>
                <meta name="description" content="Lista de todos os comandos" />
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

        </main>
    )
}