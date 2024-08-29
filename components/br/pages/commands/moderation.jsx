import React from "react";
import ModerationCommands from "@/components/br/commands/moderation";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Moderation() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos de moderação</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <ModerationCommands />
                </div>

            </div>

        </main>
    )
}