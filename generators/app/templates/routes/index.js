import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
<% if(options.viewEngine != 'none'){ %>  res.render('index', { title: 'Express' });<% } else { %>  res.json({ title: 'Express' });<% } %>
});

export default router;
