In the game, the player needs to match a country to its capital by clicking on appropiate buttons

1. Your component should receive a data property in the following format (an object with the correct answer, where the keys are the names of the countries and the value of each key is the capital of the previous country):
      <CapitalCountryGame data={{ Germany: 'Berlin', France: 'Paris' }} />

2. A button should be displayed for each country and each capital. So, the example above would return the following buttons:
    Germany, Berlin, France, Paris

3. The buttons should be displayed in a random order.

4. Clicking a button should set its background color to blue

5. Clicking another button should:
    Remove both buttons if a correct country and capital pair has been selected;
    Set the bg color of both buttons to red if a wrong pair has been selected.

6. Assuming the previously selected pair was wrong, wait a moment should restore the default bg color of the worng pair 

7. When there are no buttons left, display a message: Congratulations.

Assumptions
Assume the provided data is correct

The look of the component wont be evaluated; only its specified functionalities will be tested.