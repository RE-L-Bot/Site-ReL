import { generateRandomString } from "@/scripts/enc";
import { calculateInlineIndex } from "@/scripts/outhers";
import { toHTML } from "@odiffey/discord-markdown";
import {
    DiscordEmbedField,
    DiscordEmbedFields
} from "@skyra/discord-components-react";

const FieldsBuilder = ({ fields }) => {

    const fieldArray = []
    let p = []

    for (const i in fields) {

        const fieldName = fields[i]["name"]
        const fieldValue = fields[i]["value"]
        const fieldInline = fields[i]["inline"]

        p.push(
            <DiscordEmbedField key={`${fieldName}-${fieldValue}`} fieldTitle={fieldName} inline={fieldInline} inlineIndex={calculateInlineIndex(fields, Number(i))}>
                <div className="fieldValueEmbed" dangerouslySetInnerHTML={{ __html: toHTML(fieldValue) }}></div>
            </DiscordEmbedField>
        )

        if (p.length === 3) {

            fieldArray.push(
                <DiscordEmbedFields key={i} slot="fields">
                    {p}
                </DiscordEmbedFields>
            )

            p = []

        }

    }

    if (p.length > 0) {
        fieldArray.push(
            <DiscordEmbedFields key={generateRandomString(10)} slot="fields">
                {p}
            </DiscordEmbedFields>
        )
    }

    return fieldArray

}

export default FieldsBuilder