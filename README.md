# angular-coding-challenge
## Congratulations

Congratulations, you will receive our Coding Challenge today! Below you will find the task description. Everything you need (besides Angular) can be found in this repository.

### Conditions
1. Only solutions coded with Angular/TypeScript will be evaluated.
2. Time limit ~ 5 hours
3. Delivery of the solution is done as a repository (github prefered). You can simply create a repository, push your solution and send us the link. Please make sure that the repository contains all the files and instructions needed to run.


### Task
Your task is to programm the `itemSlider` component in our existing angular project.
You can find the component under the following path: `src/assets/itemSlider`.
Every necessary asset needed is already included into the angular assets under: `src/assets/itemSlider`. The required font is also added to the project.
You should use storybook to visualize your work. The storybook-file can be found under: `src/app/character-editor/item-slider/item-slider.component.stories.ts`. 
You can run storybook with the command `npm run storybook`
1. Build the itemSlider-Component as shown on the following picture ![Alt text](src/assets/screenshot.png?raw=true "ItemSlider")
   - All necesary details for the styling (fonts / colors) can be found uner the following adobe-xd url: `https://xd.adobe.com/view/661651f2-f66e-41e3-a998-52b3f1abcd45-3345/screen/5ac070e2-e7ce-4a5b-8efd-96990281e782/specs/`
   - For convenience reasons we added an image in the angular-assets called `bottom_bg_equipment.jpg`. It should help you to create the background-color of the component.
   - The respective images of the items all contain a so-called "gem-socket" in the lower right corner. The used image can be found under the following path in the assets: `gem_socket_square.png`
   - The respective images of the items all contain a so-called "rarity" in the lower middle. The rarity of an item can change and has to be set dynamically. The used images can be found under the following path in the assets: `rarities/`
   - The respective images also include a so-called "damage-type" in the lower left corner. This image can be ignored and is not part of the coding-challenge
      - ![Alt text](src/assets/screenshot2.png?raw=true "Icons")

2. Make the itemSlider-Component responsive for all Mobile-Devices