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
        let studentDetails = await StudentModel.findOne({ email: req.body.email });
        let transactionData = await StudentModel.findOne({trID:trID});
        let data = await StudentModel.updateOne({ email: req.body.email },{ $set: { image: image, trID: trID } });
       if(transactionData && transactionData.trID === trID){
        res.status(402).json(
            {
                message:"Alreday uploaded, Check Your Email",
                success:false,

            }
        )
       }
       else if (data.matchedCount === 0) {
            res.status(400).json({
                message: "First complete your registration !",
                success: false,
                response: data,
            })
        }
        else {
            // yha email bhejna hai.
            let mailOptions = {
                from: 'junoonmit@gmail.com',
                to: studentDetails.email,
                subject: "Registration Successful for FIESTA'2023",
                html: `
                <p>Greetings from FIESTA</p>
                <p>Name:<strong> ${studentDetails.name}</strong></p>
                <p>College:<strong> ${studentDetails.collegeName}</strong></p>
                <p>User ID:<strong>${studentDetails.userID}</strong></p>
                <pre><br>Your registration is now complete. We welcome you to be a part of FIESTA.<br>Your fst user-ID is: <strong>${studentDetails.userID}</strong>. Please don't share your fst-ID with others.<br>You can now visit our website <a href="fiestamit.in"><strong>fiestamit.in</strong></a> to get the latest updates on our Events.<br>You can register for our competitions, and other events using this website.<br>Stay informed by checking our website and make use of this exciting opportunity to the fullest,<br>by participating in our events. Hope to see you soon in our upcoming events.<br><br>Note: Your User ID will be Activated Within 24 hours. At the time of physical verification it's mandatory to carry Adhar Card/College ID and Two Photos.
                </pre><br><pre>Regards,<br>Fiesta Team</pre>
              `
            }
            mailService(mailOptions);
            res.status(200).json({
                message: "Your registration has been successful. Please check your email for fiesta'23 User ID",
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



// OnlineEventUpdate
router.put('/OnlineEventUpdate', async (req, res) => {
    try {
        console.log(req.body.email);
        let data = await StudentModel.updateOne({ email: req.body.email }, { $set: { paidOnlineEvent: true } });

        if (data.matchedCount === 0) {
            res.status(400).json({
                message: "Wrong Email",
                success: false,
                response: data,
            })
        } else {
            res.status(200).json(
                {
                    message: " Online Event Paid modified successfully ",
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



module.exports = router;