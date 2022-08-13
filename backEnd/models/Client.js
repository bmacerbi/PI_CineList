
/**
 * Definição da classe cliente contendo os dados a serem armazenados de um cliente 
 */
module.exports = class Client {

    constructor(name, email, phoneNumber, password){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

}