
# Jest Snapshot testing in React

This project was designed to further my understanding of the JEST testing suite, in peticular the snapshot testing functionality. First up: from a tutorial located [here](https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest)

## Tutorial Time
 First I followed the tutorial from the location above, created a component that dynamically creates a list from a local prop and displays it on screen. Following the tutorial further I added tests for the blank/empty component, with one prop and with a few - creating screenshots for each. Looks good so far! Purposly failed a test by updating the compnent to add a class (className I guess) then regenerated the snapshots - Cool! Time to venture out on my own.
 
## Creating my own component to test
 Next up I created a Header component with a nav in it to try writing my own test - works pretty much the same for now. Great!
 
## Stylin' it
 Now I'm finally outside the bounds of the tutorial - im adding styling objects for the nav and the nav items. I wasn't sure how this would work out but happily it worked better than I thought it would. Fist I created 2 style objects, 'navStyles' and 'linkStyles' including them in the render of the component, updated the snapshots and Its working fine - take a quick look at the snapshots and I can see the styles are included - neat! Now I move the style object variables completely out of the class, and it still passes all the tests, huh?! Shouldn't editing the class break it? Changing the value of one of the props does so I take a closer look at the snapshots - OH! Of course! Its saving an isntance of the value of the style objects into the inline "style=" property's themselves in the snapshot - right, the snapshot test is only concerned with whats being rendered not the component itself. Everythings working so far!
 
 ## Inline Snapshots
 
 Next up, inline snapshots. I can see in the Jest documentation that you need to install "prettier" for inline snapshots to work but as this whole project is to experement with Jest snapshoting I try it without doing so. True to the documentations word - error, needs the "prettier" modual. Installed. Test suite run again aaaannnnddd ... Awesome, it added the snapshot right in the test file, just as advertised. Changed Header to make the test fail and both fail just about the same way (small difference where it outputs the defined test but the test are different so good). Now I update the screenshots and both update in the same way. OK, were done here!


P.S.:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

