import { Link } from "react-router-dom";
import Add from "../components/Add";
import View from "../components/View";
import { useState } from "react";
import Category from "../components/Category";
function Home() {
    const [uploadVideoStatus, setUploadVideosStatus]=useState({})
    return (
        <div>
            <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
                <div className="add_videos">
                    <Add setUploadVideosStatus={setUploadVideosStatus} />
                </div>
                <div>
                    <Link to={'/watch'} style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }} >Watch History</Link>
                </div>
            </div>
            <div className="container d-flex justify-content-between align-items-center">

                <h4>All Videos</h4>
                <View uploadVideoStatus={uploadVideoStatus}/>
            </div>
            <Category/>

        </div>

    )
}
export default Home;