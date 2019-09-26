const send = async (res, body, status) => {
    res.status(status);
    res.json(body);
};

ok = (res, content = {}) => send(res, content, 200);

badRequest = (res, errMsg) => send(res, { err: errMsg }, 400);

noSuchUser = (res) => send(res, { err: 'Usuário não encontrado' }, 404);

sendJson = (res, status, content) => send(res, content, status);

sendError = (res, err) => send(res, { err: err.stack || err }, 500);

unauthorized = (res) => send(res, { err: 'Sem autorização' }, 401);

module.exports = {
    ok: ok,
    sendJson: sendJson,
    sendError: sendError,
    badRequest: badRequest,
    noSuchUser: noSuchUser,
    unauthorized: unauthorized
};