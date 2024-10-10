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
									Envia o avatar de um membro
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandavatar">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia foto de perfil sua ou do usuario desejado <br />
								° sendo estando ou não no servidor
							</h5>

							<h4 style={{ margin: 0 }}>
								Observações:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Caso o usuario estiver no servidor com uma foto diferente da do perfil<br />
								° um botão sera adicionado para enviar a foto de usuario
							</h5>

							<h4 style={{ margin: 0 }}>
								Argumentos:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Membro: id do usuario a ver o avatar (Opcional)
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									Envia algumas informações minhas
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandbotinfo">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia algumas informações interessantes sobre o bot
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									Envia algumas informações de um servidor
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandserverinfo">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia algumas informações sobre qualquer servidor que a RE esteja <br />
								° pelo id do servidor
							</h5>

							<h4 style={{ margin: 0 }}>
								Observações:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Case você pesquise informações do servidor de origem do comando <br />
								° a re  enviara um botão junto para ver os cargos existentes no servidor
							</h5>

							<h4 style={{ margin: 0 }}>
								Argumentos:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Servidor: Id do servidor a pesquisar (Opcional)
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									Envia meu ping
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandping">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia o meu ping ou seja, quanto tempo destou demorando para <br />
								° eu receber seu comando e retornar a sua resposta
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									Envia meus links importantes
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandlinks">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia alguns dos meus links importantes para que você<br />
								° não fique entediado de tanto procurar
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									tabuada
								</h3>

								<p style={{ margin: 0 }}>
									Envia a tabuada de um numero até 10
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommandtabuada">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Faz a multiplicação de um numero até 10 e envia para você<br />
								° arrumado bonitinho como se fosse uma tabuada
							</h5>

							<h4 style={{ margin: 0 }}>
								Argumentos:
							</h4>

							<h5 style={{ margin: 0 }}>
								° número: Numero a se multiplicar (Necessário)
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
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
									Envia as informações de um usuario
								</p>
							</div>

						</div>

						<div className="DivCategoryCommand">
							<p className="CategoryCommandGenerals sobDiv">
								Gerais
							</p>
						</div>

					</div>

				</div>

				<div className="BodyInformationCommand">

					<div className="InformationsCommand" id="InformationsCommanduserinfo">

						<div>

							<h4 style={{ margin: 0 }}>
								Descrição longa:
							</h4>

							<h5 style={{ margin: 0 }}>
								° Envia algumas informações de um usuario do discord<br />
								° estando em um servidor ou não
							</h5>

							<h4 style={{ margin: 0 }}>
								Argumentos:
							</h4>

							<h5 style={{ margin: 0 }}>
								° usuario: Usuario a ver as informações (Opicional)
							</h5>

							<h4 style={{ margin: 0 }}>
								Representação do comando:
							</h4>

							<Userinfo />

						</div>

					</div>

				</div>

			</div>

		</div>

	)
}