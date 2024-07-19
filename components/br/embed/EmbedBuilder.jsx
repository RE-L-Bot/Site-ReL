import {
    DiscordEmbed,
    DiscordMessage,
    DiscordMessages,
    DiscordEmbedDescription,
    DiscordEmbedFooter,
} from "@skyra/discord-components-react"
import FieldsBuilder from "./FieldsBuilder"
import myMD from "@/scripts/myMD"

const EmbedBuilder = ({ embed, ActionRow }) => {

    return (
        <DiscordMessages noBackground>

            <DiscordMessage author="RE=L" bot verified>

                <DiscordEmbed
                    slot="embeds"
                    color={embed.color}
                    embedTitle={embed.title}
                    authorUrl={embed.authorUrl}
                    authorName={embed.authorName}
                    authorImage={embed.authorImage}
                    image={embed.imageUrl}
                    thumbnail={embed.thumbnailUrl}
                    url={(embed.url.indexOf("https://") == 0) ? embed.url : ""}
                >

                    {embed.description.map((value, index) => (
                        <DiscordEmbedDescription key={index} slot="description">
                            {myMD(value)}
                        </DiscordEmbedDescription>
                    ))}

                    <FieldsBuilder fields={embed.fields} />

                    <DiscordEmbedFooter slot="footer" footerImage="https://images-ext-1.discordapp.net/external/3LBc_lYPIjZbMNBSYtx0t-Tch2fMtZLoIcvzIfAVTM0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1018958083764002919/72e160dd9dc0d2952529c3388c81715d.webp?format=webp&width=473&height=473">

                        Powered by RE=L

                    </DiscordEmbedFooter>

                </DiscordEmbed>

            </DiscordMessage>

        </DiscordMessages>
    )

}

export default EmbedBuilder