CREATE FULLTEXT INDEX index_adress ON sakila.address(address);

SELECT * FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

DROP INDEX index_adress ON sakila.address;

SELECT * FROM sakila.address
WHERE address LIKE '%drive%';