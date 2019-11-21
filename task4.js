let donald = {
    name: "Дональд",
    color: "белый",
    age: 1,
    toStr: function() {
        console.log(`${this.name}, ${this.color}, ${this.age}`);
    },
    say: function() {
        console.log('кря кря кря');
    }
}

donald.toStr();
donald.say()


