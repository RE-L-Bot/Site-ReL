import RequestApi from "@/scripts/ManagerRequest"

export default async function handler(req, res) {

    if (req.method !== "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (
        !req.headers.access_token ||
        !req.headers["sec-fetch-site"] ||
        req.headers["sec-fetch-site"] && req.headers["sec-fetch-site"] != "same-origin"
    )
        return res.status(400).send({ error: "NotSiteRequest", status: 400 })

    try {

        await new RequestApi()
            .setApiEndPoint("ApiCentral")
            .setEndPoint("gGuildsDash")
            .setHeaders({
                authorization: process.env.AUTHCLIENT,
                authorization_dc: `${req.headers["token_type"]} ${req.headers["access_token"]}`,
            })
            .request()
            .then((data) => {
                res.status(200).send({ response: data.response, status: 200 })
            })
            .catch(e => console.log(e))

    } catch (e) {
        res.status(400).send({ error: `${e}`, status: 400 })
    }
}