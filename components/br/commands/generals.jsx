import { changeDisplayNoneToAndResetAll } from "@/scripts/changes";
import {
	DiscordMessage,
	DiscordAttachments,
	DiscordCommand,
	DiscordEmbed,
	DiscordLink,
	DiscordEmbedDescription,
	DiscordActionRow,
	DiscordButton,
	DiscordEmbedFields,
	DiscordEmbedField,
	DiscordCustomEmoji,
	DiscordMention,
	DiscordTime,
	DiscordReply,
	DiscordBold,
	DiscordEmbedFooter,
	DiscordMessages
} from "@skyra/discord-components-react";

export default function GeneralsCommands() {
	return (
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
								Representação do comando:
							</h4>

							<h3>Caso 1</h3>

							<hr />

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais avatar"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Avatar de marciel404"
										image="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
										color="#00008b"
									>

										<DiscordEmbedDescription
											style={{ marginTop: "8px" }}
											slot="description"
										>
											Clique <DiscordLink
												target="_blank"
												href="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
											>
												aqui
											</DiscordLink> para baixar a imagem

										</DiscordEmbedDescription>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>

							<h3>Caso 2</h3>

							<hr />

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais avatar"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Avatar de marciel404"
										image="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
										color="#00008b"
									>

										<DiscordEmbedDescription
											style={{ marginTop: "8px" }}
											slot="description"
										>
											Clique <DiscordLink
												target="_blank"
												href="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
											>
												aqui
											</DiscordLink> para baixar a imagem

										</DiscordEmbedDescription>

									</DiscordEmbed>

									<DiscordAttachments slot="components">

										<DiscordActionRow>

											<DiscordButton type="primary" onClick={() => document.getElementById("message-ephemeral-avatar").style.display = "block"}>
												Avatar de Usuario
											</DiscordButton>

										</DiscordActionRow>

									</DiscordAttachments>

								</DiscordMessage>

								<div id="message-ephemeral-avatar" style={{ display: "none" }}>

									<DiscordMessage
										profile="RELBOT"
										timestamp="30/08/2024 13:00"
										ephemeral
										dismissMessageClicked={() => document.getElementById("message-ephemeral-avatar").style.display = "none"}
									>
										<DiscordReply
											style={{ marginLeft: "56px" }}
											slot="reply"
											command
											profile="RELBOT"
											timestamp="30/08/2024 13:00"
										>
											Clique aqui para ver o comando
										</DiscordReply>

										<DiscordEmbed
											slot="embeds"
											embedTitle="Avatar de marciel404"
											image="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
											color="#00008b"
										>

											<DiscordEmbedDescription
												style={{ marginTop: "8px" }}
												slot="description"
											>
												Clique <DiscordLink
													target="_blank"
													href="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
												>
													aqui
												</DiscordLink> para baixar a imagem

											</DiscordEmbedDescription>

										</DiscordEmbed>

									</DiscordMessage>

								</div>

							</DiscordMessages>

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
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais botinfo"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Minhas informações"
										thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
										color="#00008b"
									>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"identificationemoji Nome"} inline inlineIndex={1}>
												RE=L
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"vscodeemoji Linguagem"} inline inlineIndex={2}>
												<DiscordCustomEmoji name="jsemoji">
												</DiscordCustomEmoji>
												JavaScript
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"════════════"}>
												════════════
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"djsemoji Livraria/Versão"} inline inlineIndex={1}>
												Discord.js/14.15.3
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"nodejsemoji Versão do NodeJs"} inline inlineIndex={2}>
												v20.15.1
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"════════════"}>
												════════════
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"hugdiscordemoji Servidores"} inline inlineIndex={1}>
												250
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"membersemoji Membros Totais"} inline inlineIndex={2}>
												14822
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"════════════"}>
												════════════
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"owneryellowemoji Meu Dono"} inline inlineIndex={1}>
												<DiscordMention>
													marciel404
												</DiscordMention>
												(Marciel404)
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"membersemoji Membros Totais"} inline inlineIndex={2}>
												14822
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"════════════"}>
												════════════
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"botemoji Versão do Bot"} inline inlineIndex={1}>
												4.0.0
											</DiscordEmbedField>

										</DiscordEmbedFields>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>

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
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais serverinfo"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Informações do servidor"
										thumbnail="https://images-ext-1.discordapp.net/external/End4uqNSssZyzlEGItDQzbLy_kctiB5N0zS23FFXHQI/https/cdn.discordapp.com/icons/1153322679999397898/2758142f8364113ddeb3f40394a5fbcb.webp?format=webp"
										color="#00008b"
									>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"identificationemoji Nome"} inline inlineIndex={1}>
												RE=L (Support)
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"identificationemoji Id"} inline inlineIndex={2}>
												1153322679999397898
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"owneryellowemoji Dono"} inline inlineIndex={3}>
												marciel404 485801281621852175
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"membersemoji Membros"} inline inlineIndex={1}>
												21
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"listemoji Canais (39)"} inline inlineIndex={2}>

												<DiscordCustomEmoji name="textchannelemoji">
												</DiscordCustomEmoji> Texto: 21 <br />

												<DiscordCustomEmoji name="voicechannelemoji">
												</DiscordCustomEmoji> Voz: 18

											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"dateemoji Criado em"} inline inlineIndex={3}>
												<DiscordTime>
													18 de setembro de
												</DiscordTime> <br />
												<DiscordTime>
													2023 às 10:32 (há
												</DiscordTime> <br />
												<DiscordTime>
													{(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})
												</DiscordTime>
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"🛡 Nivel de segurança"} inline inlineIndex={1}>
												Muito alto
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"start2emoji Entrei aqui em"} inline inlineIndex={2}>
												<DiscordTime>
													18 de setembro de
												</DiscordTime> <br />
												<DiscordTime>
													2023 às 10:36 (há
												</DiscordTime> <br />
												<DiscordTime>
													{(Number(new Date().getFullYear()) - 2023)} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})
												</DiscordTime>
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"rolesdiscordemoji Cargos"} inline inlineIndex={3}>
												78
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"😁 Emojis"} inline inlineIndex={1}>
												0
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"🎞 Figurinhas"} inline inlineIndex={2}>
												0
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"Sharid"} inline inlineIndex={3}>
												0
											</DiscordEmbedField>

										</DiscordEmbedFields>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>

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
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
									ephemeral
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										command="/gerais ping"
										profile="marciel404"
									>
										Clique aqui para ver o comando
									</DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Minha latencia"
										color="#00008b"
									>

										<DiscordEmbedDescription
											style={{ marginTop: "8px" }}
											slot="description"
										>

											<span>Minha latencia é de 73ms</span>

											<br />

											<span>A latencia da api é 24ms</span>

										</DiscordEmbedDescription>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>
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
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
									ephemeral
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais links"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Meus links"
										thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
										color="#00008b"
									>

										<DiscordEmbedDescription
											style={{ marginTop: "8px" }}
											slot="description"
										>

											<span>Aqui estão meus links, só clicar nos botões para ser redirecionado</span>

										</DiscordEmbedDescription>

									</DiscordEmbed>

									<DiscordAttachments slot="components">

										<DiscordActionRow>

											<DiscordButton
												type="secondary"
												url="https://discord.com/api/oauth2/authorize?client_id=1018958083764002919&permissions=8&scope=bot%20applications.commands"
											>

												Clique aqui para me convidar

											</DiscordButton>

											<DiscordButton
												type="secondary"
												url="https://discord.gg/mmwUHd4Yzf"
											>

												Clique aqui para entrar no meu servidor de suporte

											</DiscordButton>

											<DiscordButton
												type="secondary"
												url="/br"
											>

												Clique aqui para ir para minha dashboard

											</DiscordButton>

										</DiscordActionRow>

									</DiscordAttachments>

								</DiscordMessage>

							</DiscordMessages>

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
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										profile="marciel404"
										slot="reply"
										command="/gerais tabuada"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										color="#00008b"
									>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"10 x 1"} inline inlineIndex={1}>
												10
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 2"} inline inlineIndex={2}>
												20
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 3"} inline inlineIndex={3}>
												30
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"10 x 4"} inline inlineIndex={1}>
												40
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 5"} inline inlineIndex={2}>
												50
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 6"} inline inlineIndex={3}>
												60
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"10 x 7"} inline inlineIndex={1}>
												70
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 8"} inline inlineIndex={2}>
												80
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"10 x 9"} inline inlineIndex={3}>
												90
											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"10 x 10"} inline inlineIndex={1}>
												100
											</DiscordEmbedField>

										</DiscordEmbedFields>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>

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
								° usuario: Usuario a ver as informações (Opicional)
							</h5>

							<br />

							<h4>
								Representação do comando:
							</h4>

							<DiscordMessages>

								<DiscordMessage
									profile="RELBOT"
									timestamp="30/08/2024 13:00"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/gerais userinfo"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="discordofflineemoji marciel404 • marciel404"
										thumbnail="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
										color="#00008b"
									>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"identificationemoji Id"}>
												485801281621852175
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"Informação do usuario"}>

												<DiscordBold>Menção:</DiscordBold> <DiscordMention>
													marciel404
												</DiscordMention><br />

												<DiscordBold>Conta criada em:</DiscordBold> <DiscordTime>
													2 de setembro de 2018 às 10:20 (há {new Date().getFullYear() - 2018} anos)
												</DiscordTime>

											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"Informações do servidor"}>

												<DiscordBold>Entrou em:</DiscordBold> <br />

												<DiscordTime>18 de setembro de 2023 às 10:32 (há {Number(new Date().getFullYear()) - 2023} {((Number(new Date().getFullYear()) - 2023) > 1) ? "anos" : "ano"})</DiscordTime>

											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFields slot="fields">

											<DiscordEmbedField fieldTitle={"Maior cargo"}>

												<DiscordMention>
													Pai Da RE
												</DiscordMention>

											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"Cargos"}>

												<DiscordMention>
													Pai Da RE
												</DiscordMention>

												<DiscordMention>
													Suporte
												</DiscordMention>

												<DiscordMention color="#00fffd">
													Developers
												</DiscordMention>

												<DiscordMention>
													Admin
												</DiscordMention>

											</DiscordEmbedField>

										</DiscordEmbedFields>

										<DiscordEmbedFooter slot="footer">
											485801281621852175
										</DiscordEmbedFooter>

									</DiscordEmbed>

								</DiscordMessage>

							</DiscordMessages>

						</div>

					</div>

				</div>

			</div>

		</main>

	)
}