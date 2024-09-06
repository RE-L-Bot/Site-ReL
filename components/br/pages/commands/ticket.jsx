import React from "react";
import TicketCommands from "@/components/br/commands/ticket";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Ticket() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Comandos de ticket</title>
                <meta name="description" content="Lista de comandos de ticket" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <TicketCommands />
                </div>

            </div>

        </div>

    )
}