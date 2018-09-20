const host = 'http://localhost:3001';

Cypress.Commands.add('store', method => {
  cy.request('POST', `${host}/store/${method}`);
});

Cypress.Commands.add('mock', mocks => {
  const serializedMocks = Object.keys(mocks).reduce(
    (packet, key) => Object.assign(packet, {[key]: mocks[key].toString()}),
    {}
  );

  cy.request('POST', `${host}/store/mock`, serializedMocks);
});
