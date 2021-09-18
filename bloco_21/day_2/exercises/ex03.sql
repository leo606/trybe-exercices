SELECT 
    f.title, bo.rating
FROM
    Pixar.Movies AS f
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = f.id
ORDER BY bo.rating DESC