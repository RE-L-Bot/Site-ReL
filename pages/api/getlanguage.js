export default async function handler(req, res) {

    if (req.method != "GET")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    await fetch(
        `${process.env.URLAPI}/getlanguage`,
        {
            method: "GET",
            headers: {
                guild_id: req.headers.guild_id,
                authorization: process.env.AUTHCLIENT
            }
        }
    )
        .then(response => response.json())
        .then(data => {
            res.status(200).send({ response: data.response, status: 200 })
        })
        .catch(e => {
            res.status(40).send({ response: e, status: 400 })
        })

}