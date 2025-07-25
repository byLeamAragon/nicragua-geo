import {
  getDepartamentos,
  getMunicipiosByDepartamento,
  getDepartamentoByMunicipio,
  getMunicipio,
  getNumeroMunicipiosByDepartamento
} from '../src/index.js';

import { describe, it, expect } from 'vitest';

describe('municipios-nicaragua', () => {
  it('debe retornar todos los departamentos', () => {
    const deps = getDepartamentos();
    console.log('Departamentos:', deps);
    expect(deps).toContain('Managua');
    expect(deps.length).toBeGreaterThan(0);
  });

  it('debe retornar los municipios de León', () => {
    const municipios = getMunicipiosByDepartamento('León');
    console.log('Municipios:', municipios);
    expect(municipios).toContain('León');
    expect(municipios).toContain('Nagarote');
  });

  it('debe identificar el departamento de Jinotepe', () => {
    const dep = getDepartamentoByMunicipio('Jinotepe');
    console.log('Departamento:', dep);
    expect(dep).toBe('Carazo');
  });

  it('debe retornar un objeto de municipio válido', () => {
    const mun = getMunicipio('Ticuantepe');
    console.log('Municipio:', mun);
    expect(mun).toEqual({ nombre: 'Ticuantepe', departamento: 'Managua' });
  });

  it('debe contar correctamente los municipios', () => {
    const count = getNumeroMunicipiosByDepartamento('Masaya');
    console.log('Municipio:', count);
    expect(count).toBeGreaterThan(0);
  });
});
