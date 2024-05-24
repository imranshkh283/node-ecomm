require("module-alias/register")
const app = require("./app/app");
require('./config/mongoose')(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('*************                           *************')
    console.log('*************       App started...      *************')
    console.log('*************                           *************')
});

app.get('/', (req, res) => {
    res.send('Hello Express !')
});