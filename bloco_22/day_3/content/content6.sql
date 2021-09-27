CREATE UNIQUE INDEX unique_name_idx ON sakila.language(name);

SELECT * FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_idx ON sakila.language;