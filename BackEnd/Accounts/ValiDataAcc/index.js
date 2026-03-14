const ValiDataAccouts = (DataAcc) => {
    let errors = []
    if (!DataAcc.Firstname) {
        errors.push('กรุณากรอกชื่อ ☻')
    }
    if (!DataAcc.Lastname) {
        errors.push('กรุณากรอกนามสกุล ☻')
    }
    if (!DataAcc.Age) {
        errors.push('กรุณากรอกอายุ ☻')
    }
    if (!DataAcc.Username) {
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
module.exports = ValiDataAccouts