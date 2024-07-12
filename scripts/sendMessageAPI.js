import { constructMessageEmbed, constructMessageComponent } from "./constructs";
import RequestApi from "./ManagerRequest";

export default async function (e, opt) {

    const langP = window.location.pathname.slice(1, 3)

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

    const messages = {
        br: {
            noPremiumBasic: "Você não possui premium basic ou superior",
            noPremiumMedium: "Você não possui premuim medium ou superior",
            noPremiumMaster: "Você não possui premium Master",
            selectAllCategories: "Selecione uma categoria para todos os topicos",
            selectChannelToSend: "Selecione o canal para enviar a mensagem de ticket",
            defineNameWebhookSender: "Defina o nome da webhook",
            selectQuantityOfCategories: "Selecione a quantidade de Categorias",
            selectACategoryToAllTopics: "Selecione uma categoria para todos os topicos",
            defineNameToAllSelectsMenus: "Defina um nome para todos os SelectMenus"
        },
        es: {
            noPremiumBasic: "Usted no posee premium basic o superior",
            noPremiumMedium: "Usted no posee premium medium o superior",
            noPremiumMaster: "Usted no posee premium Master",
            selectAllCategories: "Seleccione una categoría para todos los temas",
            selectChannelToSend: "Seleccione el canal para enviar el mensaje de ticket",
            defineNameWebhookSender: "Defina el nombre del webhook",
            selectQuantityOfCategories: "Seleccione la cantidad de categorías",
            selectACategoryToAllTopics: "Seleccione una categoría para todos los temas",
            defineNameToAllSelectsMenus: "Defina un nombre para todos los SelectMenus"
        },
        us: {
            noPremiumBasic: "You do not have premium basic or higher",
            noPremiumMedium: "You do not have premium medium or higher",
            noPremiumMaster: "You do not have premium master",
            selectAllCategories: "Select a category for all topics",
            selectChannelToSend: "Select the channel to send the ticket message",
            defineNameWebhookSender: "Define the webhook name",
            selectQuantityOfCategories: "Select the number of categories",
            selectACategoryToAllTopics: "Select a category for all topics",
            defineNameToAllSelectsMenus: "Define a name for all SelectMenus"
        }        
    }

    if (
        parseInt(SLCQNT.split(" ")[0]) > 3 &&
        parseInt(SLCQNT.split(" ")[0]) <= 5 &&
        !premium.response.active &&
        !["basic", "medium", "master"].includes(premium.response.type)
    ) {
        return alert(messages[langP]["noPremiumBasic"])
    };

    if (
        parseInt(SLCQNT.split(" ")[0]) > 5 &&
        parseInt(SLCQNT.split(" ")[0]) <= 10
        && !premium.response.active &&
        !["medium", "master"].includes(premium.response.type)
    ) {
        return alert(messages[langP]["noPremiumMedium"])
    };

    if (
        parseInt(SLCQNT.split(" ")[0]) > 10 &&
        !premium.response.active &&
        !["master"].includes(premium.response.type)
    ) {
        return alert(messages[langP]["noPremiumMaster"])
    };

    if (
        SelectType.checked &&
        !premium.response.active &&
        !["medium", "master"].includes(premium.response.type)
    ) {
        return alert(messages[langP]["noPremiumMedium"])
    };

    if (Enviar && !["master"].includes(premium.response.type))
        return alert(messages[langP]["noPremiumMaster"])

    if (channelId == "") {
        return alert(messages[langP]["selectChannelToSend"])
    };

    if (Enviar) {
        if (webName == "") {
            return alert(messages[langP]["defineNameWebhookSender"])
        }
    };

    if (QntCat == "") {
        return alert(messages[langP]["selectQuantityOfCategories"])
    };

    for (const catsName of nameCat) {
        if (catsName.value == "") {
            return alert(messages[langP]["defineNameToAllSelectsMenus"])
        }
    };

    if (!SelectType.checked) {
        for (const catsName of CatCat) {
            if (catsName.value == "") {
                return alert(messages[langP]["selectACategoryToAllTopics"])
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