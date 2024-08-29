import React from "react";
import EventsCommands from "@/components/br/commands/events";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Events() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos De Evento</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <EventsCommands />
                </div>

            </div>

        </main>

    )
}
