import React, { Component } from "react";
import NewFormItem from "./NewFormItem";
import "./App.css";
import Search from "./Search";
import ImageAvatars from "./Avatar";
//import Clock from "./Clock";
import logo_size_invert from "./logo_size_invert.jpg";
import iconMale from "./iconMale.png";
import icon from "./icon.svg";
import closeSvg from "./closeSvg.svg";
import Element from "./userItem";

let obj = {};
var i = 3;
const useri = [
  {
    id: 1,
    prenume: "Tatiana",
    nume: "Ghimici",
    mail: "istan@mail.com",
    phone: "0777 333 543",
    lastEmployer: "SC Yonder SRL",
    currentTitle: "Web Developer",
    key: Date.now(),
  },
  {
    id: 2,
    prenume: "Carmen",
    nume: "Onofrei",
    mail: "monofrei@mail.com",
    phone: "0777 777 321",
    lastEmployer: "SC Yonder SRL",
    currentTitle: "Backend Developer",
    key: Date.now(),
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          prenume: "Ionela",
          nume: "Stan",
          mail: "istan@mail.com",
          phone: "0777 333 543",
          lastEmployer: "SC Yonder SRL",
          currentTitle: "Web Developer",
          key: Date.now(),
        },
        {
          id: 2,
          prenume: "Mihaela",
          nume: "Onofrei",
          mail: "monofrei@mail.com",
          phone: "0777 777 321",
          lastEmployer: "SC Yonder SRL",
          currentTitle: "Backend Developer",
          key: Date.now(),
        },
        {
          id: 3,
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
      checked: false,
      selectedItem: null,
      details: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  //cand dau click pe butonul close, sa dispara div-ul cu detalii, similar cu unchecked.
  closeDetails = () => {
    this.setState({ checked: false });
    console.log("closed");
  };

  onCheck = (user) => {
    const newLocal = this.state.checked;
    return newLocal === false
      ? () => {
          this.setState({
            checked: true,
            selectedItem: user,
            details: "Itemul selectat este:" + ":" + user.prenume,
          });
          console.log("checked");
          console.log("selectedItem este:", user.prenume);
        }
      : () => {
          this.setState({ checked: false });
          console.log("unchecked");
        };
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      key: Date.now(),
    });
  };
  generateId = () => {
    i = i + 1;
    return i;
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
      id: this.generateId(),
    };

    // console.log(newItem);
    if (newItem.prenume !== "") {
      const newItems = [...this.state.items, newItem];
      //const newUser = newItem;
      //console.log("vect este:", obj);
      this.setState({
        items: newItems,
        prenume: "",
        nume: "",
        mail: "",
        phone: "",
        lastEmployer: "",
        currentTitle: "",
        key: "",
        //useri: useri.push(newUser),
      });
      //console.log("useri este:", useri);
    }
  };
  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
  };
  render() {
    return (
      <div className="App">
        <div>
          <div id="landingPage">
            <div className="logo">
              <img src={logo_size_invert} />
            </div>
            <p>APPLICANT TRACKING SYSTEM</p>{" "}
            <div className="Clock">{/* <Clock /> */}</div>
          </div>
        </div>

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
                  <th>ID</th>
                </tr>
              </thead>

              {this.state.items
                .filter(
                  (item) =>
                    item.prenume
                      .toLowerCase()
                      .includes(this.state.searchTerm) ||
                    item.nume.toLowerCase().includes(this.state.searchTerm) ||
                    item.mail.toLowerCase().includes(this.state.searchTerm) ||
                    item.phone.toLowerCase().includes(this.state.searchTerm) ||
                    item.lastEmployer
                      .toLowerCase()
                      .includes(this.state.searchTerm) ||
                    item.currentTitle
                      .toLowerCase()
                      .includes(this.state.searchTerm)
                )
                .map((item) => {
                  return (
                    <tbody>
                      <NewFormItem
                        id={item.id}
                        prenume={item.prenume}
                        nume={item.nume}
                        mail={item.mail}
                        phone={item.phone}
                        lastEmployer={item.lastEmployer}
                        currentTitle={item.currentTitle}
                        onSelectApplicant={this.onCheck(item)}
                        checked={this.state.checked}
                        user={item}
                      />
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
        {this.state.checked !== false ? (
          <div className="applicantCard">
            <button id="close" onClick={this.closeDetails}>
              <img src={closeSvg} />
            </button>
            <h3>Detalii Applicant</h3>
            <div className="icon">
              <img src={icon} />
            </div>
            <div className="detalii">
              <p>
                Prenume: {this.state.selectedItem.prenume}
                <br />
                Nume: {this.state.selectedItem.nume}
              </p>
            </div>
          </div>
        ) : (
          <p>please select a user</p>
        )}
        <div className="useriList">
          <form>
            <input type="text"></input>
            <input type="text"></input>
            <button type="submit"></button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Prenume</th>
                <th>Nume</th>
              </tr>
            </thead>
            <tbody>
              {useri.map((item) => {
                return <Element user={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
