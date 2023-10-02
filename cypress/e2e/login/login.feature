Feature: Login App

  Scenario: User can successfully login
    Given I log in
    When the url is https://the-internet.herokuapp.com/secure
    Then I'm logged in
