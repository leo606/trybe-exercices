SELECT 
    cu.`CustomerId`, cu.`Name`, ca.`Name`
FROM
    hotel.Cars AS ca
	INNER JOIN
    hotel.Customers AS cu
WHERE EXISTS(
	SELECT * FROM hotel.CarSales AS cs
    WHERE cs.CustomerID = cu.CustomerId AND cs.CarID = ca.Id
)