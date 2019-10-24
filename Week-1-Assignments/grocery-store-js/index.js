var shopper = {
    firstName: 'Samantha',
    lastName: 'Tackett',
    age: 29,
    groceryCart: ['Milk', 'Eggs', 'Bread', 'Chicken'],
    numberOfItems: 4,
    lessThan5Items: true,
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

console.log(shopper);
console.log(shopper.fullName());
