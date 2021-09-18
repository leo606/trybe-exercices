SELECT Id, Title from hotel.Books
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE hotel.Books.id = Books_Lent.book_id
)