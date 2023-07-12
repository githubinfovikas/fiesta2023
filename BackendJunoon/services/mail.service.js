let nodemailer  =  require('nodemailer');
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: "junoonmit@gmail.com",
        pass:'adrocznxmonzsgae',
    }
});
// junoonmit@gmail.com  -  adrocznxmonzsgae
//vikasdbg453@gmail.com  - ngairwehndegtteo

let sendMail = async(mailOptions)=>{
    try{
        let mailResponse = await transporter.sendMail(mailOptions);
        console.log(mailOptions);
        return mailResponse;

    }catch(e){
        return e;
    }
}

module.exports = sendMail;