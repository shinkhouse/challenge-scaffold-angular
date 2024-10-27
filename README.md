# Chorus Connector

This is a hybrid mobile app for Chorus Connector, an app allowing users to get a showcase of choirs around the United States. It includes a landing page for users to see choirs in their location and also allows them to search for choirs in other cities either by name or location. Owners or board members of choirs can also manage their own choirs from My Choruses, and employees of Chorus Connector can edit all choirs.

Developer note: I finished (most of) the functionality for viewing, searching, adding, editing, and deleting choirs. I did not finish the login and authentication in the two hours, I had planned to do that and some other clean up toward the end. I created a view for it at /login, you can also get to this by tapping the user icon on the toolbar. If I had a third hour, I would fully implement the login function with the mock data I had, probably clean up some of the user roles, and then add authentication guards to my routing to make sure non-authorized users cannot access links they don't have permission to. Would also like to add more fields for edit and add to make it more cohesive and implement Google Maps SDK to see where choirs are performing. Maybe even some fun YouTube videos or self-hosted vids of performances or Instagram API. 

Thanks for the opportunity. Cheers!
### ChatGPT Usage
I used ChatGPT to generate chorus and user mock data, along with TypeScript interfaces for both. I also used it for a couple troubleshooting things I needed a refresher on.
https://chatgpt.com/share/671eca8e-c004-8011-9d2e-27e432382d15

### Instructions
This template provides a minimal setup for an Angular app. Note that the Angular CLI requires Node.js v14.20+, v16.14+ or v18.10+. To run the app:
```
cd chorus-connector
npm install
npm install -g @ionic/cli
ionic serve
```


If this doesn't work, you can also view it here:
https://shinkhouse.github.io/challenge-scaffold-angular/choruses

I may have incorrectly imported the icons when building it to my GitHub Pages, but it works locally.

### Original Instructions

Chorus Connector is an exciting new product to help lovers of choral music find ensembles. Build an appealing application with the following features, and feel free to add your own creative twists!

Public Functionality:
- view all choruses
- search for choruses near me

Password-Protected Functionality:
- create, view, edit, and delete choruses

`data.json` contains an example data model and sample list of choruses. Feel free to modify any and all of it for your needs. You do not need to build long-term data persistence (it’s ok for everything to refresh on reload), and data can be stored in-memory however you prefer. 
Authentication can be as simple or complex as you feel appropriate for the purposes of this exercise.
Please take no more than 2 hours to develop your solution.

What We’re Looking For:
- does your code run?
- does your product fulfill the core feature requirements?
- is your code well-organized and readable?
- is the UI and UX pleasing?

Optional Considerations (be selective, given the time constraint):
- accessibility
- testing
- input validation

Fork this repository and expand upon it using your preferred folder structure, tooling, packages, libraries, etc.

This template provides a minimal setup for an Angular app. Note that the Angular CLI requires Node.js v14.20+, v16.14+ or v18.10+. To run the app:
```
cd chorus-connector
npm install
ng serve
```
Update this README with anything we should know about your solution (including spin-up and testing instructions, if relevant).