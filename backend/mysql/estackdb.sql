-- This version of the database is intended to work with legacy versions of MySQL

-- -------------------------------------------------
-- ENTER YOUR QUERY SOLUTIONS STARTING AT LINE 116
-- -------------------------------------------------

drop database if exists estackdb;
create database if not exists estackdb;
use estackdb;

-- -----------------------------------------------
-- table structures
-- -----------------------------------------------

create table users (
uname varchar(40),
email varchar(40) not null,
password varchar(256) not null,
fname varchar(100),
lname varchar(100),
birthdate date,
street varchar(200),
city varchar(40),
state varchar(20),
zip_code varchar(10),
primary key (email),
unique key (street, city, state, zip_code),
unique key(uname)
) engine = innodb;

create table owners (
email varchar(40) not null,
cvv varchar(3),
card_number varchar(20),
expiration_date date,
upgraded boolean default false,
primary key (email)
) engine = innodb;

create table landlords (
email varchar(40) not null,
primary key(email)
) engine = innodb;

create table sellers (
email varchar(40) not null,
primary key(email)
) engine = innodb;

create table customers (
email varchar(40) not null,
cvv varchar(3),
card_number varchar(20),
expiration_date date,
primary key (email)
) engine = innodb;

-- users (uname, email, password, fname, lname, birthdate, street, city, state, zip_code)
insert into users values
('jstone5', 'jared@gmail.com', 'passwordP!', 'Jared', 'Stone', '1961-01-06', '101 Five Finger Way', 'Atlanta', 'Georgia', '30333'),
(NULL, 'sarahprince@gmail.com', 'passwordP!', 'Sarah', 'Prince', NULL,  NULL, NULL, NULL, NULL);