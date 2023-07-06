# Wallpaper

| Table of Contents                                                                                          |
| ---------------------------------------------------------------------------------------------------------- |
| Project Management                                                                                         |
| [Repo](https://github.com/2011-FSA-Alpha/GraceShopper)                                                     |
| [Team](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#team)                                           |
| Project Architecture                                                                                       |
| [Architecture](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Project-Architecture)                   |
| [DB Schema](https://dbdiagram.io/d/5ffdd60b80d742080a3606c2)                                               |
| [Wireframes](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)                     |
| Standards                                                                                                  |
| [Naming Conventions](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#naming-conventions)               |
| [Commit Convention](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#commit-messages)                   |
| [Testing Style](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#testing-style)                         |
| Workflows                                                                                                  |
| [Pre-Pull Request Workflow](https://github.com/2011-FSA-Alpha/GraceShopper/wiki#pre-pull-request-workflow) |
| [Resolving Merge Conflicts](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Resolving-Merge-Conflicts) |
| Documentation                                                                                              |
| [NPM Packages](https://github.com/2011-FSA-Alpha/GraceShopper/wiki/Package-Documentation)                  |

# Contributors

[Adam Green](https://www.linkedin.com/in/agreen01/) | [Alejandro Armas](https://www.linkedin.com/in/alejandroarmas66/) | [Dakota Jennings](https://www.linkedin.com/in/dakotamjennings/) | [Daniel Rodriguez](https://www.linkedin.com/in/daniel-a-rodriguez-/) | 
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src=https://github.com/agreen8911/Full-Racks-Academy_Grace_Shopper/assets/124797284/f0564196-7ec8-4572-b784-d40f5edd3b4b width = "150" /> | <img src= https://github.com/agreen8911/Full-Racks-Academy_Grace_Shopper/assets/124797284/a707f059-4b15-40a2-90b0-77e155477dfa width = "150" /> | <img src=https://github.com/agreen8911/Full-Racks-Academy_Grace_Shopper/assets/124797284/c688ca68-60c6-48d5-a730-61ca4acc69cb width = "150" /> | <img src=https://github.com/agreen8911/Full-Racks-Academy_Grace_Shopper/assets/124797284/94d6ccfa-b9bc-4f85-be95-d48f353d317d width = "150" /> |
|[<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/agreen8911)   |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/lxarmas)    |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/DMJennings)    |   [<img src="https://user-images.githubusercontent.com/36062933/108450440-38656600-7233-11eb-9ed0-34ecedcae435.png" width="20"> ](https://github.com/D-A-Rod)    |
|[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/agreen01/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/alejandroarmas66/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/dakotamjennings/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="20"> ](https://www.linkedin.com/in/daniel-a-rodriguez-/)                   |

# Deployed App

http://wallpapr.herokuapp.com/

# Getting Started Locally

1.  `git clone` && `cd` into the project directory
1.  `npm install` to install project dependencies
1.  `createdb wallpaper` && `createdb wallpaper-test` to make a Postgres database
1.  `npm run seed` to seed the database with data
1.  Running `npm run start-dev` will make great things happen!
1.  Open up `localhost:8080` in your favorite browser

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

# To-do Board

[View To-do Board](https://github.com/2011-FSA-Alpha/GraceShopper/projects/1)

# Database Schema

* Diagram: https://dbdiagram.io/d/5ffdd60b80d742080a3606c2

# Wireframes

[View on Figma](https://www.figma.com/file/OaM113RKVYajEhSjtietB7/Wallpapr?node-id=0%3A1)

# Standardization

## Naming Conventions:

* Components: PascalCase // eg. `AllProducts.js`
* Reducers: camelCase // eg. `myStore.js`
* Tests: type.spec.js // eg. `AllProducts.test.js`, `myStore.test.js`

## Commit Messages:

* Semantic style — http://karma-runner.github.io/4.0/dev/git-commit-msg.html
* eg. `feat(add User model to database)`
* what is being added(summary of what it does) - more details if needed.

## Testing Style:

* Framework: Mocha
* Assertions: Chai
* Front-end: Enzyme
* Back-end: Supertest

Please write tests with the `expect` style in Chai
https://www.chaijs.com/guide/styles/#expect

## Run a single test file:

`npx mocha ./client/components/OrderConfirmed.spec.js --require @babel/polyfill --require @babel/register -w`

## Pre-Pull Request Workflow

* From current feature branch

1.  `git stash`
2.  `git pull origin master`
3.  `git stash apply`
4.  `git add <new feature>`
5.  `git commit -m <commit message>`
6.  `git push`

# Acknowledgements

[google-apis]: https://console.developers.google.com/apis/credentials
* Thank you to [Fullstack Academy](https://www.fullstackacademy.com/) for bringing this team together to build _Wallpaper_
* Huge thanks to the team for hustling to build this project
* All photos courtesy [Ricky Rhodes](https://www.rickyrhodes.com)
