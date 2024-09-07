import React from "react";
import TicketCommands from "@/components/en/commands/ticket";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function Ticket() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Ticket commands</title>
                <meta name="description" content="List of ticket Commands" />
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