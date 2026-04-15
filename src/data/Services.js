import { MdPlumbing , MdOutlineMonitor } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiPaintBrushLine } from "react-icons/ri";
import { GiHandSaw } from "react-icons/gi";
import { PiSnowflakeBold } from "react-icons/pi";

export const services = [
    { title: "Plumbing", desc: "Leaky pipes & taps", value: "plumbing", icon: MdPlumbing },
    { title: "Electrical", desc: "Wiring & installs", value: "electrical", icon: HiOutlineLightningBolt },
    { title: "Painting", desc: "Interior & wall decor", value: "painting", icon: RiPaintBrushLine },
    { title: "Carpentry", desc: "Furniture & repair", value: "carpentry", icon: GiHandSaw },
    { title: "AC Repair", desc: "Cooling & cleaning", value: "ac_repair", icon: PiSnowflakeBold },
    { title: "Appliance", desc: "Smart home fixes", value: "appliance", icon: MdOutlineMonitor },
];