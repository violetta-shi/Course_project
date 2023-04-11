import {getSelfResponse, loginResponse} from "./mockResponses";

const timeoutMs = 1000;
const respond = (data, timeout = timeoutMs) => new Promise(resolve => {
    if (timeout && timeout <= 0) {
        resolve(data);
    } else {
        setTimeout(() => resolve(data), timeout);
    }
});

export async function client(endpoint, {body, ...customConfig} = {}) {
    console.log(`Calling '${endpoint}' with body ${body}`);
    if (endpoint === '/api/v1/users/self' && customConfig.method === 'GET') {
        return respond(getSelfResponse, 0);
    } else if (endpoint === '/api/v1/auth/login') {
        return respond(loginResponse);
    }
    return new Promise(resolve => resolve({}));
}

client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, {...customConfig, method: 'GET'})
}

client.post = function (endpoint, body, customConfig = {}) {
    return client(endpoint, {...customConfig, body})
}