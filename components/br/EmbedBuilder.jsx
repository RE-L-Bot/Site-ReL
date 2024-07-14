import {
    DiscordEmbed,
    DiscordMessage,
    DiscordMessages,
    DiscordEmbedDescription,
} from "@skyra/discord-components-react"
import FieldsBuilder from "./FieldsBuilder"
import myMD from "@/scripts/myMD"

const EmbedBuilder = ({ embed }) => {

    return (
        <DiscordMessages>

            <DiscordMessage>

                <DiscordEmbed
                    slot="embeds"
                    color={embed.color}
                    embedTitle={embed.title}
                    authorUrl={embed.authorUrl}
                    authorName={embed.authorName}
                    authorImage={embed.authorImage}
                    image={embed.imageUrl}
                    thumbnail={embed.thumbnailUrl}
                >

                    {embed.description.map((value, index) => (
                        <DiscordEmbedDescription key={index} slot="description">
                            {myMD(value)}
                        </DiscordEmbedDescription>
                    ))}

                    <FieldsBuilder fields={embed.fields} />

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )

}

export default EmbedBuilder