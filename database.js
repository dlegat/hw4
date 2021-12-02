const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hw4',
  password: 'password',
  port: 5432
});


const getJobs = (request, response) => {
    pool.query(
      `select * from jobs 
        order by id asc`,
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows);
      }
    )
  }

const getTotalSalaryByLocation = (request, response) => {
    pool.query(
      ` select job1.name, list3.location, sal2.salary * list3.location_multiplier as total_salary
        from jobs job1
        inner join salaries sal2 on job1.id = sal2.job_id
        inner join job_listings list3 on job1.name = list3.job_name;`,
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows);
      }
    )
  }

const hireCandidate = (request, response) => {

  const candidateName = 'Dan Legat';

  // Unfortunately Postgres doesn't allow parameters in a a prepared statement
  // Intent was to make the strings parameters instead of directly adding them to the transaction
  // In Postgres I believe the entire transaction gets rolled back on error
  // So no need to wrap transaction in begin/end and exception / rollback transaction
    pool.query(
      `begin transaction;

        insert into hires (position, candidate, location, total_comp)
          select *
          from (select 'Full Stack Engineer', 'Dan Legat', 'New York', 200000)
          as ins(position, candidate, location, total_comp)
          where exists (
          select from job_listings j
          where j.job_name = ins.position
          and j.location = ins.location);
      
        delete from job_listings
        where job_name = 'Full Stack Engineer'
        and location = 'New York';
    
      commit transaction;`,
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send('Sucessfully hired candidate ' + candidateName);
      }
    )
  }

  module.exports = {
    getJobs,
    getTotalSalaryByLocation,
    hireCandidate
  }
