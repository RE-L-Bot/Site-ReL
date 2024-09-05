import React from "react";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import GeneralsCommands from "../../commands/generals";
import Head from "next/head";

export default function Generals() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos Gerais</title>
                <meta name="description" content="Lista de comandos gerais" />
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