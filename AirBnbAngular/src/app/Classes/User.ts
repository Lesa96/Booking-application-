export class User {
    ID : number;
    Name : string;
    Surname : string;
    Username : string;
    Password : string;
    Gender : string;
    Role : string;
    Blocked : boolean;

}

export class RegistUser {
    Name : string;
    Surname : string;
    Username : string;
    Password : string;
    Gender : string;

    constructor(public name: string, public surname: string,public username: string, public pass: string , public gender:string ) {
      this.Name = name;
      this.Surname = surname;
      this.Username = username;
      this.Password = pass;
      this.Gender = gender;
    }
}