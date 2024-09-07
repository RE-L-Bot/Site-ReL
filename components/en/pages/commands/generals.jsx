import React from "react";
import AsideSelectCommands from "@/components/en/commands/asideSelectCommands";
import GeneralsCommands from "../../commands/generals";
import Head from "next/head";

export default function Generals() {
    return (

        <div>

            <Head>
                <title>RE=L Bot • Generals commands</title>
                <meta name="description" content="List of general commands" />
            </Head>

            <div className="alignItens">

                <AsideSelectCommands />

                <div>
                    <GeneralsCommands />
                </div>

            </div>

        </div>

    )
}