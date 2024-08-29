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
	DiscordTime
} from "@skyra/discord-components-react";
import dayjs from "dayjs";

const nameCatCommand = "generals"

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
									Representação do comando
								</h4>

								<h3>Caso 1</h3>

								<hr />

								<DiscordMessage
									author="RE=L"
									bot
									verified
									avatar="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/avatar"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Avatar de RE=L"
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

								<h3>Caso 2</h3>

								<hr />

								<DiscordMessage
									author="RE=L"
									bot
									verified
									avatar="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/avatar"
									></DiscordCommand>

									<DiscordEmbed
										slot="embeds"
										embedTitle="Avatar de RE=L"
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
										author="RE=L"
										bot
										verified
										avatar="https://cdn.discordapp.com/avatars/1018958083764002919/a5a4bdda04141404a228cdf6a8aa8401.webp?size=2048"
										ephemeral
										dismissMessageClicked={() => document.getElementById("message-ephemeral-avatar").style.display = "none"}
									>
										<DiscordCommand
											style={{ marginLeft: "56px" }}
											slot="reply"
											author="Marciel404"
											avatar="https://cdn.discordapp.com/avatars/485801281621852175/b842e0d4d688fdcb71eb07d94909273a.webp?size=2048"
											command="/ping"
										></DiscordCommand>

										<DiscordEmbed
											slot="embeds"
											embedTitle="Avatar de RE=L"
											image="data:image/jpeg;base64,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"
											color="#00008b"
										>

											<DiscordEmbedDescription
												style={{ marginTop: "8px" }}
												slot="description"
											>
												Clique <DiscordLink
													target="_blank"
													href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADBAQsDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAQACAwQFBgf/xABIEAACAQMBBQUDCAcFCAIDAAABAgMABBEhBRIxQVETImFxgZGhsQYUIzJCUnLBMzRic4Ky0SRTkuHwFSVDY3Sis8JE8UV1o//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAApEQACAgEFAAAFBAMAAAAAAAAAAQIRAwQSITFBEyIyUWEUcYGRFaGx/9oADAMBAAIRAxEAPwD0Bphkaak88/lSBDdcDlmmGM5LNwz6+ypAEVdAdfbmsy3PsQO8NBTqauPXgepokDifLSmCHXqaBBo/GlUoA3XrRHjSpZA48OpopBQSwHE/GqVxDkM4GF4nqPHyq2NdQCceg9ppEnqo6jG96a6e6q8rg1UmWR3J2jJSeWEgasmfqnj6GrwJIB1GRnB4+tNWCGNiyhix5uxOOfdHAeyn1xnV8GvsIpUqVKAVKlSqBFSpUqhBUqNCoQNClSqEF7aRzSpVEAgmebG5ErFj9ZwD3fAE8/8AXky3iYSASKwCgOe6x3snQAjTz/zqzTgxHCrMclGW5qyPlUTb2fsv/hb86WX5K4Pl/nUW+aTShdWbHTqfIVu/VN+FXwybLnir55ED/OkRKFzutjP2tKgWeRj3FwOZPGnktod4k9Tw9K0QnKStlcopDwSc8fI0tf8AOot/BB4dRUgIIJBOKsUrKaDnGudadvDxpmpzwPlxoa9T76ayAZsE6ZHKog+p3uPLXT0qV1173jURGTnkKWaYB6nOSdAOXOnBt4/CowQdMYNPTdzx1OgxSL7DD9acPTzJ0ocM9BwppY6cqs6JRIVXnIv8BHxNMO6NQB5k5PtppCniPWonhVuB15Z4+0VnyRnLplsXH0kLMaaSapywyR51Yc8gnHtFMiW4kORK4QHBYNnP4eVc/IpR7NKp9F2kKWMYHTrxoBlLMoPeUKWHTe1FUhHUqGtLWpRA0qGtLWgQNGhSzUogaFLNKpQA0qFKoENKhRoABQo0KYJWkuTncjBBOm8w+ANPgheTLk5/aY6ty0qYrG4ZXVWVgQQwzkGpANxVCaqowF4kAdPCtWnUXL5hJt1wIAAAADTXHP1oq4G8GHhrQ0YBlOufTyNCRCwBAOQa6MrStFIjjJxp08RQViDw0NLXRT9YUAQx3dc4qvd6VyRKNdfHGmlP9vuqJQRoaflqtTEInY69cnBqPeJzk586c3E8+NR44+dGVgQ8EkGpo1C55tj2Go0wMZ/0amGfAHiaCXrHoGOG8aOnAUSMDh5Y5ChwBONenM0W6GoR0xpr8Kac6sQSdQB/SlkyKQuddGPQZ1wacSQuikkEAAcydMUFKyJDQCdOGmWI4gdKjwqgKqhVUYAUAADoAKkY7oCjU5yT1NV+1iMpiDAyBDIQNcKCF1PCubqMm914aIrixzMqK7tndRSzY44HIePSmxKyrlx9I5Lyfibl6aAeVNkw8kUWdF3biUeAJ7NT5kE/w+NBplN1DArHeSKeWUDhxRFB8dTWUcmqJmYXMK5OGt5yRyJR48H31LVPt1k2jDEhGI7W5Y413iXiXOemlAJadxGjueCjPrwFQ2czT28bv+kBaOX8aMVbSodozCNAnIAyuOoGij1qvsqQo9zbuxLOwudT9qQHeA8Mg4plBuLl9gGtQDA72PssVPmKIqpayb0lwvVmkHtwfypAluhvLvbue9uhseBOM0az7icx3uAdUggJXPFXZzwqERoURTVZXVWU5DAEGjRAHNKlpQyKJA0qGaVSiCpysRUMxmVd6PB3frAjOnUVEtxOeKKfLIpohL3dYkrgNz5BvOirFs5GGTGVOhB6VWWdwRmM+h/rVhZEfGQytyJGfQ45VvxZJdMplELoeXHTjxHlURTpx+FTgHBBycnjxHoaGDk/Ec6ulG+SljUYaA+2n7rdRQ3eJxRxTJ12VkTjVsa5poXgKkxkkeNOCgZ5nx/Kr2iIMaR4be100HjS4cPDBpKuBRHjSvgsQM50B86J/wDvxpAClSBABu4xgDUkcqGdC5xjGFzoAv3j504jIIJ7g1c/kPOq82/MQvBc6AaD1qrJaW2I0a9Klxcu2UiyBwLjifw0yxTBu5nOFBWPJHBIl32PtJ9lWlt0+0NAdANM+Z41FdmC3ghhIwJ3bMaDLyLnfZEXjliQPU9KxTwuK3MtjNPhEbz9hE8zYWacmbDaCKPGF3ifujA881Bs4u9xdyMrjEFsqGQEM6yNJLv4OuumM9KljtJJpPnF7gtvb6W4IaOMjgZDwJHIcB4nWisqJd7Wds4T5onizLEBgeprMWfgN/dpawsc4YjiOIB0AHieAqhs4P8AO4pGI+kiuQ7A5Xe3Y3Cg9ABp/nVFLj/a+1bm1UK628Rd2xlO03uzY46KO6vrWvdqttHZJEAO/NCOp7SE5JPpXSx6bbhlOXdFDyJySRTu5TPcAYJBbtSP2UISNfU/y1bmhez+YSYBaOV4piOsneA8sgj1puxbcXV09ywzFEwdcjGd3Kxj4t61ev0aW3vAoBcBpY8/fjbtBjzxj1rTiwL4Lg+2LOfzWTFwEMgIwELjyAzWLbTlbmQlu7G0SEDGm+gZs+0eyrkc4ewlIOqpuDxV8BfjXOw3BXaF4rthJpezjUjmgKqwPiAR6iuNHG5XXhqtI7GsK/Mvz69kQAmIWqoObr2ILr056eI8a17aTtYI2+0But5jSs7sTcXu1Qp1SXCnlvKkagVfpIKeTa/sVze1WT2FwrBY85VxvxHlgjOK0AcEHxBrnYmaCXcGRlmki491gcsnpxHmelb0MomjVxx4MOjDiKpy43jk4sZPcrQ23P0ZU8Y5Z4z/AAysKdOXEFyYziRYJmQjGQyoWHGqSz9heXqN9RpyzeHaIrhvfWku6SoOCpwD0KnjVZBiOHSNxjDojjyYA0SQAWJ0AJJ6AVBY5+Z2yn60SGFs6HMTGI/CpJ9YLkf8ib+QmiQnQglTxBxqOlBIYlQAIuVyCcZyVONSaqWM2QI2OoAKHqOOKvFt1iDwYg+jDFbdK1bsqyoO5H3e6vAEaDWiFQjRQPQURgAAdSKRPOt7RUg4wNKRzgHSj40qiQrG0f8AXGlijpUoWhYGSfGiQacfzpDnmryDcU3BOKlwKaRSNWMhlHBo0jS0FjSOR8abu4yfSn4pY1FLtEsbjTH3sD21DKsRkEm4pkCtGrkDeCE5Kg9DzqwdMeRP5VXbjWPVPw0YVwNrBm7Sa52gsZOtzNJMwJG5D2vYjBH2mxhfInlW+Dgg9CDjrWeLYWlpcje35JpmmmkIwWZ5d4ADoBoPLxrnp0Xo5LY72lpLKs8kkUNxbvE8sQJZGDrIhwATgYxwNdFtK6tZ7KD5ncxTyfOYY03JFMg7SKSMuynDaZydKqxfJuOeztZ1uHjeSBJXJZSgLDeOQ44fxVmz7B2ogZ0EF1CuomtgZQo6usRdh6A16RZcU403XBz/AIWbG+Ff8na7MiFpHHCVKkpls/fA/wBCg28Q+6xViGCuACVJBG8A2mRXDwPtyIhYJ50O9iJY7wbsn7vfYIfLj4VbN/8AKuLRzdnH37eCb2lVJq1OL6kgNz9i/wCi/CJLRZbSRwwhdYnfUbyRkOr6knVcc6oWNptGa2mZ7KKbtS/YyOwEkDM3ahkKyA6Eg4OeFRHaF242pLefpRYtKuYexyY0MWowBnVadZfKG9it4oxBYsAM6GYHJ11w5+FY8GCss0i7JmWyLfBu7LnYlo3BVnB3kbikqd11I6jX2VJs8Ey7XkP2toTqP4cCsa02k099NKYUhZityio7MrOuFkxvDnofU1NBty1szdQPbXDkXl25eN4sHekJ4Ng6cOPKqdNgePUSiNkyRljUr7L+0rUspnj0YEMT91xwfy5HzqOwugrKW0jk7sgP2HBxr5cKiPyl2awKta3m6RhgRAQQf46yYtpWj3xt4lmRJwzRmYIMuvADcY6kcfLxq3W6dyjvS5QuDNG9t9mvtAdltCWZQSJILUzADPcAaMPj9nGvgT0q9Z3HCFzr/wAMnh+H+lVIJTNfWSOA27aSq28Mh1RzgH/EQaa8TWszW5JwqiS3YnvNDnAyeqnunyB51w2ba8NeH610vDduZG9JFWX86kkUtFcKOJhmUeZRgKqWk7Sy3Ct9bsrdydO8RvRk+4VoKMhx+y3woxVtCPgyI45kWIsCkiqhYZzhgBwPStPf7SON+eqOOh4j86laBXQciAMH04eVQrGyh1HmRx1GoIrpLC8crXRRv3qn2Sq2QBxPCpfHwquowQfGpxkk+HCtSXBUmHnilSIJOaBzrRSCHl5UcUBTsUaAPJ1PnQxROMmgTxpxRUPOlmlUDYhSPKlR0GBjjQogCM5xzpkkkUCdpM4RR14k9FFR3V3BZJ2kmrMDuIDqccz4VyN7tO5u5DqW5Kq5wByAFFRsiVnSRX6XAupVG7FCY4l1yzMe8c+0VMa5y0lMWz4t/Hflnu5ca90MY0GnPA99dCpJVSVKkqCVPFSRnBxXF1EryM1xVINQXf6u/mn81T1Bd/oT+NPjWYdFC+k2pB8n7KXZ9z83lhaxE8nZxyEWzuIZCBICO7kMfAGsC8uvlLs/aF/DJJY3jbPSBriaSzW2ZDKu+o7ezKuMAjXe58K7GwSOXZ0MUih43imhkVtQyl3RlNZ13sS8ml2iy3MU1ttG1trW9t7kSI0ot13UkMyFu9jAPdHD29rTuHUyvNGdXAxbXa2zr+aK12pFJa3FzhIrrMciyOSFVZnC7jgkgAsgIyNTnNbX+8NnOYnjW+t0+zu4nVR9zOW9Mtw5VUi+T1z87ikntrQ2UVhPZrbw3BLMZNwAuZIgMAA+uOlbItpktIRO5eaBSu/vFmaMHuh2OpYDGTzx41M0YJ3BjYHNqp8Mr3EFrtS2sZ7HdYJewl8HBWMNiZHUnRhgZHh7bUmydmy534I2z95Eb4ijan6VyEA7WMtM4yN6SMhVJA0yQdTx7vsvdBzOgqn9i/rswL3Y2zra2nu4lihktF7dGEYGd04Mfd1747oGOJFY0cWwpoY5Oxubi6naWZhE0kYYvIxGN1ix5cI66W7Ed4u/IX+bQzMttGjlFuJUyjTSFMMVGoQZ8eYxTUzWY7HZdpCZ+yabcC9laW0QBbtrkxAEk4O4ucnjoNS0XLdafIkopq5JV+xi/wCwJ5d13RdnW5butc3UiM+OQWQs58e6tW4fkpYT6m/mupIxvKtsZIVQ5GqnVs9MtXPmbbt0Nk7Rvb/aCvteR4bR7bMSKqnGF7MaDrg/CrVlsnal1Z7Qni2vtVb2HacuzbdPnUwjkkCpIHY66KCS+vBeprXKGVRtyMUZ4nPiP+jbsRIu0LNJdJohewSjhk9mjq4HRgMj/Kta8t2uIu5jt4iZIMnALYwUJ6MND6HlVE2L2V/8n0SWW4ZbWZLuaY700pVezWZyT1Jz5+Fa9cPLHbLg2N8mRYOGuomGQJbadMN9ZWR0bdI6jvA+VbELEvcD7qr70JrLniNvtCynUfRXNyVfGTuTyROpz4PofMH71W7aTN1tMZyN8geHZoI8fGhHiSYr5NNQCqZ5qvwFMwQcjkefMdKrbP2jbXccS5CSbkY3WOckAcDV7dzn313l0YGmmQ7o5Zxk4HSpN3h6U7cogaUaIhuCKBB6VJikVqDEWDR1p+6DS3RQJYxjqaGetBvrNrzoaYqAHA6mkW5U3+lNBJz0oNkJAcZPDFQ3d1Fax9q572vZrzY/0oyzJDGXfgMhQPtt0/rXM3t280jO7ZbgOijkFFPBOQ0Y2V7y4nupGkmZteCjjgcqzriYQxndwC2cY5ADJNTO+ckn1NY9xKZS7YJG6VVRplenrWiqRZVGncXBit9n2oJykdpNOfBd10T8z6V3J4sfEmvNJJHf5xK577B3OOAOOA8BwHlXosr4tnkHOEEHxcAD41wdVj+Go/yXp2yaoLv9D/GnxqSNw8cbj7Sg+vOorv8AQ/xrWAZdkuzAVsoB+1cH2zOauVT2Zn5onhLdAeQmerldOPRYGmSJvoyZxvaZ9afSpgjERUUKowPj502dzFBcSj6yROV/GRhffiplGT6E+6mMqupRvqkqSPwsGHwqAuytLbMI4Fj1EMax7nUKANOVTNCjkOGljfdALQyyREgcm3CAfUGpaFRcEfKpmbb7E2baoI4DdJGpYonzmUohbOdwMTj0qey2dY7PQpao6hmdiZJZZCWkbfY/SE8Tqf8AKrlCmc5NU2IscU7SM6fB2pB1Sxx/jkkP5VYqpIc7Vm/Zit4//wCRk/8AarLuEAJ5sqjzY4rnZfrZH2Eokm4rKCN+NxnkysGU+lZWz5ke7mZTkST3y6Z+ssr5HurYTR1PIEE+Q1rkNg3P9s3Cfrzi4XxErFX/ACPrQhByi2vALuiKzZ1it3RyGMcbHPDUA8RXVbM2pv7sNzoxwEkJ0PgxrkYDiGEDkij2DFXIZipHTxr0ijcUZpRs77do7tY2zNpghIZm7vBGJ1XwPh/ry294UjVFdUM3daRFOLCm5FKAAWlu0s0c+NAhVwd5qWKfxY44UgpyTUoBGQ2MU1iscbOxwo49Seg8ambdQFmIVQMsTwFc/tG/EhKpog+qOfmfE0VG2NFWQX960rHXAGgHICsd2JNPkcsSagJrUlSLUqK93IVjIB1c7vpz/wBeNZ1WLp9+UqOCDdHnxNK0s2uzvMSlsCQzg4MpHEIR9nqfZ1Cyddgk65IVWWVXWJN8sHjBzhS+6e6DzPM44c8c+8kkzs2xOdZIbXPj9EGNczEiOUCKEjaLEapoIbQnAVccDIdW8B4Zrdd/7BsZNNLVDgcsKsY09K4+udpMbBLdKi/YPvRMnNG9za0+8/QH8S/Gs7ZtyrXNxEPst2J8WCh8/EelaF7pB/GtcyjR6S7M/VB/1F3/AOZ6u1Q2U29ayD7l3dp7JCav10YdIcVKlRpyDkx3/wADUyq7XYSUx9lIRqGkBTAPTdJzRjuoZJDEFlDAZ3mjIjbwVql8B2tFihRoVABoUqZM25E5HHG6vizaCoHt0ZEcnabTvWz/APIKDySFFqS+l3Wt0B4MJW9DgfnVOxdJLpnRgwku7jDDgd0mPT2ULqTtJpmHDO6vkulc7I7kxWuTWnfs7e7l/u7W5kHmsTEVwFjN83u7GTOAJI43I+6+FyfI4PpXa7SlCbH2nLkD+wsMnQDtN2P864Btc/lW/RQU4yT9KJOmWbWbB7JjoWbczyOTpWgrGsFN9VQM284A3m+83Emta3l7VA32ho48etdqKpUIaUExQjB5ium2ftASII3PeAAQ59x/KuPVqu287Iy686ko2K1Z2hc6Z8qb2hzjhiqVpd9vGFJy468wOdWV6njnFZXxwVMl3jmlvmma5NHFQBMBj2mjkAZ0HMk8PE0DnLeZrH2jtFQphibIx32H2j0HhTRV8DJWR7U2iGJijP0anjzY8M/0rnpJN4k5p0spcnNVya0xjRalQCeOtRs2AzHgAT7KcahuDiJ+rYX20SFKGBrqYRnIT9JOw4hM/VB6tw9vStmZfoliQbokeK3AUYCo5wcAeGar7OjCwPL9qaRj/ChKKPcT61acEm3weE6n1KOBWScrZlm7YocENJ/eOzjwQHdQD0AqyswFvEzHK2sUqt5RO7Ea1WiIMUJHDcXHwqOV8W1zHzku+xx+y27M3u09axamG6KX5LdPLbJv8C2fM0V1E5+tIhLeMiHtPzauovWBtww4F4yPIgmuOcvCQ/2oXSQ4/ZOWHsyK6ZpRJs9Nc9nMi+a4JU1j1MNskzThluRa2O4KXqZ4Xcze3Glalc3s2X5tLcz6dlJdOl1x7oKR7so8uDeGv2dek/1pwq+H0o0sNCmSRl8ESzRkaZjbAPmrAj3VH2V2Pq3RP72GNvaU3TTkFNBvneQgNzB4Hxp0MIj1OrnieQHQUz/eQ0xaMBzzKhPpgj30e0vFHetkb93OvwdRQDbqielUInfna3QOugWIjT9oPipgcgEggkAkHGR4HGlEUNYe27/skWCJsSOWUEHVQNHf0+qvifCtG9u47WJyz7uF3nYDJRfADUseQrzibbM13tDtMYt5XjhjjON6OIHC94c9ct5npT48byN14VZcixR57fR0WzpBFDA4z3RMU8CWcCnSMyxzMurJHIyg8CVUkZqKz/VLU9Yw3+LLUbqQJC4zhpfoE83BBPoMmuXJbptL7lqpRtmldyJLsSMk924FjHxGoeRWxr5Vx95aPbZkTvW/FjzhyeJH3fh5cN95Vf5P7DjfIEsqIx/u+wRxvHPQ7tQIxdBvgb3ejlXiN4d1gR/rjXT0icIv9zBmnUuDnCKmtpezkGT3W7rf1qS8tPmrgov9ncgRnOezb+7P/r7OWtYCurF2gxd8o2QalVqq2778SE8R3T5ipwacc07O5aN1IJ0INdJBKswEgxyyB1rjUYgitnZ92UYAnQ4B8qqnGxJKzoM4zpwpb1BTvDQ5BxjHMUsN41RZUVdpXbqHjXIU/W6t5+FczPIzE6muov7XtEZxqw+t4jrXMXETIToaux1RbHoqMTTKcQabV4401XuziNfxj3A1YNQXQzF5MPgRQYGXbQYtLT9xGfaoNPlDGNioyyESJ+JCGHwptt+rWvTsIv5BUuoxWF9mNkUJXDopyqtvprn6OX6RfzHpTNx2uWLA9kgEwONGkZRH7gvvpfopB91SV04CKRsr/hbT+KrFBpPsidFOcAStkaEA+YIwavWMrG0WMnO4eyfPHMJKqT6YqndDBjbqpB9Kg2ZeBr3aFnyCRyp1LqAkn/rWbVQ3Q3Lw0aaaU6fpaj2tFY7UurO5IW2nMEiSHhDI0Sqd/wDZPM8vI6dRZ3IgKW8h+hYhbdyciNjwiY/dP2D6dK84+UB3dpv0a3tj/wBpH5VZ2R8oTbItnfKZrPG4jAZkhXhu45r4cRy6VfDTOWGOSH2Lo6qKm8WT+GepUqy9m7ShukjTt0mV8C2uFYETf8uTmJB0IGePHIGnWZquzUGlSoVCBqtd3cdrGzMyhsZ11C50BIGuTyHOhd3sVqpycvkKAAWO8eChRqWPIVzO0trWmzz218xe8OWgso3UyoWGN+ZhoCeZ9ADxJUXJ0kNxFbpOkP2pMYrLaF7dOFPYTxWkbEb3bSxsg85DnXHAepPBWY3rmAH7O9KRyxGpIA9cU/aW1bzacwluGAVMiGFNI4VPJAdfMnU+4DZ2TJdyf3dpJ/3/AP1XUx4Hhxty7Zx9TqVnyLauEdtaDFrZg8Rbw/yCql0xluljXhAAg/euA7H0G6PbV5SsUKs31IoVZvJEGlZtqGeRnc5c78rn9tzk1wdLDdkcvsbtRPbBRJoHD2dnaPwgk2qsiniFkmVB7s4pkJKuA3GRCr8P08BCMdOowfSnRoy3N6xGEbsTGepK7z++my9xpGGO60F0Ouh7GT3V0oR2qjDN7mTvHHKjxyDKOMMOfmD16VgzQvBI8LnJXBVsY30PBv6+IroDVLaUQaKOUDvROFJ/5cmhz64q6EqdEhKmV7P9G34z8BVoVXtRiIeLMfyqwOda0ah4NTwyFWGtVxUiA1GE6jZ1zvgRMfw+B6VqYPh7a5ixLdogGd45wBxONSR5V0SspVScZIBPe51kyJJlTXJcaPOcjjWHtTZ+6pljU7h0P7Lf06V0RZcnzNRSPC6vGV7TeXdZFxjB+83AUU6dkR57KhUkVCRWvtWzmtJRvqOymLGF1JZc8TGSQO8PLX00y2GtaYu0WERFRzDMUg6DPsOalppAIZeRBHt0okJLJt60tsH6qdmfNCU/KrFUNnNui5gP1o5BIB+y4wfeD7av1ilwzJJUyKYLubzfVXSQdYn7rf19KMZYruscvGTG5HMr9r14+tSYBBB4MCp8joarxaOueLxmJznQyQHd94PuoCgvMdmnXe0HhjWsN5fmW1LC84RyMI5T4H6J8+hB9K1rqQM+6PqoMZ8edY+1Yw9rvfckXP4XBQ/lTxSl8r94FbceV4H5Ud3aEB+9ZRnz3ZJFrB3609sXHzqLYNwT332aUk69pDM0be/41j5rdoY1gjF+X/0z6qV5W16XYLu4t2LQyvGzDDbpwGHHDDga6Sy+W23LdEjnEF4q6B7gMsxHQyRkZ8yK47epwc6Vonp4ZPqQmPUZMf0s9ET5fRYHa7NfPPs51I/7lBpTfL6Iowg2dIHI0Mk6AD/CpNeeb5pb5qj9BiNH+Qy/j+jduvlJtq4eR+3WHeyF+bpuNGh4qjnLDPM5yevKsV5SzMzEksSzEkkknmSajL0wmtMMMMf0ozZM88rubsk3jU0EsyShY2IMwjgYcQyyPu4I+FVc6VbsF37zZ4P27y1GPDtFOKXMlsYuJ3JHebQfdhWMcZZAp/dp3j790VBaEZcfaOCPECor6YS3Uig6W5MH8YO8/vOPSo0YqQwOq6ivO6bHtxr8nX1E906+xp61DMoPrbXinyCK1SIwdVYcCPYelQzlgWwM4tZlGvFpnSJa0lBMuSqHqqn2ioL44tLgH7XZKPMyLirOAAB0AHs0qred82sXIymZx+zENPeR7KMeWgx7GIm6qL0AFPApU4CtptCBnFaVhsu+vgrxqIrYn9YmGQ4BwexjByfM4HnVW2tpLueC1jyGmbDMP+HENXk9Bw8SK7oCO3hRY1AWNVihTkMDCjyGNaqyTrhAZShsrSzUwwqWYgfOZpDvSPwKoTwA54GBwp3ZR8gMcqeudcnJJJJPEk8TTseArI/m5YhYKZJ7Rt7XO6MhfXmaORjAAAHTSk2cmhTj0RTwQXUMkE6b8UgwwyQQRqGUjUEcQa4+/wBn3FhIEkPaROxEE4GBJgZ3XA0DjmOfEdF7Sori3huoJreZQ0cq4IPIjUMCNcg6g08ZbSHAkVGRirt3ay2kxikBIO92chGA+OKnlvDn7fKqQa0pp8hKhbsLuGY6JL9FIeQ3sDJ9cH21pmqE0QljdCNSDjzo2l4XTcmz2kfcdscSBoSPGqMsfTPlXpeqndOYSxBwWaKVNOBH0UntBBq0WQKX3hu8cisy5cysHOgyUx0Vxu/0NUopAxqtdpv2t0vPsnYea98fCpgSyqx44GfPgaW6Gyp4MCp8m0pk6dinKSSM8UMXKFpnQ/vSpI93vqDOfPmKlYFSVPFSVPmDio2Q4DYI6NjTyrtQjS4OfKVvkFLNDJ4MMePKjirSpizSyaVKiQVKlQxnQ8OmeNAgh3vwj3mrllOlrd2Vyy7wgnWbdH2mQEqPbiqwBIJAO6NCeQpyjUHoc1XOO6LT9LIS2tM6TZ7O9pHI53nleeV2+8zysxNXVNVLEbtlZDrCrerd6rQritJOkdFNvsu2r4JjPPvL58xRz2k3LBlJH7u27unm5PsqmZWiBlX6yDeQdW4KPU4q7bAEMwOVRY7dTzJQbzn/ABE+ylGJ6qsd+aV+IX6BD4ITvEeZz7KsyP2cbuPrADcHVycKPbVVV3VVRrujGeZ6mrMS5stxrmx1SKABkkADJJPAAakmmir+zbL5/dxwMCYIgLi78Yw2Fiz+2ePgD1rQ3Ss0G78n7EwwG7lULNdqpQNxith3kBzwJ+s3oPs1qPvSEOM7uMRj9k/a8zTXZ5pGgjKhY91rpmXKknUQDB4kaseQwPtaW1Ksd0jdbjg8/FTzrI/m5FbKwjbpR7M9Kt7o6Ut0dKG0UZzNGlSoloKNKlUIc18oP0Z/6+1/keuebhSpVfj6IR86zo/1m984vi9KlRn0VZOi3/wW/eLVeX9HL5D+YUqVZjKNX6p/HJ/O1PX6y+Y+NKlUYPTkpf0k37yT+Y1Kv6g/71vypUq7uP6UcvJ2U/st+GmpwXypUqf0Hg6lSpUQCNDrSpVAll/1W0/HJ8KiHA+tKlSyIjqbT9Vs/wDp4f5BVgUqVcJ9nUQ2Xgn76D/yCtCw/VY/3tz/AOV6VKlHQ+5/Rx/9RD/7VGONKlV2HovxdD1rpPkzx2v+Kz/kkpUqsyfSXGzY/wD5D/8AZXv84q0/1rf9+P5aVKsyEfRYNClSphT/2Q=="
												>
													aqui
												</DiscordLink> para baixar a imagem

											</DiscordEmbedDescription>

										</DiscordEmbed>

									</DiscordMessage>
								</div>

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
									Representação do comando
								</h4>

								<DiscordMessage
									profile="RELBOT"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/botinfo"
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
									Representação do comando
								</h4>

								<DiscordMessage
									profile="RELBOT"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										slot="reply"
										profile="marciel404"
										command="/botinfo"
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
									Representação do comando
								</h4>

								<img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/ping/img.png`} alt="imageCommand" style={{ width: "60%" }} />

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
									Representação do comando
								</h4>

								<img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/links/img.png`} alt="imageCommand" style={{ width: "60%" }} />

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
									Representação do comando
								</h4>

								<DiscordMessage
									profile="RELBOT"
								>
									<DiscordCommand
										style={{ marginLeft: "56px" }}
										profile="marciel404"
										slot="reply"
										command="/serverinfo"
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

											<DiscordEmbedField fieldTitle={"botemoji Meu Dono"} inline inlineIndex={1}>
												4.0.0
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"botemoji Meu Dono"} inline inlineIndex={1}>
												4.0.0
											</DiscordEmbedField>

											<DiscordEmbedField fieldTitle={"botemoji Meu Dono"} inline inlineIndex={1}>
												4.0.0
											</DiscordEmbedField>

										</DiscordEmbedFields>

									</DiscordEmbed>

								</DiscordMessage>

								<img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/multiplication_table/img.png`} alt="imageCommand" style={{ width: "60%" }} />

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
									Representação do comando
								</h4>

								<img src={`/images/commands/${nameCatCommand}/${window.location.pathname.split("/")[1]}/userinfo/img.png`} alt="imageCommand" style={{ width: "60%" }} />

							</div>

						</div>

					</div>

				</div>

			</main>

		</>
	)
}