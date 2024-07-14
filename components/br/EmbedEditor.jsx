import { useState } from "react"
import { showDialogueBox } from "@/scripts/changes";

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
                setAuthorUrl(value);
                break;
            case 'authorImage':
                setAuthorImage(value);
                break;
            case 'imageUrl':
                setImageUrl(value);
                break;
            case 'thumbnailUrl':
                setThumbnailUrl(value);
                break;
            case 'color':
                setColor(value);
                break;
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
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, fields: newFields });
    };

    const handleFieldValueChange = (index, name) => {
        const newFields = fields.slice();
        newFields[index].value = name;
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, fields: newFields });
    };

    const handleFieldInlineChange = (index, inline) => {
        const newFields = fields.slice();
        newFields[index].inline = inline;
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, fields: newFields });
    };

    const handleRemoveField = (index) => {
        const newFields = fields.slice();
        newFields.splice(index, 1);
        setFields(newFields);
        onEmbedChange({ title, description, authorName, authorUrl, authorImage, imageUrl, thumbnailUrl, color, fields: newFields });
    };

    return (
        <div className="LineFormEmbed">

            <div>

                <div>

                    <h4>Titulo</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcTitleModal")}>Adicionar</button>

                    <dialog id="AdcTitleModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Titulo da embed</p>

                            <textarea id={`titleHtml`} placeholder="Escreva o titulo da embed" title="titulo" maxLength={256} onChange={e => handleFieldChangeFild("title", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

                <div>

                    <h4>Descrição</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcDescriptionModal")}>Adicionar</button>

                    <dialog id="AdcDescriptionModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Descrição da embed</p>

                            <textarea id={`descriptionHtml`} placeholder="Escreva a descrição da embed" title="descrição" maxLength={4096} onChange={e => handleFieldChangeFild("description", [e.target.value])} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

                <div>

                    <h4>Thumbnail (URL)</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcThumbnailModal")}>Adicionar</button>

                    <dialog id="AdcThumbnailModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Thumbnail da embed (URL)</p>

                            <textarea id={`thumbnailHtml`} placeholder="Link da imagem da thumbnail" title="Thumbnail" onChange={e => handleFieldChangeFild("thumbnailUrl", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

                <div>

                    <h5>Campos</h5>

                    <div>
                        <button className="styleButton" type="button" onClick={handlerFieldsAdd}>
                            Adicionar
                        </button>
                        {fields.map((value, index) => (
                            <div key={index}>

                                <h4>Name</h4>
                                <input type="text" name="" id="" onChange={e => handleFieldNameChange(index, e.target.value)} />

                                <h4>Value</h4>
                                <input type="text" name="" id="" onChange={e => handleFieldValueChange(index, e.target.value)} />

                                <label className="block mt-2 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={value.inline}
                                        onChange={(e) => handleFieldInlineChange(index, e.target.checked)}
                                        className="mr-2"
                                    />
                                    Alinhado
                                </label>
                                <button className="styleButton" onClick={e => handleRemoveField(index)}>Remover Field</button>

                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <div>

                <div>

                    <h4>Nome do Author</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcNameAuthorModal")}>Adicionar</button>

                    <dialog id="AdcNameAuthorModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Nome do Author</p>

                            <textarea id={`nameAuthorHtml`} placeholder="Nome do autor" title="Nome do Author" maxLength={256} onChange={(e) => handleFieldChangeFild("authorName", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>


                        </form>

                    </dialog>

                </div>

                <div>

                    <h4>Img do Author (URL)</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcImgAuthorModal")}>Adicionar</button>

                    <dialog id="AdcImgAuthorModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Img do Author (URL)</p>

                            <textarea id={`imageAuthorHtml`} placeholder="Link da imagem do autor" title="Imagem do autor" onChange={e => handleFieldChangeFild("authorImage", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

                <div>

                    <h4>Link do Author (URL)</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcLinkAuthorModal")}>Adicionar</button>

                    <dialog id="AdcLinkAuthorModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Link do Author (URL)</p>

                            <textarea id={`hrefAuthorHtml`} placeholder="Link de redirecionamento do autor" title="Link de redirecionamento do autor" onChange={e => handleFieldChangeFild("authorUrl", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

            </div>

            <div>

                <div>

                    <h4>Img (URL)</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcImageModal")}>Adicionar</button>

                    <dialog id="AdcImageModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Img (URL)</p>

                            <textarea id={`imageHtml`} placeholder="Link da imagem da embed" title="Link da imagem da embed" onChange={e => handleFieldChangeFild("imageUrl", e.target.value)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

                <div>

                    <h4>Cor</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcCollourModal")}>Adicionar</button>

                    <dialog id="AdcCollourModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Cor</p>

                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                                <div className="SelectColorPerson" id="SelectColorPerson">

                                    <label htmlFor={`embedColorHtml`}>
                                        <div style={{ width: "100%", height: "100%" }} />
                                    </label>

                                    <input type="color" className="corembedselect" id={`embedColorHtml`} onChange={e => handleFieldChangeFild("color", e.target.value)} style={{ display: "none" }} />

                                </div>

                                <div>

                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <div className="hoverColor" style={{ backgroundColor: "#ff0000" }} onClick={() => handleFieldChangeFild("color", "#ff0000")} />

                                        <div className="hoverColor" style={{ backgroundColor: "#ff0059" }} onClick={() => handleFieldChangeFild("color", "#ff0059")} />

                                        <div className="hoverColor" style={{ backgroundColor: "#d400ff" }} onClick={() => handleFieldChangeFild("color", "#d400ff")} />

                                    </div>

                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <div className="hoverColor" style={{ backgroundColor: "#0000ff" }} onClick={() => handleFieldChangeFild("color", "#0000ff")} />

                                        <div className="hoverColor" style={{ backgroundColor: "#00ff6e" }} onClick={() => handleFieldChangeFild("color", "#00ff6e")} />

                                        <div className="hoverColor" style={{ backgroundColor: "#00fffb" }} onClick={() => handleFieldChangeFild("color", "#00fffb")} />

                                    </div>

                                </div>

                            </div>

                            <button className="styleButton">fechar dialogo</button>

                        </form>

                    </dialog>

                </div>

            </div>

        </div>
    )

}

export default EmbedEditor