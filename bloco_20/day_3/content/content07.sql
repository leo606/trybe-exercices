SELECT 
    first_name, last_name, email
FROM
    sakila.customer 
WHERE lower(last_name) in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')