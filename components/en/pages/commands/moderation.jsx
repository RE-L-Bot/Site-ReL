import React from "react";
import ModerationCommands from "@/components/en/commands/moderation";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function Moderation() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Moderation commands</title>
                <meta name="description" content="List of moderation commands" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <ModerationCommands />
                </div>

            </div>

        </div>
    )
}