import Config from './config/config.json';
import Request from 'request-promise';

const send = (url, method = 'GET',) => {
    return Request({
        auth: {user: Config.myapi.account.user, password: Config.myapi.account.password},
        uri: `${Config.myapi.api.path}${url}`,
        method: method,
        headers: {referer: Config.myapi.api.path}
    });
};

send(`groups/117918/calendars.json?results=all`).then(
    (result) => console.log(result)
).catch(err => {
    throw new Error(`HTTP Error (${err.statusCode}) on ${err.response.request.href}`);
});