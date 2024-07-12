import React from "react";
import TicketCommands from "@/components/br/commands/ticket";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Ticket() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos de Ticket</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <TicketCommands />
                </div>

            </div>

        </main>

    )
}