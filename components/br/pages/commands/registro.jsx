import React from "react";
import RegisterCommands from "@/components/br/commands/registro";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function Registro() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <RegisterCommands />
                    </div>

                </div>

            </main>

        </>
    )
}