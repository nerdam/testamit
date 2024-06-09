import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Precondtions", () => {cy.visit('https://cspr.live')})
When("action", () =>{cy.title().should('eq', 'CSPR.live')})
Then("testable outcome", () => {cy.title().should('eq', 'CSPR.live')})