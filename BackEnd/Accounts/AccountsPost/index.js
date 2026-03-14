const routerpost = express.Router();
const validateAccount = require('../ValiDataAcc/index');

module.exports = (connection) => {
    routerpost.post('/Accounts', async (req, res) => {
        try {
            let AccountData = req.body
            const errors = validateAccount(AccountData)
            if (errors.length > 0) {
                throw {
                    message: 'กรอกข้อมูลไม่ครบ',
                    errors: errors
                }
            }
            const results = await connection.query('INSERT INTO Accounts SET ?', req.body);
            console.log('results', results)
            res.json({
                message: 'Account created successfully',
                data: results[0]
            })
        }
        catch (error) {
        const errMassge = error.message || 'Error creating account'
        const errors = error.errors || []
        console.error('Error creating account:', errMassge);
        res.status(500).json({
            message: errMassge,
            errors: errors
        })
    }
})
return routerpost

}

