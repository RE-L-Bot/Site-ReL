import { ChangeTipeCommand } from "@/scripts/changes";
import { CheckTipeCommand } from "@/scripts/checks";
import Link from "next/link";

export default function AsideSelectCommands() {

    CheckTipeCommand();

    return (
        <div className="AsideSelectCommands">

            <div>

                <h2 className="Top">
                    My command list
                </h2>

                <Link href="/en/commands/all" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand backGroundBlue" id="all">
                        All commands
                    </p>
                </Link>

                <Link href="/en/commands/event" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="event">
                        Event Commands
                    </p>
                </Link>

                <Link href="/en/commands/generals" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="generals">
                        General Commands
                    </p>
                </Link>

                <Link href="/en/commands/moderation" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="moderation">
                        Moderation Commands
                    </p>
                </Link>

                <Link href="/en/commands/registro" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="registro">
                        Register Commands
                    </p>
                </Link>

                <Link href="/en/commands/roleplay" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="roleplay">
                        Roleplay Commands
                    </p>
                </Link>

                <Link href="/en/commands/ticket" style={{ textDecoration: "none", color: "inherit" }}>
                    <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="ticket">
                        Ticket Commands
                    </p>
                </Link>

            </div>

        </div>
    );
}
