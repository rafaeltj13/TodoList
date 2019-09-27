const authService = require('../services/auth.service');

exports.signin = async (req, res, next) => {
    try {
        const response = await authService.signin(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};