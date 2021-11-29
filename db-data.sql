-- DB queries to run on initialize

-- create users table
create table users (
	id serial primary key,
	name varchar(30),
	role varchar(30),
	active boolean
);

-- add data to users table

insert into users (name, role, active)
	values('Daniel Legat', 'student', true),
	('Joe Smith', 'student', true),
	('Halil Bisgin', 'professor', true),
	('Holley Jones', 'student', false),
	('Lindsey Miller', 'student', true),
	('Collin Russell', 'student', true);

