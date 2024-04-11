"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var account_1 = require("../models/account");
var Bank = /** @class */ (function () {
    function Bank() {
        this.users = [];
        this.accounts = [];
    }
    Bank.prototype.registerUser = function (user) {
        this.users.push(user);
        console.log("User ".concat(user.name, " has been added."));
    };
    Bank.prototype.openAccount = function (user) {
        var accountId = this.accounts.length;
        var newAccount = new account_1.Account(accountId, user, 0);
        this.accounts.push(newAccount);
        console.log("Account opened successfully for user ".concat(user.name));
    };
    Bank.prototype.displayUserAccounts = function (userId) {
        var userAccounts = this.accounts.filter(function (element) { return element.user.id === userId; });
        console.log("Accounts for user with ID: ".concat(userId, " :"));
        userAccounts.forEach(function (account) { return account.displayBalance(); });
    };
    return Bank;
}());
exports.Bank = Bank;
