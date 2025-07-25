const data_geografica = require('./src');

console.log("Departamentos:", data_geografica.getDepartamentos());

console.log("Municipios por departamentos:", data_geografica.getMunicipiosByDepartamento("Managua"));

console.log("Departamento al que pertenece tipitapa:", data_geografica.getDepartamentoByMunicipio("Tipitapa"));

console.log("Municipio de tipitapa:", data_geografica.getMunicipio("Tipitapa"));

console.log("Número de Municipios por departamentos:", data_geografica.getNumeroMunicipiosByDepartamento("Managua"));