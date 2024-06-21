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
                                    <h3>
                                        adicionar_ponto_evento
                                    </h3>

                                    <p>
                                        Adiciona um ponto de evento a um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEventos sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformarionsCommand" id="InformarionsCommandadicionar_ponto_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Adiciona um "ponto" de evento a um membro somando aos <br />
                                    ° anteriores que o membro possui
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: id do usuario adicionar o ponto (Opcional)
                                </h5>

                                <br />

                                <h4>
                                    Imagens do comando:
                                </h4>

                                <img style={{ width: "60%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtUyBLsCfq9_VEzR2L080_9s4TxErnbdDzQ&usqp=CAU" alt="" />

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
                                    <h3>
                                        remover_pontos_evento
                                    </h3>

                                    <p>
                                        Remove um "ponto" de evento de um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEventos sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformarionsCommand" id="InformarionsCommandremover_pontos_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Remove um "ponto" de evento a um membro diminuindo aos <br />
                                    ° anteriores que o membro possui
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: id do usuario remover o ponto (Opcional)
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img style={{ width: "60%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtUyBLsCfq9_VEzR2L080_9s4TxErnbdDzQ&usqp=CAU" alt="" />

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
                                    <h3>
                                        ver_pontos_evento
                                    </h3>

                                    <p>
                                        Mostra os "pontos" de evento de um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandEventos sobDiv">
                                    Eventos
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformarionsCommand" id="InformarionsCommandver_pontos_evento">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Mostra quantos pontos de evento um membro possui no total
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: Membro a ver os pontos de evento (Opcional)
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img style={{ width: "60%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtUyBLsCfq9_VEzR2L080_9s4TxErnbdDzQ&usqp=CAU" alt="" />

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </>
    )
}