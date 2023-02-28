import React from 'react'
import { Container } from 'react-bootstrap'

var scope = 'streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
var redirect_uri = 'http://localhost:3000'
var response_type = 'code'
var client_id = 'b3e4115c92ab43e5a6d48712380d1b07'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`

const Login = () => {

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <a className='btn btn-success btn-lg' href={AUTH_URL}>
                Login with Spotify
            </a>
        </Container>
    )
}

export default Login