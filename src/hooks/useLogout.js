import axios from 'axios';
import { AUTH_API_END_POINT } from '../utils/const';
import { getMyProfile, getOtherUsers, getUser } from "../redux/userSlice";
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";
import { getProfile } from '../../../backend/controllers/userController';
import { getAllTweets, getFollowingTweets, getMyTweets } from '../redux/tweetSlice';

const useLogout = () => {
    const dispatch = useDispatch();

    const logout = async () => {
        try {
            // const response = await axios.post(`${AUTH_API_END_POINT}/logout`);
            console.log("1 uselogout");
            const response = await axios({
                method : 'put', 
                url : `${AUTH_API_END_POINT}/logout`, 
                withCredentials : true 
            })
            //   const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
            //     withCredentials:true
            // });

              console.log("1 uselogout");
            console.log(response.data); // Check the response data structure

            // Assuming the backend sends a success message in the 'message' field
            if (response.data.message === "Logged out successfully") {
                dispatch(getUser(null));
                dispatch(getOtherUsers([]));
                dispatch(getMyProfile(null));
                dispatch(getFollowingTweets([]));
                dispatch(getAllTweets([]));
                dispatch(getMyTweets([]));
                toast.success("Logged out successfully");
            } else {
                throw new Error("Logout failed");
            }
        } catch (error) {
            toast.error(error.message);
            console.error('Logout failed', error);
        }
    };

    return logout;
};

export default useLogout;
