import React, { Component } from "react";
import NewFormItem from "./NewFormItem";
import "./App.css";
import Search from "./Search";
import ImageAvatars from "./Avatar";
import Checkbox from "@material-ui/core/Checkbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [
        {
          prenume: "Ionela",
          nume: "Stan",
          mail: "istan@mail.com",
          phone: "0777 333 543",
          lastEmployer: "SC Yonder SRL",
          currentTitle: "Web Developer",
          key: Date.now(),
        },
        {
          prenume: "Mihaela",
          nume: "Onofrei",
          mail: "monofrei@mail.com",
          phone: "0777 777 321",
          lastEmployer: "SC Yonder SRL",
          currentTitle: "Backend Developer",
          key: Date.now(),
        },
        {
          prenume: "Sorina",
          nume: "Mihalache",
          mail: "smihalache@mail.com",
          phone: "0777 111 321",
          lastEmployer: "SC Endava SRL",
          currentTitle: "Test Engineer",
          key: Date.now(),
        },
      ],
      prenume: "",
      nume: "",
      mail: "",
      phone: "",
      lastEmployer: "",
      currentTitle: "",
      key: "",
      query: "",
      columnToQuery: "prenume",
      searchTerm: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      key: Date.now(),
    });
  };
  addItem = (event) => {
    event.preventDefault();
    const newItem = {
      prenume: this.state.prenume,
      nume: this.state.nume,
      mail: this.state.mail,
      phone: this.state.phone,
      lastEmployer: this.state.lastEmployer,
      currentTitle: this.state.currentTitle,
      key: Date.now(),
    };
    console.log(newItem);
    if (newItem.prenume !== "") {
      const newItems = [...this.state.item, newItem];
      this.setState({
        item: newItems,
        prenume: "",
        nume: "",
        mail: "",
        phone: "",
        lastEmployer: "",
        currentTitle: "",
        key: "",
      });
      console.log("newItems este:", newItems);
    }
  };
  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <Search handleChange={this.onSearchChange} />
          <div id="avatar">
            <ImageAvatars />
          </div>
        </div>
        <div className="container">
          <div className="form">
            <h3>Add New Applicant</h3>
            <form id="FormAddUsers" onSubmit={this.addItem}>
              <input
                name="prenume"
                className="addFirstName"
                type="text"
                placeholder="Enter first name"
                value={this.state.prenume}
                onChange={this.handleInput}
              ></input>

              <input
                name="nume"
                className="addLastName"
                type="text"
                placeholder="Enter last name"
                value={this.state.nume}
                onChange={this.handleInput}
              ></input>
              <input
                name="mail"
                className="addMail"
                type="text"
                placeholder="Enter email"
                value={this.state.mail}
                onChange={this.handleInput}
              ></input>
              <input
                name="phone"
                className="addPhone"
                type="text"
                placeholder="Enter phone"
                value={this.state.phone}
                onChange={this.handleInput}
              ></input>
              <input
                name="lastEmployer"
                className="addLastEmployer"
                type="text"
                placeholder="Enter last employer"
                value={this.state.lastEmployer}
                onChange={this.handleInput}
              ></input>
              <input
                name="currentTitle"
                className="addCurrentTitle"
                type="text"
                placeholder="Enter current Title"
                value={this.state.currentTitle}
                onChange={this.handleInput}
              ></input>
              <br></br>
              <button id="add">Add</button>
            </form>
          </div>
          <div className="table">
            <table id="table">
              <thead>
                <tr>
                  <th>Prenume</th>
                  <th>Nume</th>
                  <th>Mail</th>
                  <th>Phone</th>
                  <th>Current Employer</th>
                  <th>Current Title</th>
                  <th>Selected</th>
                </tr>
              </thead>
              <tbody>
                {this.state.item
                  .filter(
                    (item) =>
                      item.prenume
                        .toLowerCase()
                        .includes(this.state.searchTerm) ||
                      item.nume.toLowerCase().includes(this.state.searchTerm) ||
                      item.mail.toLowerCase().includes(this.state.searchTerm) ||
                      item.phone
                        .toLowerCase()
                        .includes(this.state.searchTerm) ||
                      item.lastEmployer
                        .toLowerCase()
                        .includes(this.state.searchTerm) ||
                      item.currentTitle
                        .toLowerCase()
                        .includes(this.state.searchTerm)
                  )
                  .map((item) => {
                    return (
                      <tr>
                        <td>
                          <NewFormItem prenume={item.prenume} />
                        </td>
                        <td>
                          <NewFormItem nume={item.nume} />
                        </td>
                        <td>
                          <NewFormItem mail={item.mail} />
                        </td>
                        <td>
                          <NewFormItem phone={item.phone} />
                        </td>
                        <td>
                          <NewFormItem lastEmployer={item.lastEmployer} />
                        </td>
                        <td>
                          <NewFormItem currentTitle={item.currentTitle} />
                        </td>
                        <td>
                          <Checkbox
                            defaultChecked
                            color="primary"
                            inputProps={{ "aria-label": "secondary checkbox" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
