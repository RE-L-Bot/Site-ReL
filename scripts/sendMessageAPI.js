import { constructMessageEmbed, constructMessageComponent } from "./constructs";
import RequestApi from "./ManagerRequest";

export default async function (e, opt, embedOption, selectMenuOption) {

    const langP = window.location.pathname.slice(1, 3)

    const channelId = (document.getElementById("formsInfoTicketChannel"))?.value;

    const Enviar = (document.getElementsByClassName("checkWebhookSender"))[0]?.checked;

    const nameWebhook = document.getElementById("nameWebhook");

    const imageWebhook = document.getElementById("imageWebhook");

    const QntCat = (document.getElementById("SelectQnt"))?.value;

    const CatCat = (document.getElementsByClassName("selectChannelCategoria"));

    const SLCQNT = (document.getElementById("SelectQnt").value);

    const SelectType = document.getElementsByClassName("checkTypeTicket")[0];

    const guildID = window.location.pathname.split("/")[4]

    let premium;

    await new RequestApi()
        .setApiEndPoint("thisAPI")
        .setEndPoint("gPremium")
        .setHeaders({
            guild_id: guildID
        })
        .request()
        .then(async (data) => {
            premium = data.response
        });

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
            defineNameToAllSelectsMenus: "Defina um nome para todos os SelectMenus",
            nameWebhookInvalidBylength: "O nome do Webhook é invalido, possivelmente você alterou no html para aceitar um tamanho maior"
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
            defineNameToAllSelectsMenus: "Defina un nombre para todos los SelectMenus",
            nameWebhookInvalidBylength: "El nombre del webhook no es válido, posiblemente lo haya cambiado en el html para aceptar un tamaño más grande"
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
            defineNameToAllSelectsMenus: "Define a name for all SelectMenus",
            nameWebhookInvalidBylength: "The Webhook name is invalid, possibly you changed it in the html to accept a larger size"
        }
    }

    if (
        parseInt(SLCQNT.split(" ")[0]) > 3 &&
        parseInt(SLCQNT.split(" ")[0]) <= 5 &&
        !premium.active &&
        !["basic", "medium", "master"].includes(premium.type)
    ) {
        return alert(messages[langP]["noPremiumBasic"])
    };

    if (
        parseInt(SLCQNT.split(" ")[0]) > 5 &&
        parseInt(SLCQNT.split(" ")[0]) <= 10
        && !premium.active &&
        !["medium", "master"].includes(premium.type)
    ) {
        return alert(messages[langP]["noPremiumMedium"])
    };

    if (
        parseInt(SLCQNT.split(" ")[0]) > 10 &&
        !premium.active &&
        !["master"].includes(premium.type)
    ) {
        return alert(messages[langP]["noPremiumMaster"])
    };

    if (
        SelectType.checked &&
        !premium.active &&
        !["medium", "master"].includes(premium.type)
    ) {
        return alert(messages[langP]["noPremiumMedium"])
    };

    if (Enviar && !["master"].includes(premium.type))
        return alert(messages[langP]["noPremiumMaster"])

    if (channelId == "") {
        return alert(messages[langP]["selectChannelToSend"])
    };

    if (Enviar) {
        if (nameWebhook.value == "") {
            return alert(messages[langP]["defineNameWebhookSender"])
        }
        if (nameWebhook.value.length > 32) {
            return alert(messages[langP]["nameWebhookInvalidBylength"])
        }
    };

    if (QntCat == "") {
        return alert(messages[langP]["selectQuantityOfCategories"])
    };

    if (!SelectType.checked) {
        for (const catsName of CatCat) {
            if (catsName.value == "") {
                return alert(messages[langP]["selectACategoryToAllTopics"])
            }
        }
    };

    const embed = constructMessageEmbed(embedOption);
    const component = constructMessageComponent(selectMenuOption["options"]);

    if (!embed || !component) return

    await new RequestApi()
        .setApiEndPoint("thisAPI")
        .setEndPoint("messageTicket")
        .setBody({
            embeds: [embed],
            components: [component],
            avatar_url: imageWebhook.value
        })
        .setHeaders({
            channel_id: channelId,
            quem: `${Enviar}`,
            username: nameWebhook.value
        })
        .request()
        .then((response) => {


            if (response.status == 200)
                return window.alert("Sucess")

            window.alert(response.response)

        })

};