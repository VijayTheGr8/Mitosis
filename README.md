# Cancer

## Overview
"Cancer" is a p5.js project I created to replicate how cancer behaves in the environment. This animation shows how cell regulation is necessary for proper life and how cancerous cells form when this is not the case.

## Features
* __Clicking__ will divide the cells into two daughter cells
  * This will delete the parent cell
  * The two daughter cells will be pushed away from each other (and away from the walls if in contact)
* The cells are constantly __growing__ but stop at a radius of 100
  * At this point, they will start flashing, indicating that they have turned cancerous 
  * You must click them to stop them
* There will be a limit of __100__ cells
  * Mitosis will stop as the environment cannot handle any more (you will see this warning in the console of your browser)
