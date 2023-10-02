const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// import jsonData from './Data.json';
const jsonData = require('./Data.json')
// -------------------------------------------------------------------------------
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.post('/api/purchase', (req, res) => {
  const purchaseData = req.body;

  fs.readFile('purchases.json', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read purchase data.' });
    }

    let Data = JSON.parse(data); 
    Data.push(purchaseData);

    
    fs.writeFile('purchases.json', JSON.stringify(Data, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed' });
      }
      console.log('Purchase Product successfully.');
      res.status(200).json({ message: 'Purchase successful!' });
    });
  });
});



app.listen(3000);
console.log("server run on 3000");
