import React from "react";
import EventsCommands from "@/components/en/commands/events";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function Events() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Events commands</title>
                <meta name="description" content="Event Command List" />
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
