"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(id, user, balance) {
        this.id = id;
        this.user = user;
        this.balance = balance;
    }
    Account.prototype.displayBalance = function () {
        console.log("Account id: ".concat(this.id));
        console.log("Balance: ".concat(this.balance));
        console.log("User info - name: ".concat(this.user.name, ", email: ").concat(this.user.email));
    };
    return Account;
}());
exports.Account = Account;
