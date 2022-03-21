import { Container } from "./styles";
import { useState } from 'react'
import axios from 'axios';

import { GoogleLogin, GoogleLoginResponseOffline } from "react-google-login";

export function Login() {

    const [usuarioLogado, setUsuarioLogado] = useState(false);

    type AstroLoginGoogleResponse = {
        token: string;
        criadoEm: string;
        expiraEm: string;
    }

    async function sucesso(response: GoogleLoginResponseOffline) {
        const code = response.code;

        const respostaLogin = await axios.get(`localhost:7193/api/Auth/Google`, { params: { code } }) as AstroLoginGoogleResponse;

        if (respostaLogin.token) {
            setUsuarioLogado(true);
        }
    }

    return (
        <Container>
            <GoogleLogin
                clientId='<seu-codigo-aqui>'
                buttonText='Logar com sua conta Vaivoa'
                onSuccess={sucesso as any}>
            </GoogleLogin>
        </Container >
    );
}