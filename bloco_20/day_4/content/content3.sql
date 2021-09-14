insert into
	sakila.actor(`first_name`, `last_name`)
	select
		first_name, last_name
	from
		sakila.customer
		limit 5