const errHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.statusCode || 500).json({
        message: err.message || 'ขออภัยเซิฟเวอร์เกิดข้อผิดพลาด',
        errors: err.errors || []
    });
}

module.exports = errHandler