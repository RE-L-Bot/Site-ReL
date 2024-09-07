import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Registrar from "./representation/registry/registrar";

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
                                    add_role_register
                                </h3>

                                <p>
                                    Adds a role to the register
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistry sobDiv">
                                Register
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandadccreg">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Adds a role to a role category of the <br />
                                ° register
                            </h5>

                            <br />

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Category: Category to add the role (Required) <br />
                                ° Name: Name that will appear in the SelectMenu (Required) <br />
                                ° Role: Role to add (Required)
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
                                    default_roles
                                </h3>

                                <p>
                                    Adds the default register roles
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistry sobDiv">
                                Register
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandcargos_defaults">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Adds roles to add and remove <br />
                                ° by default when registration is complete
                            </h5>

                            <br />

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° final_reg_role: Role to add after registration (Required) <br />
                                ° default_reg_role: Role to remove after registration (Optional) <br />
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
                                    delete_register_category
                                </h3>

                                <p>
                                    Deletes a category from the register
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistry sobDiv">
                                Register
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommanddelete_categoria">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Deletes an existing register category<br />
                            </h5>

                            <br />

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Category: Category to delete (Required) <br />
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
                                    register
                                </h3>

                                <p>
                                    Registers a member
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistry sobDiv">
                                Register
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandregistrar">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Registers a member on your server<br />
                            </h5>

                            <br />

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Member: Member to register (Required) <br />
                                ° Mode: Whether to add or remove roles (Required)
                            </h5>

                            <br />

                            <h4>
                                Command representation:
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
                                    remove_register_role
                                </h3>

                                <p>
                                    Removes a role from a register category
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandRegistry sobDiv">
                                Register
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandremover_cargo_registro">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Removes a register role from a category<br />
                            </h5>

                            <br />

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Category: Name of the category where the role is (Required) <br />
                                ° Name: Name of the role to remove from the category (Required)
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
