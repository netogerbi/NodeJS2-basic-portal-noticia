function NoticiasDAO(connection) {
  this._conn = connection
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
  this._conn.query(`SELECT * FROM noticias WHERE id_noticia=${id_noticia};`, callback);
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._conn.query('SELECT * FROM noticias ORDER BY data_criacao DESC;', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._conn.query('INSERT INTO noticias SET ? ', noticia, callback)
}

NoticiasDAO.prototype.get5Last = function(callback) {
  this._conn.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5 ;', callback)
}

module.exports = () => NoticiasDAO