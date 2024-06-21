export default async function handler(req, res) {

    if (req.method !== "POST")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    await fetch(
        `${process.env.URLAPI}/login`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: process.env.AUTHCLIENT
            },
            body: req.body
        }
    )
        .then((response) => response.json())
        .then((data) => {
            res.status(200).send({ response: data.response })
        })
        .catch((e) => res.status(400).send({ error: e.error }))
}