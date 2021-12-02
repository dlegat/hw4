# University of Michigan CSC-582 HW4

## Stack preparation

### Optional posgresql through Brew
1. Install Homebrew: $ /bin/bash -c "$(curl -fsSl .sh)"
2. brew install postgresql
3. brew install node

### Initialize App if installed through Brew
1. brew services start postgresql
2. (Optional GUI install) brew install --cask dbeaver-community
3. Configure DB
    - psql postgres -U $$$Username NOTE: MUST MATCH POOL in database.js$$$
    - create database "hw4"
    - test connection: \c hw4
4. (Optional if DBeaver is used) Connect to newly created DB with matching parameters from database.js

### Set up Node.JS app
1. npm init -y
2. npm i express pg

### Start App
1. node index.js

## Project usage directions

- Display multiple rows from a query result
    - localhost:3000/jobs
    - localhost:3000/salaries

- Have a multi-statement transaction, where all statements succeed and the transaction commits.
    - localhost:3000/hire

- Have a multi-statement transaction, where the earlier statements succeed and the later statement fails. 
    - localhost:3000/hire
