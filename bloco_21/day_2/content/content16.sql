SELECT * FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales AS cs
    WHERE cs.CustomerID = c.CustomerId
)