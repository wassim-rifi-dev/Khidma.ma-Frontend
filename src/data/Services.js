import { MdPlumbing , MdOutlineMonitor } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiPaintBrushLine } from "react-icons/ri";
import { GiHandSaw } from "react-icons/gi";
import { PiSnowflakeBold } from "react-icons/pi";

export const services = [
    { title: "Plumbing", desc: "Leaky pipes & taps", icon: MdPlumbing },
    { title: "Electrical", desc: "Wiring & installs", icon: HiOutlineLightningBolt },
    { title: "Painting", desc: "Interior & wall decor", icon: RiPaintBrushLine },
    { title: "Carpentry", desc: "Furniture & repair", icon: GiHandSaw },
    { title: "AC Repair", desc: "Cooling & cleaning", icon: PiSnowflakeBold },
    { title: "Appliance", desc: "Smart home fixes", icon: MdOutlineMonitor },
];