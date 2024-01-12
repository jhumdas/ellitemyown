import React, { useEffect, useState } from 'react'
import { ApiHelperFunction } from '../services/api/apiHelpers';
import { toast } from 'react-hot-toast';

function EngagementPlacecard() {
  const [themeforMonthData , setThemeforMonthData] = useState([])
  console.log("themeforMonthData",themeforMonthData);
  useEffect(() => {
    fetchCurrentCalTheme();
  },[])

  const fetchCurrentCalTheme = async() => {

    let response = await ApiHelperFunction({
      urlPath: '/view-calendar-theme',
      method: "POST",
      
    });
  
    if (response && response.status) {
      setThemeforMonthData(response?.data?.data);
    } else {
      toast.error("Backend Error");
    }
  }
  return (
   <section className='engagementPlacecard'>
      <p>Theme for the month</p>
      {
        themeforMonthData && themeforMonthData?.map((ele) => {
          return(
            // <h4>{ele?.}</h4>
            <h3>{ele?.themeName} comes in the month of {ele?.monthName}.</h3>
          )
        })
      }
      
   </section>
  )
}

export default EngagementPlacecard
