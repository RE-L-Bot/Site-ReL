import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import Avatar from "./representation/generals/avatar";
import Botinfo from "./representation/generals/botinfo";
import Serverinfo from "./representation/generals/serverinfo";
import Ping from "./representation/generals/ping";
import Links from "./representation/generals/links";
import Multiplication_table from "./representation/generals/multiplication_table";
import Userinfo from "./representation/generals/userinfo";

export default function GeneralsCommands() {
	return (
		<div className="CommandsList">

			<div className="conjuntCommand">

				<div className="BodyCommand">

					<div className="contentCommand" id="contentavatar" onClick={(event) => changeDisplayNoneToAndResetAll(event, "avatar", "flex")}>

						<div className="NameAndDescriptionCommand">

							<i className="material-symbols-outlined transitionShowCommands expand" id="expandavatar">
								expand_more
							</i>

							<div>
								<h3 style={{ margin: 0 }}>
									avatar
								</h3>

								<p style={{ margin: 0 }}>
									Send a member's avatar
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandavatar">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends your profile picture or the desired user’s profile picture <br />
								° whether they are on the server or not
							</h5>

							<h4>
								Notes:
							</h4>

							<h5>
								° If the user is in the server with a different profile picture<br />
								° a button will be added to send the user's server avatar
							</h5>

							<h4>
								Arguments:
							</h4>

							<h5>
								° Member: User ID to see the avatar (Optional)
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Avatar />

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
								<h3 style={{ margin: 0 }}>
									botinfo
								</h3>

								<p style={{ margin: 0 }}>
									Sends some of my information
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandbotinfo">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends some interesting information about the bot
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Botinfo />

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
								<h3 style={{ margin: 0 }}>
									serverinfo
								</h3>

								<p style={{ margin: 0 }}>
									Sends some information about a server
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandserverinfo">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends some information about any server that RE is in <br />
								° using the server ID
							</h5>

							<h4>
								Notes:
							</h4>

							<h5>
								° If you search for the server where the command originated <br />
								° RE will send a button to view the existing roles on the server
							</h5>

							<h4>
								Arguments:
							</h4>

							<h5>
								° Server: ID of the server to search (Optional)
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Serverinfo />

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
								<h3 style={{ margin: 0 }}>
									ping
								</h3>

								<p style={{ margin: 0 }}>
									Sends my ping
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandping">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends my ping, that is, how long it takes for <br />
								° me to receive your command and respond
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Ping />

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
								<h3 style={{ margin: 0 }}>
									links
								</h3>

								<p style={{ margin: 0 }}>
									Sends my important links
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandlinks">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends some of my important links so you<br />
								° don't have to search for them
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Links />

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
								<h3 style={{ margin: 0 }}>
									multiplication_table
								</h3>

								<p style={{ margin: 0 }}>
									Sends a multiplication table
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandtabuada">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends a multiplication table with a number of your choice
							</h5>

							<h4>
								Arguments:
							</h4>

							<h5>
								° Number: The number to calculate the table (Optional)
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Multiplication_table />

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
								<h3 style={{ margin: 0 }}>
									userinfo
								</h3>

								<p style={{ margin: 0 }}>
									Sends a member's information
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Generals
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommanduserinfo">

						<div>

							<h4>
								Long description:
							</h4>

							<h5>
								° Sends some interesting information about the member
							</h5>

							<h4>
								Command Representation:
							</h4>

							<Userinfo />

						</div>

					</div>

				</div>

			</div>

		</div>
	);
}
