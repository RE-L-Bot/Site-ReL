import {
    DiscordActionRow,
    DiscordAttachments,
    DiscordButton,
    DiscordCommand,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReply
} from "@skyra/discord-components-react";

export default function () {
    return (
        <DiscordMessages style={{ borderRadius: "5px" }}>

            <DiscordMessage
                profile="RELBOT"
                timestamp="30/08/2024 13:00"
            >
                <DiscordCommand
                    
                    slot="reply"
                    profile="marciel404"
                    command="set_roles_ticket"
                ></DiscordCommand>

                <span>What type will you add?</span>

                <DiscordAttachments slot="components">

                    <DiscordActionRow>

                        <DiscordButton
                            type="primary"
                            onClick={() => { document.getElementById("next-step-ticket").style.display = "block" }}
                        >
                            Attendant
                        </DiscordButton>

                        <DiscordButton
                            type="primary"
                            onClick={() => { document.getElementById("next-step-ticket").style.display = "block" }}
                        >
                            Mentioned
                        </DiscordButton>

                    </DiscordActionRow>

                </DiscordAttachments>

            </DiscordMessage>

            <div id="next-step-ticket" style={{ display: "none" }}>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        What type will you add?
                    </DiscordReply>

                    <span>
                        Send the role IDs one below the other<br />
                        Existing roles will be replaced
                    </span>

                </DiscordMessage>

                <DiscordMessage
                    profile="marciel404"
                    timestamp="30/08/2024 13:00"
                >

                    <span>930883757148364851</span> <br />
                    <span><DiscordMention role>Admin</DiscordMention></span> <br />
                    <span>123</span>

                </DiscordMessage>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        What type will you add?
                    </DiscordReply>

                    <span>123 is not a role</span>

                </DiscordMessage>

                <DiscordMessage
                    profile="RELBOT"
                    timestamp="30/08/2024 13:00"
                    ephemeral
                >

                    <DiscordReply
                        
                        slot="reply"
                        profile="RELBOT"
                        command
                    >
                        What type will you add?
                    </DiscordReply>

                    <span>
                        Roles set successfully
                    </span>

                </DiscordMessage>

            </div>

        </DiscordMessages>

    )
}