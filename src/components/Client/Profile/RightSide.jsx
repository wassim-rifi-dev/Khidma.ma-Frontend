import Requests from "./Right/Requests";
import Stats from "./Right/Stats";

export default function RightSide() {
    return (
        <div className="flex flex-col gap-5">
            <Stats />
            <Requests />
        </div>
    );
}
