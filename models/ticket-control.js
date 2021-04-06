const path = require('path');
const fs   = require('fs');

class TicketControl {

  constructor() {
    this.ultimo   = 0;
    this.hoy      = new Date().getDate(); // day is DD
    this.tickets  = [];
    this.ultimos4 = [];

    this.init();
  }


  get toJson() {
    return {    
        ultimo: this.ultimo,
        hoy: this.hoy,
        tickets: this.tickets,
        ultimos4: this.ultimos4
      }
  }

  init() {
    const {tickets, hoy, ultimo, ultimos4} = require('../db/db.json');
    if ( hoy === this.hoy ) {
      this.tickets = tickets;
      this.ultimo = ultimo;
      this.ultimos4 = ultimos4;
    } else {
      this.guardarDB();
    }
    // console.log(data);
  }

  guardarDB() {

    const dbPath = path.join(__dirname, '../db/db.json' );
    fs.writeFileSync( dbPath, JSON.stringify( this.toJson ) )// JSON.stringify para convertir un objeto o un string en su equivalente como json

  }
}

module.exports = TicketControl