import data from '../../data/data_geografica.json' assert { type: "json" };

export function getDepartamentos() {
  return Object.keys(data);
}

export function getMunicipiosByDepartamento(departamento) {
  return data[departamento] || [];
}

export function getDepartamentoByMunicipio(municipio) {
  return Object.entries(data).find(([dep, municipios]) =>
    municipios.includes(municipio)
  )?.[0] || null;
}

export function getMunicipio(nombre) {
  const departamento = getDepartamentoByMunicipio(nombre);
  return departamento ? { nombre, departamento } : null;
}

export function getNumeroMunicipiosByDepartamento(nombre) {
  const municipios = data[nombre];
  return municipios ? municipios.length : 0;
}
