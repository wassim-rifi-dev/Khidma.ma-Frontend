import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function Main() {
    return (
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            <LeftSide />
            <RightSide />
        </div>
    );
}
