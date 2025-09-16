

enum role {
  intern,
  SE,
  TL,
  Manager,
}

type group = {
  id: number;
  name: string;
  desc: string;
  roles: number[];
};

interface user {
  id: number;
  name: string;
  email: string;
  group: group;
}

var groupCount = 0;
var userCount = 0;

// ---- Create Group ----
var _groupName: string = prompt("Enter Group Name: ");
var _groupDesc: string = prompt("Enter Group Description: ");
var _groupRoles: number[] = [];

readRoles(); // collect roles

var _group: group = {
  id: groupCount + 1,
  name: _groupName,
  desc: _groupDesc,
  roles: _groupRoles,
};
groupCount++;

// ---- Create multiple Users ----
var Iuser: user[] = [];

while (true) {
  let addMore = prompt("Do you want to add a user? (y/n): ");
  if (addMore.toLowerCase() !== "y") break;

  let _userName: string = prompt("Enter User Name: ");
  let _userEmail: string = prompt("Enter User Email: ");

  var _user: user = {
    id: userCount + 1,
    name: _userName,
    email: _userEmail,
    group: _group,
  };

  Iuser.push(_user);
  userCount++;
}

// ---- Print result ----
console.log("Final Users List:");
console.log(JSON.stringify(Iuser, null, 2));

// ---- Function to read roles ----
function readRoles() {
  while (true) {
    let input = prompt("Enter role (intern, SE, TL, Manager) or press Enter to stop: ");
    if (!input) break; // stop if empty

    let inputRole = role[input as keyof typeof role];
    if (inputRole !== undefined) {
      _groupRoles.push(inputRole);
    } else {
      console.log("Invalid role, try again.");
    }
  }
}
