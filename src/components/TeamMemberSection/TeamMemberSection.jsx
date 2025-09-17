import HeadLine from "../HeadLine/HeadLine";
import { teamMembers } from "../../data/app-data";
import MemberCard from "./MemberCard";

const TeamMemberSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine subheading="Team Members" heading="Meet The Experts" />

        <div className="mx-4 xl:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member) => (
            <MemberCard key={member.m_id}>
              <div className="card shadow-sm hover:-translate-y-1 hover:shadow-md transition">
                <figure>
                  <img
                    src={member?.image}
                    alt={member?.name}
                    className="h-60 w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-1">
                  <h2 className="card-title font-bold text-xl text-gray-800">{member?.name}</h2>
                  <p className="uppercase text-sm text-gray-500 italic font-medium">{member?.designation}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <member.icons.linkedIn className="text-lg text-blue-500 hover:text-blue-600 transition cursor-pointer" />
                    <member.icons.facebook className="text-lg text-blue-600 hover:text-blue-700 transition cursor-pointer" />
                    <member.icons.twitter className="text-lg text-blue-500 hover:text-blue-600 transition cursor-pointer" />
                    <member.icons.instagram className="text-lg text-red-500 hover:text-red-600 transition cursor-pointer" />
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-1.5 text-base text-white bg-blue-500 hover:bg-blue-600 rounded-full transition cursor-pointer">Contact {member?.name.split(" ")[0]}</button>
                  </div>
                </div>
              </div>
            </MemberCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
