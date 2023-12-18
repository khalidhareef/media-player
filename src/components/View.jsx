import React, { useState } from "react";
import VideoCard from "./VideoCard";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAllVideos } from "../services/allAPI";
import { useEffect } from "react";
function View({uploadVideoStatus}) {
    const [allVideo,setAllVideo]=useState([])
    const [deleteVideoStatus, setDeleteVideoStatus ]=useState(false)
    const getAllVideoFromDB = async()=>{
        const response= await getAllVideos();
        const {data} =response;
        console.log(response);
        setAllVideo(data);
    }
    useEffect(()=>{
        getAllVideoFromDB();
    },[uploadVideoStatus,deleteVideoStatus])
    return (
        <div>
            <Row>{
                allVideo.length > 0 ?
                allVideo.map((video)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
                </Col>
                ))
                :
                <p>nothing to display</p>
}
            </Row>
        </div>
    )
}

export default View;
