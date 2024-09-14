import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (!req.body.idUser)
        return res.send(400).send({ error: "User is not logged in" })

    if (req.method !== "PUT")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.origin ||
        req.headers.origin && req.headers.origin.replace(/[https:\/\/]/g, "") != req.headers.host.replace(/[https:\/\/]/g, "")
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    await new RequestApi()
        .setApiEndPoint("ApiCentral")
        .setEndPoint("cPayment")
        .setHeaders({
            authorization: process.env.AUTHCLIENT
        })
        .setBody({
            keymp: process.env.KEYMP,
            value: req.body.value,
            type: req.body.type,
            time: req.body.time,
            idUser: req.body.idUser
        })
        .request()
        .then((resp) => {
            res.send({ response: resp.response })
        })

}