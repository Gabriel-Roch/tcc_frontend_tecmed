import { jwtDecode } from "jwt-decode"

interface token {
    exp: number
    iat: number
    name: string
    sub: string
    rule: string
}

export const jwtDecoded = () => {
    try {
        const token_string = localStorage.getItem("token")
        const token: token = jwtDecode(token_string as string)
        return {
            token
        }
    } catch (error) {
        throw new Error("decoded Token")
    }
}

export const isTokenValid = () => {
    try {
        const token = localStorage.getItem("token")
        if (!token) return false;

        const decoded = jwtDecode(token);

        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
            console.warn("Token expirado!");
            return false;
        }

        return true;
    } catch (error) {
        console.error("Token inválido:", error);
        return false;
    }
};

