import React from "react";
import RolePlayCommands from "@/components/en/commands/roleplay";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function Roleplay() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Roleplay commands</title>
                <meta name="description" content="List of Roleplay Commands" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <RolePlayCommands />
                </div>

            </div>

        </div>

    )
}