-- delete any database with name of vendors_dev

DROP DATABASE IF EXISTS vendors_dev;

-- create a new database with name of vendors_dev
CREATE DATABASE vendors_dev;

-- connect to vendors_dev
\c vendors_dev;

CREATE TABLE
    vendors 
    (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT,
        cuisine TEXT NOT NULL,
        location TEXT NOT NULL,
        description VARCHAR(150),
        price_range TEXT NOT NULL,
        menu_photo TEXT,
        vendor_photo TEXT,
        vegan BOOLEAN,
        likes INT
    );