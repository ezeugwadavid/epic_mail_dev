// const pool = require("../../config/database");
// const { Pool, Client } = require('pg');

// module.exports = {
//   create:  (data, callBack) => {
//       /*pool.query(
//           `insert into users (firstname, lastname, email, password)
//           values (?,?,?,?)`,
//           [
//             data.firstname,
//             data.lastname,
//             data.email,
//             data.password
            

//           ],*/
//           pool.query(
//             `insert into users (firstname, lastname, email, password)
//             values (${firstname}, ${lastname}, ${email}, ${password})`,
  
//           (error, results, fields) => {
//             if (error) {
//              return  callBack(error);

//             }
//             return callBack(null, results)
//           }

//       );
//     }
//   }; 


const pool = require("../../config/database");


module.exports = {
  create: (data, callBack) => {
    const {firstname, lastname, email, password} = data;
     const query = `insert into users (firstname, lastname, email, password)
    values (${firstname}, ${lastname}, ${email}, ${password})`;
    pool.query(query, (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};


  
        