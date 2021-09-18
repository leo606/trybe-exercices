SELECT 
    f.title, bo.domestic_sales, bo.international_sales
FROM
    Pixar.Movies AS f
        INNER JOIN
    Pixar.BoxOffice AS bo ON bo.movie_id = f.id
WHERE bo.domestic_sales > bo.international_sales