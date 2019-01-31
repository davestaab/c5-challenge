// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('div', 'Home');
  });
  it('visits the challenge page', () => {
    cy.visit('#/challenge/current');
    cy.contains('[data-testid="title"]', 'Upcoming Challenge');
  });
  it('has a nav bar', () => {
    cy.visit('/');
    cy.contains('a.router-link-active', 'Home');
    cy.contains('a', 'Challenge');
  });
  it('challenge link should navigate to current challenge', () => {
    cy.visit('#/');
    cy.get('[data-testid="challenge-link"]').click();
    cy.url().should('contain', '#/challenge/current');
  });
  it('home link should navigate to home page', () => {
    cy.visit('#/challenge/current');
    cy.get('[data-testid="home-link"]').click();
    cy.url().should('contain', '#/');
  });
});
