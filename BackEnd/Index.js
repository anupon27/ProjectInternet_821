const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const validateAccount = require('./Accounts/ValiDataAcc/index') 


const port = 8000;
app.use(bodyParser.json());
app.use(cors())
let Accounts = [] //ใช้ตารางสำหรับเก็บข้อมูลในส่วนของข้อมูลของผู้ใช้เท่านั้นเพื่อเช็คในการเข้าสู่ระบบและการลงทะเบียน


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


        const accountsRouter = require('./Accounts/AccountsGet/index') //ส่วนที่ ต่อ path สำหรับดึงข้อมูลทั้งหมดจากตาราง accounts จาก AccountsGet/index.js
        app.use(accountsRouter(connection))

        const accountsPostRouter = require('./Accounts/AccountsPost/index') //ส่วนที่ ต่อ path สำหรับเพิ่มข้อมูลลงในตาราง accounts จาก AccountsPost/index.js
        app.use(accountsPostRouter(connection))

        const accountsDelRouter = require('./Accounts/AccountsDel/index') //ส่วนที่ ต่อ path สำหรับลบข้อมูลจากตาราง accounts จาก AccountsDel/index.js
        app.use(accountsDelRouter(connection))

        console.log(`Server is running on port ${port}`);
    });
