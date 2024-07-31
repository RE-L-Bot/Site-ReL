import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method != "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (!req.headers.channel_id)
        return res.status(400).send({ error: "NoBotRequest", status: 400 })

    await new RequestApi()
        .setApiEndPoint("ApiCentral")
        .setEndPoint("messageTicket")
        .setHeaders({
            channel_id: req.headers.channel_id,
            webhook: req.headers.quem,
            username: req.headers.username,
            "content-type": "application/json",
            authorization: process.env.AUTHCLIENT
        })
        .setBody(req.body)
        .request()
        .then((rD) => {

            if (rD.status != 200) {
                return res.status(400).send({ error: rD.error, status: 400 })
            }

            res.status(rD.status).send({ response: rD.sucess, status: rD.status })

        })

}