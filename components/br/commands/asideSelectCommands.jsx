import { ChangeTipeCommand } from "@/scripts/changes"
import { CheckTipeCommand } from "@/scripts/checks"
import Link from "next/link"

export default function AsideSelectCommands() {
    CheckTipeCommand()
    return (
        <>

            <main className="AsideSelectCommands">

                <div>

                    <h2 className="Top">
                        Minha lista de comandos
                    </h2>

                    <Link href="/br/commands/all" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand backGroundBlue" id="all">
                            Todos os comandos
                        </p>
                    </Link>

                    <Link href="/br/commands/event" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="event">
                            Comandos de Evento
                        </p>
                    </Link>

                    <Link href="/br/commands/generals" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="generals">
                            Comandos Gerais
                        </p>
                    </Link>

                    <Link href="/br/commands/moderation" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="moderation">
                            Comandos de Moderação
                        </p>
                    </Link>

                    <Link href="/br/commands/registro" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="registro">
                            Comandos de Registro
                        </p>
                    </Link>

                    <Link href="/br/commands/roleplay" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="roleplay">
                            Comandos de Roleplay
                        </p>
                    </Link>

                    <Link href="/br/commands/ticket" style={{ textDecoration: "none", color: "inherit" }}>
                        <p onClick={ChangeTipeCommand} className="SelectTipeCommand" id="ticket">
                            Comandos de Ticket
                        </p>
                    </Link>

                </div>

            </main>
        </>
    )
}