import React from "react";
import EventsCommands from "@/components/br/commands/events";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Events() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Comandos de evento</title>
                <meta name="description" content="Lista de comandos de evento" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <EventsCommands />
                </div>

            </div>

        </div>

    )
}
