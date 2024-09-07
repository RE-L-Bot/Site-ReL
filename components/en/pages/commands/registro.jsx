import React from "react";
import RegisterCommands from "@/components/en/commands/registro";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import Head from "next/head";

export default function Registro() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Registry Commands</title>
                <meta name="description" content="List of Registry Commands" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <RegisterCommands />
                </div>

            </div>

        </div>

    )
}