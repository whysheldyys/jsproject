/* let name = null;
let viewName = name ?? "Гость";
console.log(viewName);

let age;
let viewAge = age ?? 18;
console.log(viewAge);

let rating = 0;
let viewRating = rating ?? 5;
console.log(viewRating);

let settings = {
  theme:"black",
  language:null
};

let userLanguage = settings.language ?? "ru";
console.log(userLanguage);

const user = {
  profile: {
      realName:'Anna',
    location: {
      city:'Moscow'
    }
      }
};

console.log(user.profile?.realName);
console.log(user.profile?.location?.city);
console.log(user.contact?.email);

const utils = {
  sayHi: () => console.log('Привет!')
    };

utils.sayHi?.();
utils.sayBye?.();

const users = [{rlName:'Bob'},null,{rlName:'Eva'}];

console.log(users[0]?.rlName);
console.log(users[1]?.rlName);

let doSomething = null;
doSomething?.();

 */

let company = {
  workers: {
    name: "Anton",
  },
};

console.log(company.managers?.name);

//настроить eslint

//запушить на github

const ID = Symbol("id");

const user = {
  name: "Alex",
  [ID]: 123,
};

console.log(user[ID]);

const secret = Symbol("secret");

const obj = {
  name: "Bob",
  [secret]: "hidden_value",
};

console.log(obj.secret);
console.log(obj[secret]);
