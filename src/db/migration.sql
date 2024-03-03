DROP TABLE IF EXISTS mugs CASCADE;
DROP TABLE IF EXISTS mug_pics CASCADE;

CREATE TABLE mugs (
    mug_id SERIAL PRIMARY KEY,
    mug_name VARCHAR,
    mug_description_1 VARCHAR,
    mug_description_2 VARCHAR,
    mug_shipping VARCHAR,
    mug_cost INTEGER
);

CREATE TABLE mug_pics (
    mug_id INT REFERENCES mugs(mug_id),
    mug_pic_main VARCHAR,
    mug_pic_extra VARCHAR
);