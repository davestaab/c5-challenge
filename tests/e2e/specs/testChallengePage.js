import deferred from '../utils/deferred';
import mockChallenge from '../data/mockChallenge';

describe('challenge page', () => {
  // it('should show upcoming challenge', () => {
  //   const fetchAllDataDeferred = deferred();
  //   // set date to Jan 15, 2019
  //   cy.clock(new Date(2019, 0, 15));
  //   cy.visit('#/challenge/current', {
  //     onBeforeLoad(win) {
  //       cy.stub(win, 'fetch')
  //         .withArgs('/allData.json')
  //         .as('fetchAllData')
  //         .returns(fetchAllDataDeferred.promise);
  //     }
  //   });
  //   fetchAllDataDeferred.resolve(mockChallenge);
  //
  //   cy.contains('[data-testid="title"]', 'Upcoming Challenge');
  //   cy.contains('[data-testid="description"]', 'The current challenge will be announced on Jan 20, 2019');
  //   cy.contains('[data-testid="deadline"]', 'Submission Deadline: Mar 11, 2019');
  // });

  it('should show announced challenge', () => {
    const fetchAllDataDeferred = deferred();
    const fetchChallengeTwo = deferred();
    // set date to Jan 15, 2019
    cy.clock(new Date(2019, 0, 20, 12, 0, 1));
    cy.visit('#/challenge/current/description', {
      onBeforeLoad(win) {
        cy.stub(win, 'fetch')
          .onFirstCall()
          .returns(fetchAllDataDeferred.promise)
          .onSecondCall()
          .returns(fetchChallengeTwo.promise);
      }
    });
    fetchAllDataDeferred.resolve(mockChallenge);
    fetchChallengeTwo.resolve({
      text() {
        return '# Challenge Two';
      }
    });
    // should render challengeOne
    cy.get('[data-testid="description"]').should('exist');
    cy.get('[data-testid="description"]').should('contain', 'Challenge Two');
  });
});
