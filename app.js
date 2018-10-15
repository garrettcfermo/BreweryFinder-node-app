// Packages Required
const request = require("request")
const fs = require("fs")
const inquirer = require('inquirer')
const clear = require('clear')

// Client Interface (Command Line)

// Start App Function
const startApp = _ => {
  clear()
  inquirer.prompt([
    {
      type: "list",
      message: "Welcome to the Brewery Finder. How may we help you find your Hoppy Buzz? Please choose one of the Following:",
      name: "userChoice",
      choices: ["Find Brewery by Name?", "Find Brewery by State", "Find Brewery by City?", "Find Brewery by Type"]
    }
  ]).then(answers => {
    switch (answers.userChoice) {
      case "Find Brewery by Name?":
        console.log("Name")
        break
      case "Find Brewery by State":
        console.log("State")
        break
      case "Find Brewery by City":
        console.log("City")
        break
      case "Find Brewery by Type":
        console.log("Type")
        break
    }

  })

}

startApp()


// 


