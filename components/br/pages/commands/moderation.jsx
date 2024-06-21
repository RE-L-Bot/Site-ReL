import React from "react";
import ModerationCommands from "@/components/br/commands/moderacao";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function Moderation() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <ModerationCommands />
                    </div>

                </div>

            </main>

        </>
    )
}