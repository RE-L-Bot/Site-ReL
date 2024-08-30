import React from "react";
import RegisterCommands from "@/components/br/commands/registro";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import Head from "next/head";

export default function Registro() {
    return (

        <main>

            <Head>
                <title>RE=L Bot • Comandos de registro</title>
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <RegisterCommands />
                </div>

            </div>

        </main>

    )
}