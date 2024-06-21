import React from "react";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";
import GeneralsCommands from "../../commands/gerais";

export default function Generals() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <GeneralsCommands />
                    </div>

                </div>

            </main>

        </>
    )
}