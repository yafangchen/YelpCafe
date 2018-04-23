export class User {
  _id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string

  constructor(_id: string, username: string, password: string, firstname: string, lastname: string, email: string, role: string) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
  }
}
