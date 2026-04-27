import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../shared/utils/getUserPhotoUrl";

export default function Picture() {
    const { user } = useContext(AuthContext);

    const photoUrl = getUserPhotoUrl(user.photo);
    
    return (
        <div className="w-full rounded-2xl flex flex-col items-center text-center shadow-sm bg-white px-4 sm:px-6 md:px-10 py-10">

            <div className="w-28 h-28 rounded-full border-[5px] border-orange-500 overflow-hidden mb-4">
                {
                    photoUrl ? 
                        <img
                            className="w-full h-full object-cover"
                            src={photoUrl}
                            alt="Avatar"
                        /> : 
                        <img
                            className="w-full h-full object-cover"
                            src={defaultProfile}
                            alt="Avatar"
                        />
                }
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {
                    user.name
                }
            </h2>

            <p className="text-gray-400 mt-1 text-sm sm:text-base">
                {
                    user.email
                }
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
                +212 {user.phone.startsWith('0') ? user.phone.slice(1) : user.phone}
            </p>

            <Link to={'/profile/edit'} className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition">
                Edit Profile
            </Link>

        </div>
    )
}

