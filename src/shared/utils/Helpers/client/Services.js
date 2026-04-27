import { FiTool } from "react-icons/fi";
import { MdCleaningServices, MdElectricalServices } from "react-icons/md";

const serviceIcons = [FiTool, MdCleaningServices, MdElectricalServices];

export function getServiceIcon(index) {
    return serviceIcons[index % serviceIcons.length];
}

export function getServiceProviderName(service) {
    const professional = service.professional?.user;

    if (!professional) {
        return "Professional";
    }

    return `${professional.first_name} ${professional.last_name}`;
}
