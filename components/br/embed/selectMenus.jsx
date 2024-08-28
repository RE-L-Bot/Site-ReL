import { DiscordAttachments, DiscordStringSelectMenu, DiscordStringSelectMenuOption } from "@skyra/discord-components-react";

const SelectMenus = ({ selectmenus }) => {

    return (
        <DiscordAttachments slot="components">

            <DiscordStringSelectMenu placeholder="Selecione uma opção">

                {selectmenus["options"].map((value, index) => (
                    <DiscordStringSelectMenuOption
                    label={`${(value.label) ? value.label : "\u200B"}`}
                    description={`${`${(value.description) ? value.description : ""}`}`}
                    emoji={`${(value.emoji) ? `https://cdn.discordapp.com/emojis/${value.emoji.id}.webp?size=44&quality=lossless` : ""}`}
                    >
                    </DiscordStringSelectMenuOption>
                ))}

            </DiscordStringSelectMenu>

        </DiscordAttachments>
    )
}

export default SelectMenus;