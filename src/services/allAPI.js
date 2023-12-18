import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

export const uploadALLVideo = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}video`,reqBody);

}
///to get all videos already inserted

export const getAllVideos=async()=>{
   return await commonAPI('GET',`${serverURL}video`,"")
}

//to delete a video
export const deleteVideo=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
}

//detaiils to watch history
export const addToHistory = async(videoDetails)=>{
   return await commonAPI ('POST',`${serverURL}history`,videoDetails)
}

export const getHistory=async()=>{
   return await commonAPI('GET',`${serverURL}history`,"")
}

///to delete a specific history
export const deleteHistory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
}
//add category
export const uploadAllCategory = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}category`,reqBody);

}

//get all category
export const getAllCategory = async (reqBody)=>{
   return await commonAPI('GET',`${serverURL}category`,"");

}
///delete category
export const deleteCategory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}category/${id}`,{})
}
///get video details with video id
export const getVideoDetails=async(id)=>{
   return await commonAPI('GET',`${serverURL}video/${id}`,"")
}

//update category with video details
export const updateCategory=async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}