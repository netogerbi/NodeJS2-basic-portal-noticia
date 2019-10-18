const conn = require('../../config/db.connection')()

module.exports = (app) => {

  app.get("/noticias", (req, res) => {

    const query = 'SELECT * FROM noticias;'
    conn.query(query, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    })
  });
}
