-- connect to database
\c vendors_dev;

INSERT INTO
    vendors
    (name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes)
    VALUES
    ("Cholados & Mangos", "929-5414-0486", "Colombian", "86-01 Northern Blvd", "Jackson Heights", "Queens", "Refreshing Colombian fruity drinks!", "$10-$20", "https://instagram/choladosymangos", "https://instagram/choladosymangos", true, 500);