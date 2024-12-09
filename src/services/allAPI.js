import SERVER_BASE_URL from "./serverUrl"
import commonAPI from "./commonAPI"


// registerAPI

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

//login
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}
// add-project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

// home-project
export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user-project
export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}
// all-project
export const allProjectAPI = async(reqHeader,searchKey)=>{
    //  query parameter of url - ?search=${searchkey} & query in 'search'
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}