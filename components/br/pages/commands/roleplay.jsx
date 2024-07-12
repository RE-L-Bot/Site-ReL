import React from "react";
import RolePlayCommands from "@/components/br/commands/roleplay";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Roleplay() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos De Roleplay</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <RolePlayCommands />
                </div>

            </div>

        </main>

    )
}