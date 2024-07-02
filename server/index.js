//  IMPORTO DEPENDENCIAS DE NODE
import express from 'express';  
import logger from 'morgan';

//  ESTABLESCO EL PUERTO
const port = process.env.PORT ?? 3000;

//  ESTABLESCO EL SERVIDOR CON EXPRESS
const app = express();
//  QUE EL SERVIDOR USO EL LOGGER
app.use(logger('dev'));

//  CUANDO RECIBA UN GET QUE HAGO ESTO
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html');
});

//  ARRANCO EL SERVIDOR PARA QUE ESCUCHE EN EL PUERTO
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});