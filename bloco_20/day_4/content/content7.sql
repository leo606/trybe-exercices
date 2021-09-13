SELECT 
    *
FROM
    sakila.category;

update sakila.category
set `name` = 'Science Fiction'
where `name` = 'Sci-Fi'
