import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";

export default function EventsCommands() {
    return (
        <div className="CommandsList">

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentadd_event_point" onClick={(event) => changeDisplayNoneToAndResetAll(event, "add_event_point", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandadd_event_point">
                                expand_more
                            </i>

                            <div>
                                <h3 style={{ margin: 0 }}>
                                    add_event_point
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Adds an event point to a member
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandEvents sobDiv">
                                Events
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandadd_event_point">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Adds an "event point" to a member, summing up with <br />
                                ° the previous points the member already has
                            </h5>

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Member: user ID to add the point (Optional)
                            </h5>

                            <h4>
                                Command images:
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentremove_event_points" onClick={(event) => changeDisplayNoneToAndResetAll(event, "remove_event_points", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandremove_event_points">
                                expand_more
                            </i>

                            <div>
                                <h3 style={{ margin: 0 }}>
                                    remove_event_points
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Removes an "event point" from a member
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandEvents sobDiv">
                                Events
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandremove_event_points">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Removes an "event point" from a member, subtracting <br />
                                ° from the points the member already has
                            </h5>

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Member: user ID to remove the point (Optional)
                            </h5>

                            <h4>
                                Command images:
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

            <div className="conjuntCommand">

                <div className="BodyCommand">

                    <div className="contentCommand" id="contentview_event_points" onClick={(event) => changeDisplayNoneToAndResetAll(event, "view_event_points", "flex")}>

                        <div className="NameAndDescriptionCommand">

                            <i className="material-symbols-outlined transitionShowCommands expand" id="expandview_event_points">
                                expand_more
                            </i>

                            <div>
                                <h3 style={{ margin: 0 }}>
                                    view_event_points
                                </h3>

                                <p style={{ margin: 0 }}>
                                    Shows a member's "event points"
                                </p>
                            </div>

                        </div>

                        <div className="DivCategoryCommand">
                            <p className="CategoryCommandEvents sobDiv">
                                Events
                            </p>
                        </div>

                    </div>

                </div>

                <div className="BodyInformationCommand">

                    <div className="InformationsCommand" id="InformationsCommandview_event_points">

                        <div>

                            <h4>
                                Long description:
                            </h4>

                            <h5>
                                ° Shows the total number of event points a member has
                            </h5>

                            <h4>
                                Arguments:
                            </h4>

                            <h5>
                                ° Member: Member to view event points (Optional)
                            </h5>

                            <h4>
                                Command images:
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
