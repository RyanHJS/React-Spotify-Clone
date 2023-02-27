const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const spotifyAPI = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {

    const code = req.body.code;

    const spotifyWebApi = new SpotifyWebApi({
        redirectUri: 'https://localhost:3000',
        clientId: 'b3e4115c92ab43e5a6d48712380d1b07',
        clientSecret: 'ac4fb1e745be407cb66f00e462d4c878'
    })

    // Retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            res.json({
                expiresIn: data.body['expires_in'],
                accessToken: data.body['access_token'],
                refreshToken: data.body['refresh_token']
            })
        }).catch(() => {
            res.sendStatus(400)
        })

})