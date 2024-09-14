import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.origin ||
        !req.body ||
        req.headers.origin && req.headers.origin.replace(/[https:\/\/]/g, "") != req.headers.host.replace(/[https:\/\/]/g, "")
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    await new RequestApi()
        .setApiEndPoint("ApiCentral")
        .setBody(req.body)
        .setHeaders({
            "content-type": "application/json",
            authorization: process.env.AUTHCLIENT
        })
        .setEndPoint("login")
        .request()
        .then((response) => {

            res.status(200).send({ response: response.response })

        })

}