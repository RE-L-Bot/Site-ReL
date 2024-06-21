import React from "react";
import RolePlayCommands from "@/components/br/commands/roleplay";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function Roleplay() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <RolePlayCommands />
                    </div>

                </div>

            </main>

        </>
    )
}