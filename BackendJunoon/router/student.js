let express = require('express');
let router = express();
let studentService = require('../services/student');
let StudentModel = require('../models/student');
let mailService = require('../services/mail.service');
const { trusted } = require('mongoose');
router.post('/register', async (req, res) => {
    try {
        //After register success , User ID create (Payment not need), you are payment then send userID
        let userID = "FIESTA" + req.body.phoneNo;
        let data = {
            name: req.body.name,
            collegeName: req.body.collegeName,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            document: req.body.document,
            documentID: req.body.documentID,
            tshirt:req.body.tshirt,
            userID: userID,
        }
        let valueEmail = await StudentModel.findOne({ email: req.body.email });
        let valuePhone = await StudentModel.findOne({ phoneNo: req.body.phoneNo });
        if (!valueEmail && !valuePhone) {
            let val = await studentService.registerStudent(data);
            res.status(200).json({
                message: "Registered Successfully !",
                response: val,
                path: req.path,
                success: true,
            })
        }

        else {
            res.status(402).json({
                message: "Already Registered, Proceed to payment",
                success: false,
            })
        }
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error !",
            success: false,
        })
    }
})




router.get('/all', async (req, res) => {
    let details = await StudentModel.find({});
    res.send(details);
})


router.post('/upload', async (req, res) => {
    try {
        //image upload
        let image = req.body.image;
        let trID = req.body.trID;
        // console.log("are yrr tr0r"+trID);
        let data = await StudentModel.updateOne({ email: req.body.email },{ $set: { image: image, trID: trID } });
        let studentDetails = await StudentModel.findOne({ email: req.body.email });
        if (data.matchedCount === 0) {
            res.status(400).json({
                message: "First complete your registration !",
                success: false,
                response: data,
            })
        } else {
            // yha email bhejna hai.
            let mailOptions = {
                from: 'junoonmit@gmail.com',
                to: studentDetails.email,
                subject: "Payment Completed Successfully for Fiesta'23",
                html: `
                <p>Name:<strong> ${studentDetails.name}</strong></p>
                <p>College:<strong> ${studentDetails.collegeName}</strong></p>
                <p>User ID:<strong>${studentDetails.userID}</strong></p>
                <p>Your User ID will be Activated Within 24 hours</p>
                <p>At the time of physical verification it's mandatory to carry Adhar Card , College Id and Two Photos.</p>
                <a href="fiestamit.in"><strong>Official Page </strong></a> <br/><br/>
              `
            }
            mailService(mailOptions);
            res.status(200).json({
                message: "Uploaded successfully",
                success: true,
                response: data,
            })
        }

    } catch (e) {
        res.status(500).json({
            message: "Internal server error !",
            success: false,
        })
    }


})

router.put('/update', async (req, res) => {
    try {
        console.log(req.body.email);
        let data = await StudentModel.updateOne({ email: req.body.email }, { $set: { paid: true } });

        if (data.matchedCount === 0) {
            res.status(400).json({
                message: "Wrong Email",
                success: false,
                response: data,
            })
        } else {
            res.status(200).json(
                {
                    message: "Modified successfully ",
                    success: true,
                    response: data,
                }
            )
        }

    } catch (e) {
        res.status(500).json({
            message: "Internal server error !",
            success: false,
        })
    }
})

router.put('/removeImage', async (req, res) => {
    try {
        let data = await StudentModel.updateOne({ email: req.body.email }, { $set: { image: "" } });
        if (data.matchedCount === 0) {
            res.status(400).json({
                message: "Wrong Email",
                success: false,
                response: data,
            })
        } else {
            res.status(200).json(
                {
                    message: "modified successfully ",
                    success: true,
                }
            )
        }


    } catch (e) {
        res.status(500).json({
            message: "Internal server error !",
            success: false,
        })
    }
})
module.exports = router;