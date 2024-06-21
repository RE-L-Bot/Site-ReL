import React from "react";
import TicketCommands from "@/components/br/commands/ticket";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function Ticket() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <TicketCommands />
                    </div>

                </div>

            </main>

        </>
    )
}