import axios from "axios";
import { constructMessageEmbed, constructMessageComponent } from "./constructs";
import RequestApi from "./ManagerRequest";

export default async function (e, opt) {

    const channelId = (document.getElementById("formsInfoTicketChannel"))?.value;

    const Enviar = (document.getElementsByClassName("checkWebhookSender"))[0]?.checked;

    const webName = (document.getElementById("nameWebhook"))?.value;

    const webImage = (document.getElementById("imageWebhook"))?.value;

    const QntCat = (document.getElementById("SelectQnt"))?.value;

    const nameCat = document.getElementsByClassName("nameCategoria");

    const CatCat = (document.getElementsByClassName("selectChannelCategoria"));

    const SLCQNT = (document.getElementById("SelectQnt").value);

    const SelectType = document.getElementsByClassName("checkTypeTicket")[0];

    const guildID = window.location.pathname.split("/")[4]

    const premium = await (await fetch("/api/checkPremium", {
        method: "GET",
        headers: {
            guild_id: guildID
        }
    })).json()

    if (parseInt(SLCQNT.split(" ")[0]) > 3 && parseInt(SLCQNT.split(" ")[0]) < 5 && !premium.response.active || Enviar && !premium.response.active) {
        return alert("Você não possui premium basic")
    };

    if (parseInt(SLCQNT.split(" ")[0]) > 5 && parseInt(SLCQNT.split(" ")[0]) < 10 && !premium.response.active || Enviar && !premium.response.active) {
        return alert("Você não possui premium medium")
    };

    if (parseInt(SLCQNT.split(" ")[0]) > 10 && !premium.response.active || Enviar && !premium.response.active) {
        return alert("Você não possui premium master")
    };

    if (channelId == "") {
        return alert("Selecione o canal a enviar")
    };

    if (Enviar == "webhookMessage") {
        if (webName == "") {
            return alert("Defina o nome da webhook")
        }
    };

    if (QntCat == "") {
        return alert("Selecione a quantidade de Categorias")
    };

    if (SelectType.checked && !premium.response) {
        return alert("Você não possui premium")
    };

    for (const catsName of nameCat) {
        if (catsName.value == "") {
            return alert("Defina um nome para todos os SelectMenus")
        }
    };

    if (!SelectType.checked) {
        for (const catsName of CatCat) {
            if (catsName.value == "") {
                return alert("Selecione uma categoria para todos os topicos")
            }
        }
    };

    const embed = constructMessageEmbed(opt);
    const component = constructMessageComponent();

    if (!embed || !component) return

    await new RequestApi()
        .setApiEndPoint("thisAPI")
        .setBody({
            embeds: [embed],
            components: [component],
            avatar_url: webImage
        })
        .setEndPoint("messageTicket")
        .setHeaders({
            channel_id: channelId,
            quem: `${Enviar}`,
            username: webName
        })
        .request()
        .then((response) => {

            if (response.status == 200)
                return window.alert("Sucess")

            window.alert(response.response)

        })

};