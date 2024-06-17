import { companyLogos } from "./constants";

const CompanyLogos = () => (
    <section className="py-12 bg-white sm:py-16 xl:py-24 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8">
                {companyLogos.map(company => (
                    <img key={company.id} className="w-auto h-7 sm:h-8 lg:h-10" src={company.icon} alt={company.name} />
                ))}
            </div>
        </div>
    </section>
);

export default CompanyLogos;
