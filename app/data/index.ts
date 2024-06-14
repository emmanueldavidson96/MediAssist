import { RiSurgicalMaskFill } from "react-icons/ri";
import { FaTooth, FaEye  } from "react-icons/fa";
import { IoEar } from "react-icons/io5";
import { FaUserDoctor, FaHeartPulse } from "react-icons/fa6";

export const categorySearchFields = [
    {
        id: 1,
        icon: FaHeartPulse,
        text: "Cardiologist"
    },
    {
        id:2,
        icon: FaTooth,
        text: "Dentist"    
    },
    {
        id:3,
        icon: IoEar,
        text: "Otalogy"
    },
    {
        id: 4,
        icon: FaUserDoctor,
        text: "Check Up"
    },
    {
        id:5,
        icon: RiSurgicalMaskFill,
        text: "Surgeon"
    },
    {
        id:6,
        icon: FaEye,
        text: "Eye Specialist"
    }
] 