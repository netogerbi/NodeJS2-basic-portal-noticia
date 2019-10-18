CREATE TABLE noticias (
    id_noticias BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    noticia TEXT NOT NULL
);

INSERT INTO noticias (titulo, noticia) VALUES ('Titulo1', 'Noticia 1');
INSERT INTO noticias (titulo, noticia) VALUES ('Titulo2', 'Noticia 2');
INSERT INTO noticias (titulo, noticia) VALUES ('Titulo3', 'Noticia 3');