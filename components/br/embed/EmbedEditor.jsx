import { useState } from "react"
import { changeDisplay, changeDisplayField, ChangeEnabled } from "@/scripts/changes";
import ToogleOff from "@/components/globals/toogleOff";

const EmbedEditor = ({ onEmbedChange }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState([])
    const [authorName, setAuthorName] = useState("")
    const [authorUrl, setAuthorUrl] = useState("")
    const [authorImage, setAuthorImage] = useState("")
    const [fields, setFields] = useState([])
    const [imageUrl, setImageUrl] = useState("")
    const [color, setColor] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [url, setUrl] = useState("")

    const handleFieldChangeFild = (field, value) => {

        const updatedEmbed = {
            title,
            description,
            authorName,
            authorUrl,
            authorImage,
            imageUrl,
            thumbnailUrl,
            color,
            url,
            fields,
            [field]: value,
        };

        switch (field) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'authorName':
                setAuthorName(value);
                break;
            case 'authorUrl':
                if (value.indexOf("https://") == 0)
                    setAuthorUrl(value);
                break;
            case 'authorImage':
                setAuthorImage(value);
                break;
            case 'imageUrl':
                if (value.indexOf("https://") == 0)
                    setImageUrl(value);
                break;
            case 'thumbnailUrl':
                if (value.indexOf("https://") == 0)
                    setThumbnailUrl(value);
                break;
            case 'color':
                setColor(value);
                break;
            case "url":
                if (value.indexOf("https://") == 0)
                    setUrl(value)
                break
            default:
                break;
        }

        onEmbedChange(updatedEmbed);

    };

    const handlerFieldsAdd = () => {
        if (fields.length < 25)
            setFields([...fields, { name: "", value: "", inline: false }])
    }

    const handleFieldNameChange = (index, name) => {
        const newFields = fields.slice();
        newFields[index].name = name;
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, url, fields: newFields });
    };

    const handleFieldValueChange = (index, name) => {
        const newFields = fields.slice();
        newFields[index].value = name;
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, url, fields: newFields });

    };

    const handleFieldInlineChange = (index, inline) => {
        const newFields = fields.slice();
        newFields[index].inline = inline;
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, url, fields: newFields });
    };

    const handleRemoveField = (index) => {
        const newFields = fields.slice();
        newFields.splice(index, 1);
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, url, fields: newFields });

    };

    return (
        <div className="LineFormEmbed">

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <div style={{ width: "100%" }}>

                    <div id="expandDivAuthor" style={{ width: "80%", padding: "10px" }} className="contentCommand" onClick={(e) => changeDisplay(e, "Author", "block")}>

                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                            <i id="expandAuthor" className="material-symbols-outlined transitionShowCommands expand">
                                chevron_right
                            </i>

                            <h4>
                                Autor
                            </h4>

                        </div>

                    </div>

                    <div
                        id="expandEmbedAuthor"
                        style={{
                            width: "80%",
                            padding: "10px",
                            display: "none",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px"
                        }}
                        className="contentEmbedEditor"
                    >
                        <div id="contentAuthor">

                            <div style={{ padding: "10px" }}>

                                <h5>Nome do author {authorName.length}/256</h5>

                                <textarea
                                    title="authorName"
                                    maxLength={256}
                                    onChange={e => handleFieldChangeFild("authorName", e.target.value)}
                                    style={{
                                        resize: "vertical",
                                        width: "100%",
                                        height: "35px",
                                        minHeight: "35px",
                                        borderRadius: "5px"
                                    }}
                                    className="textAreaeEmbed"
                                />

                            </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch", gap: "5px" }}>

                                <div style={{ padding: "10px", width: "50%" }}>

                                    <h5>Imagem do Autor</h5>

                                    <textarea
                                        title="authorName"
                                        maxLength={256}
                                        onChange={e => handleFieldChangeFild("authorImage", e.target.value)}
                                        style={{
                                            resize: "none",
                                            width: "100%",
                                            height: "35px",
                                            minHeight: "35px",
                                            borderRadius: "5px"
                                        }}
                                        className="textAreaeEmbed"
                                    />

                                </div>

                                <div style={{ padding: "10px", width: "50%" }}>

                                    <h5>Redirecionamento do author</h5>

                                    <textarea
                                        title="authorName"
                                        maxLength={256}
                                        onChange={e => handleFieldChangeFild("authorUrl", e.target.value)}
                                        style={{
                                            resize: "none",
                                            width: "100%",
                                            height: "35px",
                                            minHeight: "35px",
                                            borderRadius: "5px"
                                        }}
                                        className="textAreaeEmbed"
                                    />

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <div style={{ width: "100%" }}>

                    <div id="expandDivBody" style={{ width: "80%", padding: "10px" }} className="contentCommand" onClick={(e) => changeDisplay(e, "Body", "block")}>

                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                            <i id="expandBody" className="material-symbols-outlined transitionShowCommands expand">
                                chevron_right
                            </i>

                            <h4>
                                Corpo
                            </h4>

                        </div>

                    </div>

                    <div
                        id="expandEmbedBody"
                        style={{
                            width: "80%",
                            padding: "10px",
                            display: "none",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px"
                        }}
                        className="contentEmbedEditor"
                    >
                        <div id="contentBody">

                            <div style={{ padding: "10px" }}>

                                <h5>Titulo {title.length}/256</h5>

                                <textarea
                                    title="tileEmbed"
                                    maxLength={256}
                                    onChange={e => handleFieldChangeFild("title", e.target.value)}
                                    style={{
                                        resize: "vertical",
                                        width: "100%",
                                        height: "35px",
                                        minHeight: "35px",
                                        borderRadius: "5px"
                                    }}
                                    className="textAreaeEmbed"
                                />

                            </div>

                            <div style={{ padding: "10px" }}>

                                <h5>Descrição {(description[0]) ? description[0].length : "0"}/4096</h5>

                                <textarea
                                    title="descriptionEmbed"
                                    maxLength={4096}
                                    onChange={e => handleFieldChangeFild("description", [e.target.value])}
                                    style={{
                                        resize: "vertical",
                                        width: "100%",
                                        height: "60px",
                                        minHeight: "60px",
                                        borderRadius: "5px"
                                    }}
                                    className="textAreaeEmbed"
                                />

                            </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch", gap: "5px" }}>

                                <div style={{ padding: "10px", width: "50%" }}>

                                    <h5>Url do titulo</h5>

                                    <input
                                        type="url"
                                        title="urlEmbed"
                                        maxLength={256}
                                        onChange={e => handleFieldChangeFild("url", e.target.value)}
                                        style={{
                                            resize: "none",
                                            width: "100%",
                                            height: "35px",
                                            minHeight: "35px",
                                            borderRadius: "5px"
                                        }}
                                        className="textAreaeEmbed"
                                    />

                                </div>

                                <div style={{ padding: "10px", width: "50%" }}>

                                    <h5>Cor</h5>

                                    <input
                                        type="color"
                                        name="ColorEmbed"
                                        className="ColorEmbed"
                                        style={{
                                            height: "41px",
                                            minHeight: "41px",
                                            width: "100%",
                                            borderRadius: "5px",
                                        }}
                                        onChange={e => handleFieldChangeFild("color", e.target.value)}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <div style={{ width: "100%" }}>

                    <div id="expandDivCampos" style={{ width: "80%", padding: "10px" }} className="contentCommand" onClick={(e) => changeDisplay(e, "Campos", "block")}>

                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                            <i id="expandCampos" className="material-symbols-outlined transitionShowCommands expand">
                                chevron_right
                            </i>

                            <h4>
                                Campos
                            </h4>

                        </div>

                    </div>

                    <div
                        id="expandEmbedCampos"
                        style={{
                            width: "80%",
                            padding: "10px",
                            display: "none",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px"
                        }}
                        className="contentEmbedEditor"
                    >
                        <div id="contentCampos">

                            <div>

                                <button className="styleButton" style={{ borderRadius: "5px" }} type="button" onClick={handlerFieldsAdd}>
                                    Adicionar Campo
                                </button>

                                {fields.map((value, index) => (
                                    <div key={index}>

                                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                                            <div style={{ width: "100%" }}>

                                                <div id={`expandDivCampo${index}`} style={{ width: "100%", padding: "10px", alignItems: "center" }} className="contentCommand">

                                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={(e) => changeDisplayField(e, `${index}`, "block")}>

                                                        <i id={`expandCampo${index}`} className="material-symbols-outlined transitionShowCommands expand">
                                                            chevron_right
                                                        </i>

                                                        <h4>
                                                            Campo {index + 1}
                                                        </h4>

                                                    </div>

                                                    <label
                                                        style={{
                                                            background: "none",
                                                            padding: "none",
                                                            margin: "none",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "20px",
                                                        }} >

                                                        <input
                                                            type="checkbox"
                                                            checked={value.inline}
                                                            onChange={(e) => { handleFieldInlineChange(index, e.target.checked) }}
                                                        />

                                                        <div>

                                                            <h4>Alinhado</h4>

                                                        </div>

                                                    </label>

                                                    <button style={{ borderRadius: "5px" }} className="styleButton" onClick={e => handleRemoveField(index)}>Remover Field</button>

                                                </div>

                                                <div
                                                    id={`expandCampoInto${index}`}
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px",
                                                        display: "none",
                                                        borderTopLeftRadius: "0px",
                                                        borderTopRightRadius: "0px"
                                                    }}
                                                    className="contentEmbedEditor"
                                                >
                                                    <div id={`contentCampo${index}`}>

                                                        <h4>Nome {fields[index].name.length}/256</h4>
                                                        <textarea
                                                            type="text"
                                                            style={{
                                                                width: "100%", height: "35px",
                                                                minHeight: "35px", borderRadius: "5px", resize: "vertical"
                                                            }}
                                                            maxLength={256}
                                                            onChange={e => handleFieldNameChange(index, e.target.value)}
                                                        />

                                                        <h4>Valor {fields[index].value.length}/1024</h4>
                                                        <textarea type="text" style={{
                                                            width: "100%", height: "60px",
                                                            minHeight: "60px", borderRadius: "5px", resize: "vertical"
                                                        }} maxLength={1024} onChange={e => handleFieldValueChange(index, e.target.value)} />

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <div style={{ width: "100%" }}>

                    <div id="expandDivImages" style={{ width: "80%", padding: "10px" }} className="contentCommand" onClick={(e) => changeDisplay(e, "Images", "block")}>

                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                            <i id="expandImages" className="material-symbols-outlined transitionShowCommands expand">
                                chevron_right
                            </i>

                            <h4>
                                Imagens
                            </h4>

                        </div>

                    </div>

                    <div
                        id="expandEmbedImages"
                        style={{
                            width: "80%",
                            padding: "10px",
                            display: "none",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px"
                        }}
                        className="contentEmbedEditor"
                    >
                        <div id="contentImages">

                            <h5>Imagem (URL)</h5>

                            <textarea
                                title="imageUrl"
                                onChange={e => handleFieldChangeFild("imageUrl", e.target.value)}
                                style={{
                                    resize: "none",
                                    width: "100%",
                                    height: "35px",
                                    minHeight: "35px",
                                    borderRadius: "5px"
                                }}
                                className="textAreaeEmbed"
                            />

                            <h5>Thumbnail (URL)</h5>

                            <textarea
                                title="thumbnailUrl"
                                onChange={e => handleFieldChangeFild("thumbnailUrl", e.target.value)}
                                style={{
                                    resize: "none",
                                    width: "100%",
                                    height: "35px",
                                    minHeight: "35px",
                                    borderRadius: "5px"
                                }}
                                className="textAreaeEmbed"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div >
    )

}

export default EmbedEditor