const express = require('express');
app = express();

app.get('/',(req,res)=>{
	res.send({'hi':'there'});
});

const PORT = process.env.PORT || 5001

app.listen(PORT);
console.log(`Server Listeing at Port ${PORT}`);