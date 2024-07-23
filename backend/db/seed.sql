-- connect to database
\c vendors_dev;

INSERT INTO
    vendors
    (name, phone, cuisine, address, neighborhood, borough, description, price_range, menu_photo, vendor_photo, vegan, likes)
    VALUES
    ('Cholados & Mangos', '929-5414-0486', 'Colombian', '86-01 Northern Blvd', 'Jackson Heights', 'Queens', 'Refreshing Colombian fruity drinks!', '$10-20','https://www.instagram.com/choladosymangos', 'https://www.instagram.com/choladosymangos', true, 500),
    ('BBQ Truck', '347-379-5026','Chinese','85-01 Whitney Ave', 'Elmhurst', 'Queens','Delicious BBQ on HOT sticks!','$1-10','https://g.co/kgs/oooQaD6','https://g.co/kgs/oooQaD6',false,100);