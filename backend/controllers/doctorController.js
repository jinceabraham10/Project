const Doctor=require('../models/doctorModel.js')


exports.submitForVerification=async (req,res)=>{
    try {

        const toBeVerifiedData=req.body
        toBeVerifiedData.status=3
        console.log(toBeVerifiedData)
        const resp=new Doctor(toBeVerifiedData)
        console.log(resp)
        res.status(200).json({message:"submitted for verification"})
        
    } catch (error) {

        console.log(error)
        
    }
}


exports.getAllDoctors=async (req,res)=>{
    try {
        const allDoctors=await Doctor.find({})
        await console.log(allDoctors)
        if(allDoctors.length==0){
            return res.status(404).json({message:`No Doctors Available`})
        }
        res.status(200).json({allDoctors:allDoctors,message:"success fetched all doctors"})
        
    } catch (error) {
         res.status(400).json({message:`error ${error}`})
        
    }
}


exports.getDoctorDetails=async (res,req)=>{
    try {

        const doctorDetails=await Doctor.find({_id:id})
        console.log(doctorDetails)
        res.status(200).json({message:"fetched Successfully",doctorDetails:doctorDetails})
        
    } catch (error) {
        
    }
}
