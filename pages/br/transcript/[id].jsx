import { toHTML } from "@odiffey/discord-markdown"
import FieldsBuilder from "@/components/br/embed/FieldsBuilder";
import { flagsUser } from "@/scripts/calculate";
import {
    DiscordAttachments,
    DiscordEmbed,
    DiscordEmbedDescription,
    DiscordEmbedFooter,
    DiscordMessage,
    DiscordMessages,
    DiscordCommand,
    DiscordReply,
    DiscordReactions,
    DiscordReaction,
} from "@skyra/discord-components-react";
import { contructAttachments, contructComponents, contructorTimestamp} from "@/scripts/constructs"
import { useState } from "react";

const headerInformations = {
    staffInChannel: [
        {

        }
    ],
    membersInChannel: [
        {

        }
    ],
    membersMentionedsInChannel: [
        {

        }
    ]
}

const typeCommands = {
    1: "slash_command",
    2: "user_command",
    3: "message_command"
}

export default function () {
    const [messages, setMessages] = useState([""])
    return (
        <main>
            <header>
                Teste
                <input type="text" name="r" id="" onInput={(e) => setMessages(JSON.parse(e.target.value))}/>
            </header>
            <DiscordMessages>
                {messages.map((valueM, indexM) => (
                    <DiscordMessage
                        id={`${valueM.id}`}
                        key={`m-${valueM?.id}`}
                        author={valueM?.author?.username}
                        avatar={`https://cdn.discordapp.com/avatars/${valueM?.author?.id}/${valueM?.author?.avatar}.webp?size=2048`}
                        bot={valueM.author?.bot}
                        verified={flagsUser(valueM?.author?.public_flags).includes("VERIFIED_BOT")}
                        timestamp={`${contructorTimestamp(valueM?.timestamp)}`}
                    >
                        <DiscordReactions slot="reactions">
                            {valueM?.reactions?.map((valueR, index) => (
                                <DiscordReaction
                                    emoji={(valueR?.emoji?.id) ? `https://cdn.discordapp.com/emojis/${valueR.emoji?.id}.webp?size=44&quality=lossless` : valueR?.emoji?.name}
                                    count={valueR.count}
                                >
                                </DiscordReaction>
                            ))}
                        </DiscordReactions>
                        {valueM?.interaction_metadata?.command_type ?
                            <DiscordCommand
                                slot="reply"
                                type={
                                    typeCommands[valueM?.interaction_metadata?.command_type]
                                }
                                contextUserName={
                                    valueM?.interaction_metadata?.target_user?.username ??
                                    (messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.author?.username
                                }
                                contextUserAvatar={
                                    valueM?.interaction_metadata?.target_user ?
                                        `https://cdn.discordapp.com/avatars/${valueM?.interaction_metadata?.target_user?.id}/${valueM?.interaction_metadata?.target_user?.avatar}.webp?size=2048` :
                                        `https://cdn.discordapp.com/avatars/${(messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.author?.id}/${(messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.author?.avatar}.webp?size=2048`
                                }
                                contextUserBot={(messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.author?.bot}
                                contextUserBotVerified={flagsUser((messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.author?.public_flags).includes("VERIFIED_BOT")}
                                contextMessageReply={(messages.filter((x) => x.id === valueM?.interaction_metadata?.target_message_id))[0]?.content.slice(0, 100)}
                                contextMessageDeleted={valueM?.interaction_metadata?.context?.messageReplyDeleted}
                                author={valueM?.interaction_metadata?.user?.username}
                                avatar={`https://cdn.discordapp.com/avatars/${valueM?.interaction_metadata?.user?.id}/${valueM?.interaction_metadata?.user?.avatar}.webp?size=2048`}
                                command={valueM?.interaction_metadata?.name}>
                            </DiscordCommand> : ""
                        }
                        {
                            valueM?.referenced_message && !valueM?.interaction_metadata?.command_type ?
                                <DiscordReply
                                    slot="reply"
                                    author={valueM?.referenced_message?.author?.username}
                                    avatar={`https://cdn.discordapp.com/avatars/${valueM?.referenced_message?.author?.id}/${valueM?.referenced_message?.author?.avatar}.webp?size=2048`}
                                    bot={valueM?.referenced_message?.author?.bot ?? false}
                                    verified={flagsUser(valueM?.referenced_message?.author?.public_flags).includes("VERIFIED_BOT")}
                                    attachment={valueM?.referenced_message?.attachments.length > 0 ? true : false}
                                    command={valueM?.referenced_message?.command ?? false}
                                    onClick={() => document.getElementById(valueM?.referenced_message.id).scrollIntoView()}
                                >
                                    <div className="divreply" dangerouslySetInnerHTML={{ __html: toHTML(valueM?.referenced_message?.content.slice(0, 100)) }}></div>
                                </DiscordReply> : ""
                        }
                        {valueM?.content?.length > 0 ? <div dangerouslySetInnerHTML={{ __html: toHTML(valueM?.content) }}></div> : ""}
                        {valueM?.embeds?.map((valueEmbed, indexEmbed) => (
                            <DiscordEmbed
                                key={`embed-${valueM?.message_id}-${indexEmbed}`}
                                slot="embeds"
                                embedTitle={valueEmbed?.title ?? ""}
                                color={valueEmbed?.color ? `#${valueEmbed?.color?.toString(16)}` : ""}
                                thumbnail={valueEmbed?.thumbnail ?? ""}
                                image={valueEmbed?.image?.url ?? ""}
                                authorImage={valueEmbed?.author?.image ?? ""}
                                authorName={valueEmbed?.author?.name}
                                authorUrl={valueEmbed?.author?.url ?? ""}
                                video={valueEmbed?.video ?? ""}
                            >

                                <DiscordEmbedDescription slot="description" dangerouslySetInnerHTML={{ __html: toHTML((valueEmbed?.description) ?? "") }}>
                                </DiscordEmbedDescription>

                                <FieldsBuilder fields={valueEmbed?.fields} />

                                <DiscordEmbedFooter
                                    slot="footer"
                                    footerImage={valueEmbed?.footer?.icon_url ?? ""}
                                    timestamp={valueEmbed?.timestamp ? `${contructorTimestamp(valueEmbed?.timestamp)}` : ""}
                                >
                                    {valueEmbed?.footer?.text ?? ""}
                                </DiscordEmbedFooter>

                            </DiscordEmbed>
                        ))}
                        <DiscordAttachments slot="attachments">
                            <div dangerouslySetInnerHTML={{ __html: contructAttachments(valueM?.attachments ?? []) }}></div>
                        </DiscordAttachments>
                        <DiscordAttachments slot="components">
                            <div dangerouslySetInnerHTML={{ __html: contructComponents(valueM?.components ?? []) }}></div>
                        </DiscordAttachments>
                    </DiscordMessage>
                ))}
            </DiscordMessages>
        </main>
    )
}


