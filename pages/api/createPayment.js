export default async function handler(req, res) {

    if (req.method !== "PUT")
        return res.status(405).send({ error: "Method Errado", status: 405 })

    fetch(
        `${process.env.URLAPI}/createPayment`,
        {
            method: "PUT",
            headers: {
                authorization: process.env.AUTHCLIENT,
                methodpay: "pix",
                value: "123",
                keymp: process.env.KEYMP
            }
        }
    )

}