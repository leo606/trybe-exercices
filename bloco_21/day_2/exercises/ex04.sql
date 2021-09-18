SELECT 
    th.`name`, th.`location`, mo.title, mo.director
FROM
    Pixar.Theater AS th
        LEFT JOIN
    Pixar.Movies AS mo ON mo.theater_id = th.id
ORDER BY th.`name`