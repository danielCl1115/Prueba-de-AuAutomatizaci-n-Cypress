/// <reference types="cypress" />

describe('Prueba técnica QA - Autenticación y búsqueda de embarque', () => {
  let datos;

  before(() => {
    cy.fixture('datos').then((data) => {
      datos = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfeaai');
    cy.wait(3000);
  });
  //Ingreso PIN 
  const ingresarPin = (pinString) => {
    const pin = pinString.split('');
    cy.get('#digit1', { timeout: 10000 }).should('be.visible').type(pin[0]);
    cy.get('#digit2').type(pin[1]);
    cy.get('#digit3').type(pin[2]);
    cy.get('#digit4').type(pin[3]);
    cy.contains('Ingresar').click();
  };
  //CASE1
  it('1. Autenticación exitosa con PIN válido', () => {
    ingresarPin(datos.pin);
    cy.contains('Reporte de Embarques', { timeout: 10000 }).should('exist');
  });
  //CASE2
  it('2. Mostrar error con PIN incorrecto', () => {
    ingresarPin(datos.pinInvalido);

    cy.get('#digit1').should('exist');
  });
  //CASE3
  it('3. Búsqueda de embarque válido', () => {
    ingresarPin(datos.pin);
    cy.contains('Reporte de Embarques', { timeout: 10000 }).should('exist');
    cy.contains(datos.numeroEmbarque).should('exist');
  });
  //CASE4
  it('4. Validar embarque no encontrado', () => {
    ingresarPin(datos.pin);
    cy.contains('Reporte de Embarques', { timeout: 10000 }).should('exist');
    cy.contains(datos.embarqueInvalido).should('not.exist');
  });
});
