const ends = ""
const url = `http://localhost${ends}`
const CLIENT_ID = "1064938979406921738"
const REDIRECT_URI = `${url}/{lang}/dashboard`
const API_ENDPOINT = "https://discord.com/api/v10"
const linkRedirectDiscord = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2F{lang}%2Fdashboard&scope=guilds+identify+email`
const linkRedirectAddBot = `https://discord.com/api/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&permissions=1635070044278&guild_id={guildID}&redirect_uri=http%3A%2F%2Flocalhost%2F{lang}%2Fdashboard&response_type=code&scope=bot%20applications.commands%20identify%20guilds`

module.exports = { url, API_ENDPOINT, REDIRECT_URI, linkRedirectDiscord, linkRedirectAddBot }