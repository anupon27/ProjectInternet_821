const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors())


let connection = null
const connectToDatabase = async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'LoveMySQL',
        database: 'webdb',
        port: 8821
    })
}


    app.listen(port, async () => {
        await connectToDatabase()


        const accountsRouter = require('./Accounts/rountes/AccountsGet/AccGet') //ส่วนที่ ต่อ path สำหรับดึงข้อมูลทั้งหมดจากตาราง accounts จาก AccountsGet/index.js
        app.use(accountsRouter(connection))

        const accountsPostRouter = require('./Accounts/rountes/AccountsPost/AccPost') //ส่วนที่ ต่อ path สำหรับเพิ่มข้อมูลลงในตาราง accounts จาก AccountsPost/index.js
        app.use(accountsPostRouter(connection))

        const accountsDelRouter = require('./Accounts/rountes/AccountsDel/AccDel') //ส่วนที่ ต่อ path สำหรับลบข้อมูลจากตาราง accounts จาก AccountsDel/index.js
        app.use(accountsDelRouter(connection))

        console.log(`Server is running on port ${port}`);
    });
