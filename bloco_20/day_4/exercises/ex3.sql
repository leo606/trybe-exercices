-- O diretor do filme "Procurando Nemo" está incorreto,
-- na verdade ele foi dirigido por Andrew Staton.
-- Corrija esse dado utilizando o UPDATE .
SET SQL_SAFE_UPDATES = false;

SELECT 
    *
FROM
    Pixar.Movies;

UPDATE Pixar.Movies 
SET 
    director = 'Andrew Staton'
WHERE
    title LIKE 'Procurando Nemo'