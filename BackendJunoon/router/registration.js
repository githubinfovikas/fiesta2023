let express = require('express');
let cors = require('cors');
let registerationService = require('../services/registration');
let RegistrationModel = require('../models/registerationDetails');
let sendMail = require('../services/mail.service');
let StudentModel = require('../models/student');
let router = express();
router.use(cors());

//all event registation
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
            } else {
                let data = await RegistrationModel.create(req.body);
                let registerationDetails = await RegistrationModel.findOne({ leaderUserID: req.body.leaderUserID, event: req.body.event });
                console.log(registerationDetails.memberNameAndUserID);
                let userIdList = [];
                registerationDetails.memberNameAndUserID.forEach(element => {
                    userIdList.push(element.userId);
                });
                let mailOption = {
                    from: 'junoonmit@gmail.com',
                    to: req.body.email,
                    subject: `Registered successfully for ${req.body.event}`,
                    html: `
                      <p>Event Name:<strong> ${registerationDetails.event}</strong></p>
                      <p>Leader Name:<strong> ${registerationDetails.leaderName}</strong></p>
                      <p>Leader User ID:<strong>${registerationDetails.leaderUserID}</strong></p>
                      <p>Member User ID:<strong>${JSON.stringify(userIdList)}</strong></p>
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

//Online Event registration
router.post("/onlineEventReg", async (req, res) => {
    try {
      let val = await RegistrationModel.findOne({
        leaderUserID: req.body.leaderUserID,
        event: req.body.event,
      });
      if (!val) {
        let vikas = await StudentModel.findOne({ userID: req.body.leaderUserID });
        if (vikas != null && (vikas.paidOnlineEvent || vikas.paid)) {
          let data = await RegistrationModel.create(req.body);
          let registerationDetails = await RegistrationModel.findOne({
            leaderUserID: req.body.leaderUserID,
            event: req.body.event,
          });
          let mailOption = {
            from: "junoonmit@gmail.com",
            to: req.body.email,
            subject: `Registered successfully for ${req.body.event}`,
            html: `
                        <p>Event Name:<strong> ${registerationDetails.event}</strong></p>
                        <p>Leader Name:<strong> ${registerationDetails.leaderName}</strong></p>
                        <p>Leader User ID:<strong>${registerationDetails.leaderUserID}</strong></p>
                        <a href="fiestamit.in"><strong>Official Page</strong></a>
                       `,
          };
          await sendMail(mailOption);
          res.status(200).json({
            message: "Registered Successfully",
            success: true,
            response: data,
            path: req.path,
            registerationDetails: registerationDetails,
          });
        } else {
          res.status(404).json({
            message: "This User ID is Not Valid !",
            success: false,
          });
        }
      } else {
        res.status(402).json({
          message: "Already Registered!",
          success: false,
        });
      }
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error!",
        success: false,
      });
    }
  });

router.get('/registrationData', async (req, res) => {
    let details = await RegistrationModel.find({});
    res.send(details);
})

module.exports = router;