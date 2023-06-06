const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const PORT = process.env.PORT || 4000;
require('dotenv/config')

//Middlewares
app.use(cors({
    credentials: true,
    origin:true,
}));
app.use(bodyParser.json());

//Import Routes
const projectRoutes = require('./routes/projects');
const customerRoutes = require('./routes/customers');
const sqFtRoutes = require('./routes/squarefootage');
const estimateRoutes = require('./routes/estimate');
const invoiceRoutes = require('./routes/invoice');
const bankStatementRoutes = require('./routes/bankstatement');
const estInvDescription = require('./routes/estInvDescription');
const sqftDescription = require('./routes/sqftDescription');
const projDescription = require('./routes/projDescription');

app.use('/projects',projectRoutes);
app.use('/customers',customerRoutes);
app.use('/squarefootage',sqFtRoutes);
app.use('/estimate',estimateRoutes);
app.use('/invoice',invoiceRoutes);
app.use('/bankstatement',bankStatementRoutes);
app.use('/estInvDescription',estInvDescription);
app.use('/sqftDescription',sqftDescription);
app.use('/projDescription',projDescription);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true}
);

app.listen(4000);