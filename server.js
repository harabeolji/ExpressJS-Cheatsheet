const
	http = require('http'),
	express = require('express')
	cors = require('cors');

// List of routes
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 3000;

app.use('/user', userRouter);

const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
	console.log('Listening on port ', port);
});