const start = "localhost"
const ends = ""
const protocol = "http"
const url = `${protocol}://${start}${ends}`
const CLIENT_ID = "1064938979406921738"
const REDIRECT_URI = `${url}/{lang}/dashboard`
const API_ENDPOINT = "https://discord.com/api/v10"
const linkRedirectDiscord = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${protocol}%3A%2F%2F${start}${ends}%2F{lang}%2Fdashboard&scope=identify+guilds+email`
const linkRedirectAddBot = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&permissions=582183853288694&response_type=code&redirect_uri=${protocol}%3A%2F%2F${start}${ends}%2F{lang}%2Fdashboard&integration_type=0&scope=identify+guilds+bot+email+applications.commands`

module.exports = { url, API_ENDPOINT, REDIRECT_URI, linkRedirectDiscord, linkRedirectAddBot }
