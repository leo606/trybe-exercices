CREATE TABLE albums.albums(
	album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL,
    preco DECIMAL(6,2) NOT NULL,
    genre_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES albums.artists(artist_id),
    FOREIGN KEY (genre_id) REFERENCES albums.genres(genre_id)
) ENGINE = InnoDB;

-- CREATE TABLE albums.artists(
-- 	artist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- ) ENGINE = InnoDB;

CREATE TABLE albums.genres(
	genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
) ENGINE = InnoDB;
