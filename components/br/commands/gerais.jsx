import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";

const nameCatCommand =  "gerais"

export default function GeneralsCommands() {
    return (
        <>
            <main className="CommandsList">

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentavatar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "avatar", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandavatar">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        avatar
                                    </h3>

                                    <p>
                                        Envia o avatar de um membro
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandavatar">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia foto de perfil sua ou do usuario desejado <br />
                                    ° sendo estando ou não no servidor
                                </h5>

                                <br />

                                <h4>
                                    Observações:
                                </h4>

                                <h5>
                                    ° Caso o usuario estiver no servidor com uma foto diferente da do perfil<br />
                                    ° um botão sera adicionado para enviar a foto de usuario
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Membro: id do usuario a ver o avatar (Opcional)
                                </h5>

                                <br />

                                <h4>
                                    Imagens do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                                <br />

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentbotinfo" onClick={(event) => changeDisplayNoneToAndResetAll(event, "botinfo", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandbotinfo">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        botinfo
                                    </h3>

                                    <p>
                                        Envia algumas informações minhas
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandbotinfo">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia algumas informações interessantes sobre o bot
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentserverinfo" onClick={(event) => changeDisplayNoneToAndResetAll(event, "serverinfo", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandserverinfo">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        serverinfo
                                    </h3>

                                    <p>
                                        Envia algumas informações de um servidor
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandserverinfo">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia algumas informações sobre qualquer servidor que a RE esteja <br />
                                    ° pelo id do servidor
                                </h5>

                                <br />

                                <h4>
                                    Observações:
                                </h4>

                                <h5>
                                    ° Case você pesquise informações do servidor de origem do comando <br />
                                    ° a re  enviara um botão junto para ver os cargos existentes no servidor
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° Servidor: Id do servidor a pesquisar (Opcional)
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentping" onClick={(event) => changeDisplayNoneToAndResetAll(event, "ping", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandping">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        ping
                                    </h3>

                                    <p>
                                        Envia meu ping
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandping">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia o meu ping ou seja, quanto tempo destou demorando para <br />
                                    ° eu receber seu comando e retornar a sua resposta
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentlinks" onClick={(event) => changeDisplayNoneToAndResetAll(event, "links", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandlinks">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        links
                                    </h3>

                                    <p>
                                        Envia meus links importantes
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandlinks">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia alguns dos meus links importantes para que você<br />
                                    ° não fique entediado de tanto procurar
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contenttabuada" onClick={(event) => changeDisplayNoneToAndResetAll(event, "tabuada", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expandtabuada">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        tabuada
                                    </h3>

                                    <p>
                                        Envia a tabuada de um numero até 10
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommandtabuada">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Faz a multiplicação de um numero até 10 e envia para você<br />
                                    ° arrumado bonitinho como se fosse uma tabuada
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° número: Numero a se multiplicar (Necessário)
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="conjuntCommand">

                    <div className="BodyCommand">

                        <div className="contentCommand" id="contentuserinfo" onClick={(event) => changeDisplayNoneToAndResetAll(event, "userinfo", "flex")}>

                            <div className="NameAndDescriptionCommand">

                                <i className="material-symbols-outlined transitionShowCommands expand" id="expanduserinfo">
                                    expand_more
                                </i>

                                <div>
                                    <h3>
                                        userinfo
                                    </h3>

                                    <p>
                                        Envia as informações de um usuario
                                    </p>
                                </div>

                            </div>

                            <div className="DivCategoryCommand">
                                <p className="CategoryCommandGerais sobDiv">
                                    Gerais
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="BodyInformationCommand">

                        <div className="InformationsCommand" id="InformationsCommanduserinfo">

                            <div>

                                <h4>
                                    Descrição longa:
                                </h4>

                                <h5>
                                    ° Envia algumas informações de um usuario do discord<br />
                                    ° estando em um servidor ou não
                                </h5>

                                <br />

                                <h4>
                                    Argumentos:
                                </h4>

                                <h5>
                                    ° usuario: Usuario a ver as informações (Op)
                                </h5>

                                <br />

                                <h4>
                                    Imagem do comando:
                                </h4>

                                <img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/img.png`} alt="imageCommand" style={{ width: "60%" }} />

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </>
    )
}