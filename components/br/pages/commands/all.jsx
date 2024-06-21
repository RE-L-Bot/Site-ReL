import React from "react";
import EventsCommands from "@/components/br/commands/eventos";
import GeneralsCommands from "@/components/br/commands/gerais";
import ModerationCommands from "@/components/br/commands/moderacao";
import RegisterCommands from "@/components/br/commands/registro";
import TicketCommands from "@/components/br/commands/ticket";
import RolePlayCommands from "@/components/br/commands/roleplay";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function All() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <EventsCommands />
                        <GeneralsCommands />
                        <ModerationCommands />
                        <RegisterCommands />
                        <RolePlayCommands />
                        <TicketCommands />
                    </div>

                </div>

            </main>

        </>
    )
}