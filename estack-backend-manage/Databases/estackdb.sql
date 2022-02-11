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

CREATE TABLE users (
                       id BIGINT(20) NOT NULL AUTO_INCREMENT,
                       uname VARCHAR(40),
                       email VARCHAR(40) NOT NULL,
                       password VARCHAR(256) NOT NULL,
                       fname VARCHAR(100),
                       lname VARCHAR(100),
                       birthdate DATE,
                       street VARCHAR(200),
                       city VARCHAR(85),
                       state CHAR(2) CHECK(LENGTH(state) = 2),
                       zip_code CHAR(5) CHECK(LENGTH(zip_code) = 5),
                       created DATETIME NULL,
                       updated DATETIME NULL,
                       PRIMARY KEY(id),
                       UNIQUE KEY(email),
                       UNIQUE KEY (street, city, state, zip_code),
                       UNIQUE KEY(uname)
) ENGINE=INNODB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8;

CREATE TABLE owners (
                        id BIGINT(20) NOT NULL AUTO_INCREMENT,
                        user_id BIGINT(20) NOT NULL,
                        email VARCHAR(40) NOT NULL,
                        cvv VARCHAR(4) CHECK(LENGTH(cvv) = 3 or LENGTH(cvv) = 4),
                        card_number VARCHAR(23) CHECK(LENGTH(card_number) >= 9),
                        expiration_date DATE,
                        upgraded BOOLEAN DEFAULT FALSE,
                        PRIMARY KEY (id),
                        FOREIGN KEY(user_id) REFERENCES users(id)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

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
                           cvv VARCHAR(4) CHECK(length(cvv) = 3 or length(cvv) = 4),
                           card_number VARCHAR(23) CHECK(length(card_number) >= 9),
                           expiration_date DATE,
                           PRIMARY KEY (email)
) engine = innodb;


CREATE TABLE properties (
                            id BIGINT(20) NOT NULL AUTO_INCREMENT,
                            ownerId BIGINT(20) NOT NULL,
    -- address
                            street VARCHAR(200) NOT NULL,
                            city VARCHAR(85) NOT NULL,
                            state CHAR(2) NOT NULL CHECK(length(state) = 2),
                            zipCode CHAR(5) NOT NULL CHECK(length(zipCode) = 5),

-- information and details
                            propertyType VARCHAR(20) NOT NULL,
                            yearBuilt DATE,
                            numBedrooms INT NOT NULL CHECK (numBedrooms >= 1),
                            numBathrooms INT NOT NULL CHECK (numBathrooms >= 1),
                            dateAvailable DATE,
                            leaseDuration INT,
                            squareft DECIMAL(6, 2) NOT NULL CHECK (squareft >= 0),
                            -- amentities and rules
                            ac BOOLEAN,
                            furnished BOOLEAN,
                            balcony BOOLEAN,
                            hardWood BOOLEAN,
                            wheelChairAcces BOOLEAN,
                            garageParking BOOLEAN,
                            offStreetParking BOOLEAN,
                            -- image attachment
                            imgFile VARCHAR(255),
                            -- worth
                            monthlyRent DECIMAL(10, 2),
                            deposit DECIMAL(10, 2),
                            cleaningFee DECIMAL(10, 2),
                            -- description
                            description VARCHAR(500),

                            created DATETIME NULL,
                            updated DATETIME NULL,
                            PRIMARY KEY (id),
                            /* FOREIGN KEY (owner_id) REFERENCES users (id), */
                            UNIQUE KEY (street, city, state, zipCode)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



-- users (uname, email, password, fname, lname, birthdate, street, city, state, zip_code)
insert into users values
                      ('jstone5', 'jared@gmail.com', 'passwordP!', 'Jared', 'Stone', '1961-01-06', '101 Five Finger Way', 'Atlanta', 'GA', '30333'),
                      ('johnDoe1', 'JohnD1@gmail.com', 'passwordP!', 'John', 'Doe', '1999-12-31', '123 Maple Street', 'Anytown', 'PA', '20522'),
                      (NULL, 'sarahprince@gmail.com', 'passwordP!', 'Sarah', 'Prince', NULL,  NULL, NULL, NULL, NULL);

insert into owners values
                       ('jared@gmail.com', '123', '4040 4040 4040 4040 404', '1920-03-01', false),
                       ('JohnD1@gmail.com', '1234', '1234 5678', '2022-01-01', false);

-- insert into properties values
-- ('Front Street', 'Ann Arbor', 'MI', '40044', "Apartment", 2, 2, 860, '1980-01-01', 5, true, true, true, true, true, true, 200000.43, "White House", "jared@gmail.com", "This is the first selling house!", NULL);

-- insert into properties values
-- ('Back Street', 'Ann Arbor', 'MI', '40045', "Apartment", 2, 2, 860, '1980-01-01', 5, true, true, true, true, true, true, 200000.43, "White House 2", "jared@gmail.com", "This is the second selling house!", NULL);