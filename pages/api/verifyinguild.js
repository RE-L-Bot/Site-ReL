export default function handler(req, res) {

    if (req.method !== "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    if (!req.headers.guild_id)
        return res.status(400).send({ error: "NoBotRequest", status: 400})

    fetch(`${process.env.URLAPI}/verifyinguild`, {
        method: "POST",
        headers: {
            "guild_id": req.headers.guild_id,
            authorization: process.env.AUTHCLIENT
        }
    })
        .then(x => x.json())
        .then((response) => {
            res.status(200).send({ response: response.response, status: 200 })
        })
        .catch((err) => console.log(err))

}