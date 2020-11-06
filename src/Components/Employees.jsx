import React from "react";


export default class Employees extends React.Component {

    constructor() {
        super();
        this.state = {
            employee: [],
            value: ""
        }
        this.textInput = React.createRef();

    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        fetch('https://reqres.in/api/users?per_page=12/')
            .then(response => response.json())
            .then(data => {
                this.setState({employee: data.data})
            })

    }

    deleteEmployee(index) {
        this.setState({
            employee: [
                ...this.state.employee.slice(0, index),
                ...this.state.employee.slice(index + 1)
            ]
        });
    }

    addEmployee() {
        this.setState({
            employee: [
                ...this.state.employee.concat({"newName": this.textInput.current.value}),
                ...this.textInput.current.value = ''
            ]
        });

    }

    render() {
        const list = this.state.employee.map((firstName, index) => {
            return <li>
                <span className="text"> {firstName.first_name}
                                        {firstName.newName}</span>
                <button
                    onClick={this.deleteEmployee.bind(this, index)}>Удалить
                </button>
            </li>;
        });

        return <div>
            <ul className="list">
                {list}
            </ul>
            <div className="addBlock">
                <input type="text" ref={this.textInput} className="formItem"
                       placeholder="Введите имя"/>
                <button
                    onClick={this.addEmployee.bind(this)}>Добавить
                </button>
            </div>
        </div>;

    }

}



