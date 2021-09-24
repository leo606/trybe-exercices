CREATE DATABASE IF NOT EXISTS normalization;

CREATE TABLE normalization.setor(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    setor VARCHAR(30)
);

CREATE TABLE normalization.funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES normalization.funcionario(id),
    FOREIGN KEY (setor_id) REFERENCES normalization.setor(id)
);
DROP TABLE normalization.funcionario_setor;

CREATE TABLE normalization.funcionario(
	id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL,
    data_cadastro DATETIME NOT NULL
);
DROP TABLE normalization.funcionario;