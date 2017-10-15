//The main idea of React

class React {
    constructor() {
        //default setting of a React instance
        this.props = 4;
    }

    whateverFunction(){
        console.log("hey");
    }
}

//so in order get default settings of a parent class you need use extends keyword like below
class Header extends React{
    constructor() {
        super();
    }
}

const react = new React();
const header = new Header();

react.whateverFunction();
console.log(header.props);