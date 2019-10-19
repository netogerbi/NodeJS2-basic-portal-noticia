function NoticiasDAO(connection) {
  this._conn = connection
}

NoticiasDAO.prototype.getNoticia = function(callback) {
  this._conn.query('SELECT * FROM noticias WHERE id_noticias=2;', callback);
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._conn.query('SELECT * FROM noticias WHERE id_noticias;', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._conn.query('INSERT INTO noticias SET ? ', noticia, callback)
}

module.exports = () => NoticiasDAO