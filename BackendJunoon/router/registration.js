let express = require('express');
let cors = require('cors');
let registerationService = require('../services/registration');
let RegistrationModel = require('../models/registerationDetails');
let sendMail = require('../services/mail.service');
let StudentModel = require('../models/student');
let router = express();
router.use(cors());
router.post('/register-event', async (req, res) => {
    try {
        let val = await RegistrationModel.findOne({ leaderUserID: req.body.leaderUserID, event: req.body.event });
        if (!val) {
            let vikas = await StudentModel.findOne({ userID: req.body.leaderUserID });
            if (!vikas || !vikas.paid) {
                res.status(404).json({
                    message: "This User ID is Not Valid !",
                    success: false,
                })
            }else{
                let data = await RegistrationModel.create(req.body);
                let registerationDetails = await RegistrationModel.findOne({ leaderUserID: req.body.leaderUserID, event: req.body.event,memberNameAndUserID:req.body.memberNameAndUserID });
                let mailOption = {
                    from: 'vikasdbg453@gmail.com',
                    to: req.body.email,
                    subject: `Registered successfully in ${req.body.event}`,
                    html: `
                      <p>Event Name:<strong> ${registerationDetails.event}</strong></p>
                      <p>Leader Name:<strong> ${registerationDetails.leaderName}</strong></p>
                      <p>User ID:<strong>${registerationDetails.leaderUserID}</strong></p>
                      <p>User ID:<strong>${registerationDetails.memberNameAndUserID}</strong></p>
                      <a href="fiestamit.in"><strong>Official Page</strong></a>
                     `
                }
                await sendMail(mailOption);
                res.status(200).json({
                    message: "Registered Successfully",
                    success: true,
                    response: data,
                    path: req.path,
                    registerationDetails: registerationDetails,
                })
            }  
        } else {
            res.status(402).json({
                message: "Already Registered!",
                success: false,
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error!",
            success: false,
        })
    }
})



router.get('/registrationData', async (req, res) => {
    let details = await RegistrationModel.find({});
    res.send(details);
})

module.exports = router;