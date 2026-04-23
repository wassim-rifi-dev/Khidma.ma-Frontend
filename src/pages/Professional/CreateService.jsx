import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function CreateService() {
    return (
        <ProfessionalLayout title="Create service">
            <div className="mx-auto max-w-5xl rounded-[26px] border border-slate-100 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">New service</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">Create a service offer</h2>
                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-500">
                    The form can be connected here when the service creation endpoint is ready.
                </p>
            </div>
        </ProfessionalLayout>
    );
}
