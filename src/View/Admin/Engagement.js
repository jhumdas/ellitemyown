import React, { useEffect } from 'react'
import Userimg from '../../Images/user_image.png';
import Userimg2 from '../../Images/user_image_2.png';
import AskHr from '../../Images/ask_hr.png';
import PostCard from '../../Images/post_card.png';
import Events1 from '../../Images/event.png';
import NewYear from "../../Images/new_year.png";
import TableIcon from '../../Images/table_icon.png';
import EarthDay from '../../Images/earth_day.png';
import TableIcon2 from '../../Images/table_icon.png';
import WorldDay from '../../Images/world_day.png';
import TableIcon3 from '../../Images/table_icon.png';
import { Link } from 'react-router-dom';
import flagImg from "../../Images//flag.png";
import HighlightedEvents from '../../Component/HighlightedEvents';
import NewEngagement from '../../Component/NewEngagement ';
import { Scheduler } from '@aldabil/react-scheduler';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthCtx } from '../../context/AuthCtx';
import { getEngagementData } from '../../redux/slices/engagementSlice';
import moment from 'moment';
import { ApiHelperFunction } from '../../services/api/apiHelpers';
import  toast  from 'react-hot-toast';

function Engagement({closeModal}) {
    const { setLoading } = useAuthCtx();
    const eventData = useSelector((state) => state.engagementSlice.engagement);
    const loadingStatus = useSelector((state) => state.engagementSlice.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEngagementData());
    }, []);
    console.log("events1235",eventData)

    const EVENTS = eventData?.map((item, index) => {
        return {
            event_id: item?._id,
            title: item?.engagementName,
            start:new Date(item?.startDate),
            end: new Date(item?.endDate)
        }
    })
    //   console.log("events",new Date("2021 5 4 9:00"),EVENTS)

    const handleSumit = async (val) => {
        // setLoading(true);

        const data={
            startDate: val?.start,
            endDate:val?.end,
            engagementName: val?.title
        }
        // console.log("val123",val)

        let response = await ApiHelperFunction({ urlPath: "/add-engagement-calender-date", method: 'POST', data })
        if (response?.status) {
            toast.success('Successfully added engagement');
            closeModal();

        } else {
            toast.error('Error fetching bill board data')
        }
        setLoading(false)
    }


    useEffect(() => {
        setLoading(loadingStatus);
    }, [loadingStatus]);
    return (
        <>
            <section id="user_experience">
            <div className="close_icon" style={{right:'5.5rem'}}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "2rem", cursor: "pointer" }}
                  onClick={(e)=>{
                    e.stopPropagation();
                    closeModal();
                  }
                }
                ></i>
              </div >        
              <div style={{marginRight:'1rem'}} onClick={(e)=>{
                    e.stopPropagation();
                    
                  }}>
                    <Scheduler view="year" events={EVENTS}  onConfirm={(data) => handleSumit(data)} selectedDate={new Date()} height={400} />
                </div>       
                
            </section>

        </>
    )
}

export default Engagement