const { create } = require("./user.service");
const { genSaltSync, hashSync } = require('bcryptjs');
//var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("B4c0/\/", salt);
//console.log(process.env.DB_USER)
 /* module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: "Database connection error"
                    

                });
            }
            return res.status(200).json({
                success: 1,
                data: results

            });
        });
    }
}
*/

module.exports = {
    createUser: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        console.log(results)
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
       
      });
    }
}
