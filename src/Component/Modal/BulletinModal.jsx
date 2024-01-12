// import React from "react";

// function BulletinModal() {
//   return (
//     <>
//       <div className="create_modal">
//         <div className="create_modal_content crte_own">
//           <div
//             className="frm_own"
//             style={{ width: "100%", height: "100%", padding: "20px 0" }}
//           >
//             <div className="newBulleCloseModDiv">
//               <span className="newBulleCreHead">New Bulletin</span>
//               <div onClick={() => closemodal()}>
//                 <i
//                   class="fa-solid fa-xmark"
//                   style={{
//                     color: "red",
//                     fontSize: "24px",
//                     cursor: "pointer",
//                   }}
//                 ></i>
//               </div>
//             </div>
//             <form className="homePageCreModal">
//               <div className="addCurLocaModDiv"></div>

//               <div className="homePgModInnerInpDivs">
//                 <input
//                   type="text"
//                   id="eventName"
//                   aria-describedby="emailHelp"
//                   placeholder="Event Name"
//                 //   value={values.eventName}
//                   name="eventName"
//                 //   onBlur={handleBlur}
//                 //   onChange={handleChange}
//                   className="homePgMoInps"
//                 />
//                 <small id="emailHelp" style={{ color: "red" }}>
//                   {/* {errors.eventName} */}
//                 </small>
//               </div>
//               <div className="homePgModInnerInpDivs">
//                 <input
//                   type="date"
//                   id="eventDate"
//                   placeholder="Wednesday 2:45 to 4:45 PM"
//                   value={values.eventDate}
//                   name="eventDate"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   className="homePgMoInps"
//                 />
//                 <small id="emailHelp" style={{ color: "red" }}>
//                   {errors.eventDate}
//                 </small>
//               </div>
//               <div className="homePgModInnerInpDivs">
//                 <input
//                   type="text"
//                   id="hostedBy"
//                   placeholder="Add Invites"
//                   value={values.addinvites}
//                   name="addinvites"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   className="homePgMoInps"
//                 />
//                 <small id="emailHelp" style={{ color: "red" }}>
//                   {errors.addinvites}
//                 </small>
//               </div>
//               <div className="homePgModInnerInpDivs">
//                 <label htmlFor="" className="addNoteLablCreMod">
//                   Add Notes
//                 </label>
//                 <textarea
//                   value={values.notes}
//                   name="notes"
//                   id=""
//                   cols=""
//                   rows="8"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   className="addNoteCreModTextArea"
//                 ></textarea>
//                 <small id="emailHelp" style={{ color: "red" }}>
//                   {localerror}
//                   {errors.notes}
//                 </small>
//               </div>
//               <div className="homePgModInnerInpDivs">
//                 <input
//                   type="file"
//                   id="hostedBy"
//                   placeholder="Choose a photo"
//                   value={image}
//                   accept="image/*"
//                   name="hostedBy"
//                   onBlur={handleBlur}
//                   onChange={handleImageChange}
//                 />
//                 <small id="emailHelp" style={{ color: "red" }}>
//                   {errors.image}
//                 </small>
//                 {uploading ? <p>image uploading......</p> : null}
//                 {imageURL !== "" && (
//                   <div style={{ display: "flex" }}>
//                     <img
//                       style={{ marginTop: "1rem" }}
//                       src={imageURL}
//                       alt=""
//                       height="100rem"
//                       width="100rem"
//                     />
//                     <div
//                       onClick={() => {
//                         setImageURL("");
//                         setImage("");
//                       }}
//                     >
//                       <i
//                         class="fa-solid fa-xmark"
//                         style={{
//                           color: "red",
//                           fontSize: "2rem",
//                           cursor: "pointer",
//                         }}
//                       ></i>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="homePgCreModSubmitDiv">
//                 <button
//                   type="button"
//                   className="homePgCreModSubmitBtn"
//                   onClick={submitHandler}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BulletinModal;
