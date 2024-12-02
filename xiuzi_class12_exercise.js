const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */


/*Planning
type "reigiter" and the quetion shows "Give me a user name" for register users
type "list users" to View the list of registered users.
type "assign role" then ask to enter a user name and a role name to give each reigitered users a role

creat function ShowSettingStatu and toggleSettings for switching the permissions
type "show permission status" to show current permisson settings
and type "turn on" "turn off" to changed the all the permissions to true or false

 */


let users = [];

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

function createUsers(){
      //user readline to prompt for the name of the user to be added
      readline.question("Give me a user name.", _user =>{
        users.push(_user);
        console.log(`User "${_user}" has been added.`);
        StartApp();
       })
}


function assignRole() {
  // Ask for the username to assign a role
  readline.question("Enter the username to assign a role: ", (username) => {
    console.log("Available roles:");
    // Display available roles
    for (let roleName in role) {
      console.log(`${roleName}`);
    }

    // Ask for the role to assign
    readline.question("Enter the role to assign: ", (roleName) => {
      // Check if the role is valid
      if (role[roleName]) {
        console.log(`Role "${roleName}" has been assigned to "${username}".`);
      } 
      StartApp();
    });
  });
}



function listUsers(){
    //user readline to list out users
    console.log("Here are all the registered users:")
    for(let i=0; i<users.length; i++){
      console.log(`The registered users is ${users[i]}`)
  }
    StartApp();
}

function ShowSettingStatus(){
  console.log("Current settings:");
  for(let key in settings){
      console.log("Your current setting for", key, "is", settings[key]);
  }
  StartApp();
}

function toggleSettings(status) {
  for (let key in settings) {
    settings[key] = status;
  }
  StartApp();
}

/*challenge2 function assignPermissions(){

}

function showPermissions(){
    //loop through all the users settings and roles based on their permissions
}
*/

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      if (_command === "register") {
        createUsers ();
      }
      else if (_command === "list users"){
        listUsers ();
      }

      else if (_command === "show permission status"){
        ShowSettingStatus ();
      }


      else if (_command === "turn on"){
        for(let key in settings){
          toggleSettings(true);
        }
        console.log("Permission settings has been changed.");
      }

      else if (_command === "turn off"){
        for(let key in settings){
          toggleSettings(false);
        }
        console.log("Permission settings has been changed.");
      }

      else if (_command === "assign role") {
        assignRole();
      }
      else if (_command !== "quit") {
        StartApp();
      } else {
        readline.close();
      }
    });
  }
  
  StartApp();
  

  // review: functional code, good job! -beau //