import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";

export default function EventsCommands() {
    return (
        <>
            <main className="CommandsList">

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentadicionar_ponto_evento" onClick={(event) => changeDisplayNoneToAndResetAll(event, "adicionar_ponto_evento", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandadicionar_ponto_evento">
                                    expand_more
                                </i>

                                <div>
                                    <h3 style={{ margin: 0 }}>
                                        adicionar_ponto_evento
                                    </h3>

                                    <p style={{ margin: 0 }}>
                                        Adiciona um ponto de evento a um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEvents sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandadicionar_ponto_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Adiciona um "ponto" de evento a um membro somando aos <br />
                                    ° anteriores que o membro possui
                                </h5>

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: id do usuario adicionar o ponto (Opcional)
                                </h5>

                                <h4>
                                    Imagens do comando:
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentremover_pontos_evento" onClick={(event) => changeDisplayNoneToAndResetAll(event, "remover_pontos_evento", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandremover_pontos_evento">
                                    expand_more
                                </i>

                                <div>
                                    <h3 style={{ margin: 0 }}>
                                        remover_pontos_evento
                                    </h3>

                                    <p style={{ margin: 0 }}>
                                        Remove um "ponto" de evento de um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEvents sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandremover_pontos_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Remove um "ponto" de evento a um membro diminuindo aos <br />
                                    ° anteriores que o membro possui
                                </h5>

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: id do usuario remover o ponto (Opcional)
                                </h5>

                                <h4>
                                    Imagem do comando:
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentver_pontos_evento" onClick={(event) => changeDisplayNoneToAndResetAll(event, "ver_pontos_evento", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandver_pontos_evento">
                                    expand_more
                                </i>

                                <div>
                                    <h3 style={{ margin: 0 }}>
                                        ver_pontos_evento
                                    </h3>

                                    <p style={{ margin: 0 }}>
                                        Mostra os "pontos" de evento de um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEvents sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandver_pontos_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Mostra quantos pontos de evento um membro possui no total
                                </h5>

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: Membro a ver os pontos de evento (Opcional)
                                </h5>

                                <h4>
                                    Imagem do comando:
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </>
    )
}