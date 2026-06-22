
import React from "react";
import {
  LocationOn,
  Phone,
  Email,
  WhatsApp,
} from "@mui/icons-material";


const Contact=()=>{

    return(
<div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex items-center justify-center p-6">
  <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">

    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
      Contact Information
    </h2>

    <div className="space-y-6">

      <div className="flex items-center gap-4">
        <LocationOn className="text-blue-600" />
        <p className="text-gray-700 dark:text-gray-300">
          Montreal, Quebec, Canada
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Phone className="text-green-600" />
        <p className="text-gray-700 dark:text-gray-300">
          +1 438 346 2662
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Email className="text-red-500" />
        <p className="text-gray-700 dark:text-gray-300">
          olyhavy@gmail.com
        </p>
      </div>

      <div className="flex items-center gap-4">
        <WhatsApp className="text-green-500" />
        <p className="text-gray-700 dark:text-gray-300">
          +1 438 346 2662
        </p>
      </div>

    </div>

  </div>
</div>
    )


}

export default Contact;