import React from "react";
import EventsCommands from "@/components/br/commands/eventos";
import AsideSelectCommands from "@/components/br/commands/asideSelectCommands";

export default function Events() {
    return (
        <>

            <main>

                <div className="alignItens">

                    <AsideSelectCommands />

                    <div>
                        <EventsCommands />
                    </div>

                </div>

            </main>

        </>

    )
}
