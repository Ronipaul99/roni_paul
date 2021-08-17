import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col,
    Button,
    Collapse
} from "reactstrap"; 

//import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const ExperienceCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const [isOpen , setisOpen] = useState(false)
    const imgRef = createRef();

    function getColorArrays() {
        // const colorThief = new ColorThief();
         setColorArrays([4, 122, 195]);
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }
    const toggle = ()=>{
        setisOpen(!isOpen)
    }
    return ( 
        <Col lg="5">
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: rgb(colorArrays)}} >
                    <h5 className="text-white">{data.company}</h5>
                </CardHeader>
                <CardBody className="py-5" onClick={toggle}>
                    <img ref={imgRef} className=" bg-white mb-3 img-center img-fluid" src={data.companylogo} style={{ width: "150px" , height:"80px" }} onLoad={() => getColorArrays()} alt=""/>
                    <CardTitle tag="h5">{data.role}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <Collapse isOpen={isOpen}>
                        <div className="description my-3 text-left">
                            {data.desc}
                            <ul>
                                {
                                    data.descBullets ? 
                                    data.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>
                                    }) : null
                                }
                            </ul>
                        </div>
                    </Collapse>
                    
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;