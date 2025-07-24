const data = require('../data/data_geografica.json');

function getDepartamentos() {
    return Object.keys(data);
}

module.exports = {
    getDepartamentos
};