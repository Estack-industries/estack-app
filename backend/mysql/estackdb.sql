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
uname VARCHAR(40),
email VARCHAR(40) NOT NULL,
password VARCHAR(256) NOT NULL,
fname VARCHAR(100),
lname VARCHAR(100),
birthdate DATE,
street VARCHAR(200),
city VARCHAR(40),
state VARCHAR(20),
zip_code VARCHAR(10),
PRIMARY KEY (email),
unique key (street, city, state, zip_code),
unique key(uname)
) engine = innodb;

create table owners (
email VARCHAR(40) NOT NULL,
cvv VARCHAR(3),
card_number VARCHAR(20),
expiration_date DATE,
upgraded BOOLEAN default false,
PRIMARY KEY (email)
) engine = innodb;

create table landlords (
email VARCHAR(40) NOT NULL,
PRIMARY KEY(email)
) engine = innodb;

create table sellers (
email VARCHAR(40) NOT NULL,
PRIMARY KEY(email)
) engine = innodb;

create table customers (
email VARCHAR(40) NOT NULL,
cvv VARCHAR(3),
card_number VARCHAR(20),
expiration_date DATE,
PRIMARY KEY (email)
) engine = innodb;


create table properties (
    -- address
    street VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state CHAR(2) NOT NULL CHECK(length(State) = 2),
    zip CHAR(5) NOT NULL CHECK(length(Zip) = 5),
    lat decimal(6, 2),
    lng decimal(6, 2),
    
    type VARCHAR(20) NOT NULL,
    numBedrooms INT NOT NULL CHECK (numBedrooms >= 1),
    numBathrooms INT NOT NULL CHECK (numBathrooms >= 1),
    squareft DECIMAL(6, 2) NOT NULL CHECK (squareft >= 0),
    yearBuilt DATE,
    garageParking INT,
    ac BOOLEAN,
    wheelChairAcces BOOLEAN,
    offStreetParking BOOLEAN,
    balcony BOOLEAN,
    furnished BOOLEAN,
    hardWood BOOLEAN,
    listingPrice DECIMAL(10, 2),

    property_name VARCHAR(50) NOT NULL,
    owner_email VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    -- image file name
    filename VARCHAR(64),
    PRIMARY KEY (property_Name, owner_Email),
    FOREIGN KEY (Owner_Email) REFERENCES owners (email),
    UNIQUE KEY (street, city, state, zip)
);



-- users (uname, email, password, fname, lname, birthdate, street, city, state, zip_code)
insert into users values
('jstone5', 'jared@gmail.com', 'passwordP!', 'Jared', 'Stone', '1961-01-06', '101 Five Finger Way', 'Atlanta', 'Georgia', '30333'),
(NULL, 'sarahprince@gmail.com', 'passwordP!', 'Sarah', 'Prince', NULL,  NULL, NULL, NULL, NULL);

insert into owners values
('jared@gmail.com', '123', '4040 4040 4040 4040', '1920-03-01', false);

-- insert into properties values
-- ('Front Street', 'Ann Arbor', 'MI', '40044', "Apartment", 2, 2, 860, '1980-01-01', 5, true, true, true, true, true, true, 200000.43, "White House", "jared@gmail.com", "This is the first selling house!", NULL);

-- insert into properties values
-- ('Back Street', 'Ann Arbor', 'MI', '40045', "Apartment", 2, 2, 860, '1980-01-01', 5, true, true, true, true, true, true, 200000.43, "White House 2", "jared@gmail.com", "This is the second selling house!", NULL);