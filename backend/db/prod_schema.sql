

DROP DATABASE IF EXISTS streetbites;


CREATE DATABASE streetbites;


\c streetbites;

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