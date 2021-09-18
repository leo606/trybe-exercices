-- SELECT 
--     mo.title, mo.`year`, bo.rating
-- FROM
--     Pixar.Movies AS mo
--         INNER JOIN
--     Pixar.BoxOffice AS bo ON bo.movie_id = mo.id
-- WHERE
--     mo.year > 2009
SELECT 
	title,
    year,
    (
		SELECT rating FROM Pixar.BoxOffice AS bo
        WHERE bo.movie_id = id
    ) AS rating
FROM Pixar.Movies
WHERE year > 2009