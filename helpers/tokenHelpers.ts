import {ServerResponse} from "http";
import {ParsedUrlQuery} from "querystring";
import {checkToken} from "../api/sessionClient";

export async function assertTokenIsValid(query: ParsedUrlQuery, response: ServerResponse): Promise<void> {
    const token = query.token as string;
    const tokenIsValid = await checkToken(token);
    
    if (!tokenIsValid) {
        response.statusCode = 404;
        response.end();
    }
}
