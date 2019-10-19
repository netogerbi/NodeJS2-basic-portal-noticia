CREATE TABLE noticias (
    id_noticias BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    noticia TEXT NOT NULL,
    resumo VARCHAR(100),
    autor VARCHAR(30),
    data_noticia DATE
);