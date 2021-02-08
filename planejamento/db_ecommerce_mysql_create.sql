CREATE TABLE `tb_categoriaProduto` (
	`id_categoria` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id_categoria`)
);

CREATE TABLE `tb_produto` (
	`id_produto` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`preco_unitario` FLOAT NOT NULL,
	`id_categoria` INT NOT NULL,
	`imagem_produto` varchar(255) NOT NULL,
	PRIMARY KEY (`id_produto`)
);

CREATE TABLE `tb_cliente` (
	`id_cliente` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`genero` varchar(1) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(55) NOT NULL,
	`localizacao` varchar(255) NOT NULL,
	PRIMARY KEY (`id_cliente`)
);

CREATE TABLE `tb_carrinho` (
	`id_carrinho` BINARY NOT NULL AUTO_INCREMENT,
	`id_produto` INT NOT NULL AUTO_INCREMENT,
	`id_cliente` FLOAT NOT NULL,
	`valor_total` FLOAT NOT NULL,
	`forma_pagamento` varchar(10) NOT NULL,
	PRIMARY KEY (`id_carrinho`)
);

CREATE TABLE `tb_fornecedor` (
	`id_loja` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	`localizacao` BINARY NOT NULL AUTO_INCREMENT,
	`email` varchar(50) NOT NULL,
	`senha` varchar(50) NOT NULL,
	PRIMARY KEY (`id_loja`)
);

CREATE TABLE `tb_categoriaFornecedor` (
	`id_categoriaLoja` INT NOT NULL AUTO_INCREMENT,
	`id_loja` INT NOT NULL,
	`segmento` varchar(50) NOT NULL,
	PRIMARY KEY (`id_categoriaLoja`)
);

ALTER TABLE `tb_produto` ADD CONSTRAINT `tb_produto_fk0` FOREIGN KEY (`id_categoria`) REFERENCES `tb_categoriaProduto`(`id_categoria`);

ALTER TABLE `tb_carrinho` ADD CONSTRAINT `tb_carrinho_fk0` FOREIGN KEY (`id_produto`) REFERENCES `tb_produto`(`id_produto`);

ALTER TABLE `tb_carrinho` ADD CONSTRAINT `tb_carrinho_fk1` FOREIGN KEY (`id_cliente`) REFERENCES `tb_cliente`(`id_cliente`);

ALTER TABLE `tb_fornecedor` ADD CONSTRAINT `tb_fornecedor_fk0` FOREIGN KEY (`localizacao`) REFERENCES `tb_cliente`(`localizacao`);

ALTER TABLE `tb_categoriaFornecedor` ADD CONSTRAINT `tb_categoriaFornecedor_fk0` FOREIGN KEY (`id_loja`) REFERENCES `tb_fornecedor`(`id_loja`);

