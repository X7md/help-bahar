import React, { Component } from "react";
class Tests extends Component {
  state = { showing: true };

  render() {
    
    return (
     <main>
      <nav>
        <ul className="nav-list">
          <li className="jdwl"> الجدول </li>
          <li className="best"> لوحة الشرف</li>
          <li className="rules"> القوانين</li>
          <li className="apptow"> البرامج</li>
        </ul>
      </nav>
      <section>
        <img src="./real.jpg" alt="logo" />
      </section>
     </main> 
    );
  }
}

export default Tests;