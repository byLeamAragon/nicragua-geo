const data = require('../../data/data_geografica.json');

function getDepartamentos() {
    return Object.keys(data);
}

function getMunicipiosByDepartamento(departamento) {
  return data[departamento] || [];
}

function getDepartamentoByMunicipio(municipio) {
  return Object.entries(data).find(([dep, municipios]) =>
    municipios.includes(municipio)
  )?.[0] || null;
}

function getMunicipio(nombre) {
  const departamento = getDepartamentoByMunicipio(nombre);
  return departamento ? { nombre, departamento } : null;
}

function getNumeroMunicipiosByDepartamento(nombre) {
  const municipios = data[nombre];
  return municipios ? municipios.length : 0;
}

module.exports = {
    getDepartamentos,
    getMunicipiosByDepartamento,
    getDepartamentoByMunicipio,
    getMunicipio,
    getNumeroMunicipiosByDepartamento
};