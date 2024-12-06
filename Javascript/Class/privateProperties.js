class User {
  #username;
  #password;
  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }
  get username() {
    return this.#username;
  }
  get password() {
    return this.#password;
  }
}

let user1 = new User('coya', '123456');
console.log(user1.username);
