export default function handler(req, res) {

    if (req.method !== "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })


    fetch(`${process.env.URLAPI}/verifyinguild`, {
        method: "POST",
        headers: {
            "guild_id": req.headers.guildid,
            authorization: process.env.AUTHCLIENT
        }
    })
        .then(x => x.json())
        .then((response) => {
            res.status(200).send({ response: response.response, status: 200 })
        })
        .catch((err) => console.log(err))

}