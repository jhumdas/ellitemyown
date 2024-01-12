import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating'
import { ApiHelperFunction } from '../../services/api/apiHelpers';
function AddSkillcomment({HandleSkill, SkillId , closemodal }) {
    const [rating, setRating] = useState(0);
    const [commentData , setCommentData] = useState('')
    // Catch Rating value

    const handleRating = (rate) => {
        setRating(rate)
    }

    const AddRating = async() => {
        // console.log("ADDRATING" , SkillId , rating , commentData);
        

        if(rating && commentData) {
            let data = {
                skillID:SkillId,
                rating:rating,
                review:commentData
            }
            let response = await ApiHelperFunction({
                urlPath: '/add-skill-rating',
                method: "POST",
                data
              });
              console.log("RESPONSETHEME" , response);
              if (response && response.status) {
                toast.success("Rating added successfully");
                closemodal();
                HandleSkill(SkillId)
              } else {
                toast.error("Backend Error");
              }
        }else{
            toast.error("All fields are required")
        }
       

          
    }

    // console.log();
    return (
        <div className="add_moadal_main">
            <div className="add_moadalcmnt">
                {/* <div className="Create_overlay"></div> */}
                <div className="add_modal_cmnt_main">
                    <div className="close_icon" onClick={() => closemodal()}>
                        <i
                            class="fa-solid fa-xmark"
                            style={{ color: "red", fontSize: "17px", cursor: "pointer" }}
                        ></i>
                    </div>

                    <div className='rating_cmnt'>
                        <div className='rtng'>
                            <p>Ratings<span style={{color:"red"}}>*</span></p>
                            <Rating
                                onClick={handleRating}
                                size={20}
                            // onPointerMove={onPointerMove}


                            />
                        </div>

                        <div className='cmnt'>
                            <p>Comment<span style={{color:"red"}}>*</span></p>
                            <textarea id="" name="commentData" value={commentData} onChange={(e) => setCommentData(e?.target?.value)} rows="4" cols="50"></textarea>
                        </div>

                        <div className='sbmt'>
                            <button className='sbmt_btn-mn' onClick={AddRating}>Submit</button>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default AddSkillcomment
