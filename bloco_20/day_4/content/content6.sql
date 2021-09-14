SELECT 
    *
FROM
    sakila.actor;
    
SET SQL_SAFE_UPDATES = 0;
    

update sakila.actor
set first_name = 'JULES'
where first_name = 'JULIA'
