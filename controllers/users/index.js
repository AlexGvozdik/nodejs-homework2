const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const addAvatar = require('./addAvatar');
const reverification = require('./reverification');
const verify = require('./verify');

module.exports = {
    login,
    signup,
    logout,
    current,
    addAvatar,
    reverification,
    verify
}