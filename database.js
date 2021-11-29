const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'dlegat',
  host: 'localhost',
  database: 'hw4',
  password: 'touslesmemes2510',
  port: 5432
});


const getUsers = (request, response) => {
    pool.query(
      `select * from users 
        order by id asc`,
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows);
      }
    )
  }


const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('select * from users where id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
  }