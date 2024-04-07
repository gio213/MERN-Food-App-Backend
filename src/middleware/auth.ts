import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URl,
    tokenSigningAlg: 'RS256'
});