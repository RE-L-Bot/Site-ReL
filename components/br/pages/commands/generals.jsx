import React from "react";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import GeneralsCommands from "../../commands/gerais";
import Head from "next/head";

export default function Generals() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos Gerais</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <GeneralsCommands />
                </div>

            </div>

        </main>

    )
}