-- goint to put all of my sql here

CREATE TABLE IF NOT EXISTS mainposts (
    id SERIAL PRIMARY KEY,
    name TEXT,
    first_time TEXT,
    post TEXT
    
);


CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    name TEXT,
    comment TEXT,
    post_id INTEGER REFERENCES mainposts(id)
);


-- blank inserts
-- INSERT INTO mainposts (name, post) VALUES('', '');
-- INSERT INTO comments (name, comment, post_id) VALUES ('', '','');

INSERT INTO mainposts (name, post) VALUES('dan', 'they make a community section but cant fix the booking?');
INSERT INTO comments (name, comment, post_id) VALUES ('tim', 'well you know what management is like','1');
INSERT INTO comments (name, comment, post_id) VALUES ('dom', 'calm down guys it will be fixed shortly, besides this is just for VIP''s so why worry?','1');
INSERT INTO comments (name, comment, post_id) VALUES ('dan', 'fair point but still','1');

INSERT INTO mainposts (name, post) VALUES('Nissa', 'oh here we go');
INSERT INTO comments (name, comment, post_id) VALUES ('dan', 'do you ever stop complaining?','2');
INSERT INTO comments (name, comment, post_id) VALUES ('Tina', 'you know she doesn''t','2');

INSERT INTO mainposts (name, post) VALUES('Bob', 'first time on VIP anything i need to be aware of?');
INSERT INTO comments (name, comment, post_id) VALUES ('Vahleth', 'dude you made it to VIP, if you can survive that you''re sorted','3');
INSERT INTO comments (name, comment, post_id) VALUES ('dan', 'yeah just dont hang around the 3rd floor','3');
INSERT INTO comments (name, comment, post_id) VALUES ('Ben', 'dont get me started','3');
INSERT INTO comments (name, comment, post_id) VALUES ('Mark', 'what do you mean survive? this is a hotel','3');
INSERT INTO comments (name, comment, post_id) VALUES ('Ben', 'oh mark you sweet summer child....how did you ever get VIP if you dont even know the facts? buy me a drink at the bar and i''l tell you all about it','3');
INSERT INTO comments (name, comment, post_id) VALUES ('Nissa', 'don''t buy ben drinks','3');

INSERT INTO mainposts (name, post) VALUES('Mary', 'this is exciting');
INSERT INTO comments (name, comment, post_id) VALUES ('Beth', 'I know right lol','4');

INSERT INTO mainposts (name, post) VALUES('Tom', 'anyone other than myself on here a tad...mortally challenged? looks like the normals are getting VIP now');
INSERT INTO comments (name, comment, post_id) VALUES ('Dom', 'we''re not all as confident as you Tom, besides we''ve only been live for a couple hours, give it time','5');