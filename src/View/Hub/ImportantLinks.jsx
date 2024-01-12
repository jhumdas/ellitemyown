import React, { useEffect, useState } from "react";
import "./Hub.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";

function ImportantLinks({linkChange}) {
  const [links, setLinks] = useState([]);

  //fetch links
  const fetchLinks = async () => {
    let response = await ApiHelperFunction({
      urlPath: `/view-section`,
      method: "GET",
    });
    console.log("click", response);
    if (response && response.status === 200) {
      setLinks(response?.data?.data);
    } else {
      toast.error(response?.data?.data?.message);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <div className="impLinkDiv">
      <div className="impLiSpanDiv">
        <span className="impLiSpan">Important Links</span>
      </div>
      <div className="impSectionsDiv">
        <Accordion className="impSecAccr">
         {
          links?.map((item,index)=>{
            console.log("objextsbsj",item)
            return  <AccordionItem key={index} onClick={()=>linkChange(index)}>
            {/* <AccordionItemHeading> */}
              {/* <AccordionItemButton> */}
                <div className="impSecInnerMainDiv">
                  <div className="impSecHeadDiv">
                    <span className="impSecHead"><a href={item?.link} target="_blank" rel="noopener noreferrer">
                  {item?.link}
                  </a></span>
                    
                  </div>
  
                  {/* <div className="impSecTimeDiv">
                    <span className="impSecOutOfVidSpan">
                      <span>1</span>/<span>15</span>
                    </span>
                    <span>
                      <span>2</span>hrs<span>30</span>mins
                    </span>
                  </div> */}
                </div>
              {/* </AccordionItemButton> */}
            {/* </AccordionItemHeading> */}
          </AccordionItem>
          })
         }
         
        </Accordion>



         {/* <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="impSecInnerMainDiv">
                  <div className="impSecHeadDiv">
                    <span className="impSecHead">Section 2</span>
                  </div>
                  <div className="impSecTimeDiv">
                    <span className="impSecOutOfVidSpan">
                      <span>1</span>/<span>15</span>
                    </span>
                    <span>
                      <span>2</span>hrs<span>30</span>mins
                    </span>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      03. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      04. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="impSecInnerMainDiv">
                  <div className="impSecHeadDiv">
                    <span className="impSecHead">Section 3</span>
                  </div>
                  <div className="impSecTimeDiv">
                    <span className="impSecOutOfVidSpan">
                      <span>1</span>/<span>15</span>
                    </span>
                    <span>
                      <span>2</span>hrs<span>30</span>mins
                    </span>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      05. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      06. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="impSecInnerMainDiv">
                  <div className="impSecHeadDiv">
                    <span className="impSecHead">Section 4</span>
                  </div>
                  <div className="impSecTimeDiv">
                    <span className="impSecOutOfVidSpan">
                      <span>1</span>/<span>15</span>
                    </span>
                    <span>
                      <span>2</span>hrs<span>30</span>mins
                    </span>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      07. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      08. Hey, this is the video you want to see
                    </label>
                  </div>
                  <div className="videoPlayDuration">
                    <i class="fa-solid fa-circle-play"></i>
                    <span className="vidPlayDurSpan">
                      <span>15</span> min
                    </span>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="impSecInnerMainDiv">
                  <div className="impSecHeadDiv">
                    <span className="impSecHead">Section 5</span>
                  </div>
                  <div className="impSecTimeDiv">
                    <span className="impSecOutOfVidSpan">
                      <span>1</span>/<span>15</span>
                    </span>
                    <span>
                      <span>2</span>hrs<span>30</span>mins
                    </span>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      09. Hey, this is the video you want to see
                    </label>
                  </div>
                </div>
              </div>
              <div className="impSecInnerMainDiv">
                <div className="heyVidChkDivParent">
                  <div className="heyVidChkDiv">
                    <input type="checkbox" id="" className="heyVidChkBox" />
                    <label htmlFor="" className="heyVidChkLabel">
                      10. Hey, this is the video you want to see
                    </label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem> */}
      </div>
    </div>
  );
}

export default ImportantLinks;
