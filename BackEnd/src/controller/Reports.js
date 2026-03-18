const ModelReport = require('../models/Reports')

const ValiDataReports = (DataReport) => {
    let errors = []
    if (!DataReport.Itemsnames) {
        errors.push('กรุณากรอกชื่อรายการ ☻')
    }
    if (!DataReport.Report_Discription) {
        errors.push('กรุณากรอกคำอธิบายรายงาน ☻')
    }
    return errors
}

const getAllReports = async (req, res, next) => {
    try {
        const reports = await ModelReport.getAllReports()
        res.json(reports)
    } catch (error) {
        next(error)
    }
}

const getBYIDReports = async (req, res, next) => {
    try {
        const report = await ModelReport.getBYIDReports(req.params.id)
        if (!report) return res.status(404).json({ message: 'ไม่พบรายงาน' })
        res.json(report)
    } catch (error) {
        next(error)
    }
}

const createReports = async (req, res, next) => {
    try {
        const errors = ValiDataReports(req.body)
        if (errors.length > 0) return res.status(400).json({ message: 'กรอกข้อมูลไม่ครบ', errors })
        const results = await ModelReport.createReports(req.body)
        res.json({ message: 'สร้างรายงานสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }
}

const updateReports = async (req, res, next) => {
    try {
        
        const errors = ValiDataReports(req.body) 
        if (errors.length > 0) return res.status(400).json({ message: 'กรอกข้อมูลไม่ครบ', errors })

        const results = await ModelReport.updateReports(req.params.id, req.body)
        res.json({ message: 'อัปเดตรายงานสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }   
}
const deleteReports = async (req, res, next) => {
    try {
        const results = await ModelReport.deleteReports(req.params.id)
        res.json({ message: 'ลบรายงานสำเร็จ', data: results })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllReports,
    getBYIDReports,
    createReports,
    updateReports,
    deleteReports
}