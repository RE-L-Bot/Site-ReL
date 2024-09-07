import {
    changeDescriptionEmbed,
    changeTitleEmbed,
    changeCorEmbed,
    changeImageThumbnailEmbed,
    changeImageEmbed,
    changeCorEmbedClick
} from "@/scripts/embed/changeBody";
import {
    changeNameAuthorEmbed,
    changeImageAuthorEmbed,
    changehrefAuthorEmbed
} from "@/scripts/embed/changeAuthor";
import React from "react";
import { showDialogueBox } from "@/scripts/changes";

export default function FormEmbed(opts) {

    return (

        <div className="LineFormEmbed">

            <div>

                <div>

                    <h4>Titulo</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcTitleModal")}>Adicionar</button>

                    <dialog id="AdcTitleModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Titulo da embed</p>

                            <textarea id={`titleHtml${opts.qnt}`} placeholder="Escreva o titulo da embed" title="titulo" maxLength={256} onChange={(c) => changeTitleEmbed(c, opts)} style={{ resize: "none" }} />

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

                            <textarea id={`descriptionHtml${opts.qnt}`} placeholder="Escreva a descrição da embed" title="descrição" maxLength={4096} onChange={(c) => changeDescriptionEmbed(c, opts)} style={{ resize: "none" }} />

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

                            <textarea id={`thumbnailHtml${opts.qnt}`} placeholder="Link da imagem da thumbnail" title="Thumbnail" onChange={(c) => changeImageThumbnailEmbed(c, opts)} style={{ resize: "none" }} />

                            <button className="styleButton">fechar dialogo</button>


                        </form>

                    </dialog>



                </div>

            </div>

            <div>

                <div>

                    <h4>Nome do Author</h4>

                    <button className="styleButton" onClick={(e) => showDialogueBox(e, "AdcNameAuthorModal")}>Adicionar</button>

                    <dialog id="AdcNameAuthorModal" >

                        <form method="dialog" style={{ padding: "10px", textAlign: "center" }}>

                            <p>Nome do Author</p>

                            <textarea id={`nameAuthorHtml${opts.qnt}`} placeholder="Nome do autor" title="Nome do Author" maxLength={256} onChange={(c) => changeNameAuthorEmbed(c, opts)} style={{ resize: "none" }} />

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

                            <textarea id={`imageAuthorHtml${opts.qnt}`} placeholder="Link da imagem do autor" title="Imagem do autor" onChange={(c) => changeImageAuthorEmbed(c, opts)} style={{ resize: "none" }} />

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

                            <textarea id={`hrefAuthorHtml${opts.qnt}`} placeholder="Link de redirecionamento do autor" title="Link de redirecionamento do autor" onChange={(c) => changehrefAuthorEmbed(c, opts)} style={{ resize: "none" }} />

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

                            <textarea id={`imageHtml${opts.qnt}`} placeholder="Link da imagem da embed" title="Link da imagem da embed" onChange={(c) => changeImageEmbed(c, opts)} style={{ resize: "none" }} />

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

                                    <label htmlFor={`embedColorHtml${opts.qnt}`}>
                                        <div style={{ width: "100%", height: "100%" }} />
                                    </label>

                                    <input type="color" className="corembedselect" id={`embedColorHtml${opts.qnt}`} onChange={(c) => changeCorEmbed(c, opts)} style={{ display: "none" }} />

                                </div>

                                <div>

                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <div className="hoverColor" style={{ backgroundColor: "#ff0000" }} onClick={() => changeCorEmbedClick("#ff0000", opts)} />

                                        <div className="hoverColor" style={{ backgroundColor: "#ff0059" }} onClick={() => changeCorEmbedClick("#ff0059", opts)} />

                                        <div className="hoverColor" style={{ backgroundColor: "#d400ff" }} onClick={() => changeCorEmbedClick("#d400ff", opts)} />

                                    </div>

                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <div className="hoverColor" style={{ backgroundColor: "#0000ff" }} onClick={() => changeCorEmbedClick("#0000ff", opts)} />

                                        <div className="hoverColor" style={{ backgroundColor: "#00ff6e" }} onClick={() => changeCorEmbedClick("#00ff6e", opts)} />

                                        <div className="hoverColor" style={{ backgroundColor: "#00fffb" }} onClick={() => changeCorEmbedClick("#00fffb", opts)} />

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