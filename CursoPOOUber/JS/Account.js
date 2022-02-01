class Account { 
    constructor(id, name, document, email, password, license) {
        this.id = id;                                   // integrate
        this.name = name;                               // string
        this.document = document;                       // integrate
        this.email = email;                             // string
        this.password = password;
        this.license = license;                       // string
    }
}

export default Account;