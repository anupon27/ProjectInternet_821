const ModelAccouts = require('../models/Accouts')

const ValiDataAccouts = (DataAcc) => {
    let errors = []
    if (!DataAcc.Fristname) {
        errors.push('กรุณากรอกชื่อ ☻')
    }
    if (!DataAcc.Lastname) {
        errors.push('กรุณากรอกนามสกุล ☻')
    }
    if (!DataAcc.Age) {
        errors.push('กรุณากรอกอายุ ☻')
    }
    if (!DataAcc.User) {
        errors.push('กรุณากรอกชื่อผู้ใช้ ☻')
    }
    if (!DataAcc.Password) {
        errors.push('กรุณากรอกรหัสผ่าน ☻')
    }
    if (!DataAcc.Email) {
        errors.push('กรุณากรอกอีเมล ☻')
    }
    return errors
}

const getAllAccounts = async (req, res, next) => {
    try {
        const users = await ModelAccouts.getAllAccounts()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const getBYIDAccounts = async (req, res, next) => {
    try {
        const user = await ModelAccouts.getBYIDAccounts(req.params.id)
        if (!user) return res.status(404).json({ message: 'ไม่พบผู้ใช้' })
        res.json(user)
    } catch (error) {
        next(error)
    }
}

const createAccounts = async (req, res, next) => {
    try {
        const errors = ValiDataAccouts(req.body)
        if (errors.length > 0) return res.status(400).json({ message: 'กรอกข้อมูลไม่ครบ', errors })
        const results = await ModelAccouts.createAccounts(req.body)
        res.json({ message: 'สร้างบัญชีสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }
}

const updateAccounts = async (req, res, next) => {
    try {
        
        const errors = ValiDataAccouts(req.body) 
        if (errors.length > 0) return res.status(400).json({ message: 'กรอกข้อมูลไม่ครบ', errors })

        const results = await ModelAccouts.updateAccounts(req.params.id, req.body)
        res.json({ message: 'อัปเดตบัญชีสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }   
}
const deleteAccounts = async (req, res, next) => {
    try {
        const results = await ModelAccouts.deleteAccounts(req.params.id)
        res.json({ message: 'ลบบัญชีสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }
}

const loginAccounts = async (req, res, next) => {
    try {
        const { User, Password } = req.body
        if (!User || !Password) {
            return res.status(400).json({ message: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' })
        }
        const user = await ModelAccouts.getByUserAccounts(User)
        if (!user || user.Password !== Password) {
            return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' })
        }
        res.json({ message: 'เข้าสู่ระบบสำเร็จ', data: { Id_Accounts: user.Id_Accounts, User: user.User } })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAccounts,
    getBYIDAccounts,
    createAccounts,
    loginAccounts,
    updateAccounts,
    deleteAccounts
}