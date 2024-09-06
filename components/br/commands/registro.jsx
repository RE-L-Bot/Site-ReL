import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Registrar from "./representation/registry/registrar";

const nameCatCommand = "registro"

export default function RegisterCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentadccreg" onClick={(event) => changeDisplayNoneToAndResetAll(event, "adccreg", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandadccreg">
                                expand_more
                            </i>

                            <div>
                                <h3>
                                    adicionar_cargo_registro
                                </h3>

                                <p>
                                    Adiciona um cargo ao registro
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistro sobDiv">
                                Registro
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandadccreg">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Adiciona um cargo a uma categoria dos cargos de <br />
                                ° registro
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Categoria: Categoria para adicionar o cargo (Necessário) <br />
                                ° Nome: Nome do que vai aparecer no SelecMenu (Necessário) <br />
                                ° Categoria: Cargo para adicionar (Necessário)
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentcargos_defaults" onClick={(event) => changeDisplayNoneToAndResetAll(event, "cargos_defaults", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandcargos_defaults">
                                expand_more
                            </i>

                            <div>
                                <h3>
                                    cargos_defaults
                                </h3>

                                <p>
                                    Adiciona os cargos defaults do registro
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistro sobDiv">
                                Registro
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandcargos_defaults">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Adiciona os cargos que é para adicionar e remover <br />
                                ° por padrão ao finalizar o registro
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° cargo_final_reg: Cargo para adicionar depois de registrado (Necessário) <br />
                                ° cargo_default_reg: Cargo para remover depois de registrado (Opcional) <br />
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentdelete_categoria" onClick={(event) => changeDisplayNoneToAndResetAll(event, "delete_categoria", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expanddelete_categoria">
                                expand_more
                            </i>

                            <div>
                                <h3>
                                    deletar_categoria_registro
                                </h3>

                                <p>
                                    Deleta uma categoria do registro
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistro sobDiv">
                                Registro
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommanddelete_categoria">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Deleta uma categoria categoria de registro existente<br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Categoria: Categoria a deletar (Necessário) <br />
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentregistrar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "registrar", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandregistrar">
                                expand_more
                            </i>

                            <div>
                                <h3>
                                    registrar
                                </h3>

                                <p>
                                    Registra um membro
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistro sobDiv">
                                Registro
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandregistrar">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Registra um membro no seu servidor<br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Membro: Membro a registrar (Necessário) <br />
                                ° Modo: Se ira adicionar ou remover os cargos (Necessário)
                            </h5>

                            <br />

                            <h4>
                                Representação do comando:
                            </h4>

                            <Registrar />

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentremover_cargo_registro" onClick={(event) => changeDisplayNoneToAndResetAll(event, "remover_cargo_registro", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandremover_cargo_registro">
                                expand_more
                            </i>

                            <div>
                                <h3>
                                    remover_cargo_registro
                                </h3>

                                <p>
                                    Remove um cargo de uma categoria do registro
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistro sobDiv">
                                Registro
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandremover_cargo_registro">

                        <div>

                            <h4>
                                Descrição longa:
                            </h4>

                            <h5>
                                ° Remove um cargo de registro de uma categoria<br />
                            </h5>

                            <br />

                            <h4>
                                Argumentos:
                            </h4>

                            <h5>
                                ° Categoria: Nome da categoria que o cargo esta (Necessário) <br />
                                ° Nome: Nome do cargo a remover da categoria (Necessário)
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    )
}