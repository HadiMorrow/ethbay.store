const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(process.cwd(), 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'build/index.html'))
})
app.listen(port, () => {
   console.log('Server is up!');
});