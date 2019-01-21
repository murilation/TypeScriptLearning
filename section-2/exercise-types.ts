console.log('Exercise 1!');

type bankType = {money: number, deposit: (val: number) => void};

let bankAccount: bankType = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: bankType, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.table(myself);
