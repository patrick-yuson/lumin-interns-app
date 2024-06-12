import express from 'express';
import request from 'request';
import querystring from 'querystring';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
const router = express.Router();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = 'http://localhost:5000/spotify/callback';

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}

const stateKey = 'spotify_auth_state';

router.get('/login', function (req, res) {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
    const scope = 'user-read-private user-library-read user-read-email ugc-image-upload user-top-read user-read-recently-played playlist-read-private';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    );
});

router.get('/callback', function (req, res) {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                const access_token = body.access_token;
                const refresh_token = body.refresh_token;

                const options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                request.get(options, async function(error, response, body) {
                    if (!error && response.statusCode === 200) {
                        const userId = body.id;
                        const newUserData = {
                            displayName: body.display_name,
                            email: body.email,
                            profilePicture: body.images.length > 0 ? body.images[1] ? body.images[1] : body.images[0] : null,
                            accessToken: access_token,
                            refreshToken: refresh_token,
                            spotifyId: body.id
                        };
                    }
                });
            } else {
                res.status(400).send(error);
            }
        });
    }
}); 


export default router;