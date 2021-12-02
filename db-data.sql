-- DB queries to run on initialize

-- create jobs table
create table if not exists jobs (
	id int primary key,
	name varchar(30) unique,
	role varchar(30),
	job_code int
);

-- add data to jobs table
insert into jobs (id, name, role, job_code)
	values(1, 'Full Stack Engineer', 'Technical', 3),
	(2, 'Back End Developer', 'Technical', 2),
	(3, 'Front End Developer', 'Technical', 2),
	(4, 'DevOps Engineer', 'Technical', 2),
	(5, 'UX Designer', 'Product', 1),
	(6, 'Product Manager', 'Product', 3);

-- create salaries table
create table if not exists salaries (
	job_id int,
	salary int,
	bonus int,
	constraint fk_id foreign key(job_id) references jobs(id),
);

-- add data to salaries table
insert into salaries (job_id, salary, bonus)
	values(1, 120000, 25000),
	(2, 100000, 10000),
	(3, 90000, 10000),
	(4, 105000, 10000),
	(5, 80000, 5000),
	(6, 125000, 25000);


-- create job listings table
create table if not exists job_listings (
	job_name varchar(30),
	location varchar(30),
	location_multiplier int,
	constraint fk_job_name foreign key(job_name) references jobs(name)
);

-- add data to users table
insert into job_listings (job_name, location, location_multiplier)
	values('Full Stack Engineer', 'New York', 3),
	('Full Stack Engineer', 'Miami', 1),
	('DevOps Engineer', 'Boston', 2),
	('UX Designer', 'New York', 3),
	('Product Manager', 'Austin', 1),
	('Front End Developer', 'San Francisco', 3);

-- create hires table that is populated once a job listing is filled
create table if not exists hires (
	position varchar(30),
	candidate varchar(30) unique,
	location varchar(30),
	total_comp int
);