module.exports = function () {

  this.getNoticias = function(conn, callback) {
    conn.query('SELECT * FROM noticias WHERE id_noticias;', callback);
  }

  this.getNoticia = function(conn, callback) {
    conn.query('SELECT * FROM noticias WHERE id_noticias=2;', callback);
  }

  this.salvarNoticia = function(noticia, conn, callback) {
    conn.query('INSERT INTO noticias SET ? ', noticia, callback)
  }

  return this;

}