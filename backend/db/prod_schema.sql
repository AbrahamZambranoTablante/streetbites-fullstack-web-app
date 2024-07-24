-- delete any database with name of vendors_dev

DROP DATABASE IF EXISTS vendors_prod;

-- create a new database with name of vendors_dev
CREATE DATABASE vendors_prod;

-- connect to vendors_dev
\c vendors_prod;

CREATE TABLE
    vendors 
    (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT,
        cuisine TEXT NOT NULL,
        address TEXT NOT NULL,
        neighborhood TEXT NOT NULL,
        borough TEXT NOT NULL,
        description VARCHAR(150),
        price_range TEXT NOT NULL,
        menu_photo TEXT,
        vendor_photo TEXT,
        vegan BOOLEAN,
        likes INT
    );