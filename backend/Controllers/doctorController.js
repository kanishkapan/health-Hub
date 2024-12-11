import Doctor from '../models/DoctorSchema.js'
import BookingSchema from '../models/BookingSchema.js'


export const updateDoctor=async(req,res)=>{
    const id=req.params.id

    try{
        const updateDoctor=await Doctor.findByIdAndUpdate(
            id,
            {$set:req.body},
            {new:true})

        res
        .status(200)
        .json({success:true,
        message:'Successfully updated',
        data:updateDoctor,
    });
    }
    catch(err){
        res.status(500).json({success:false,message:'failed to update',data:updateDoctor})
    }
}
export const deleteDoctor=async(req,res)=>{
    const id=req.params.id;

    try{
        await Doctor.findByIdAndDelete
        (id,
            
        );

        res
        .status(200)
        .json({sucess:true,
        message:'Successfully deleted',
    
    });
    }
    catch(err){
        res.status(500).json({success:false,message:'failed to delete',data:updateDoctor})
    }
}
export const getSingleDoctor=async(req,res)=>{
    const id=req.params.id

    try{
        const doctor=await Doctor.findById(id).select("-password");

        res
        .status(200).json({
        success:true,
        message:'Doctor found',
        data:doctor,
    });
    }
    catch(err){
        res.status(404).json({success:false,message:'no Doctor found'})
    }
}
export const getAllDoctor=async(req,res)=>{
   

    try{
        const {query}=req.query
        let doctors;
        if(query){
            doctors=await Doctor.find({isApproved:'approved',
                $or:[
                {name:{ $regex:query,$options:"i"}},
                {specialization:{ $regex:query,$options:"i"}},
                ]
            }).select("-password");
        }else{
             doctors =await Doctor.find({isApproved:"approved"}).select("-password");
        }

        res
        .status(200).json({
        sucess:true,
        message:'Doctors found',
        data:doctors,
    });
    }
    catch(err){
        res.status(404).json({success:false,message:'not found'})
    }
};

export const getDoctorProfile=async(req,res)=>{
    const doctorId=req.userId
    try {
        const doctor=await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success:false,message:"Doctor not found"})
        }

        const {password,...rest} =doctor._doc;
        const appointments=await Booking.find({doctor:doctorId})

        res.status(200).json({success:true,message:"Profile info is getting",data:{...rest,appointments}})
    } 
    catch (err) {
        res.status(500).json({success:false,message:"Something went wrong ,cannot get"})
    }
};

// export const getMyAppointments= async(req,res)=>{
//     try {
//         // step -1 : retrieve appointments from Booking for specific Doctor
//         const bookings = await BookingSchema.find({Doctor:req.DoctorId})
//         // step -2 : extract doctor ids from appointment bookings
//         const doctorIds = bookings.map(el => el.doctor.id)
//         // step -3 : retrive doctors using doctor ids
//         const doctors=await Doctor.find({_id:{$in:doctorIds}}).select('-password') 

//         res.status(200).json({success:true,message:"Appointments are getting" , data:doctors})
//     } catch (error) {
//         res
//         .status(500)
//         .json({success:false,message:"Something went wrong ,cannot get"})
//     }
// }