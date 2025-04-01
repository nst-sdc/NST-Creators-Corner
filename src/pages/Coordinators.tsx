import Navbar from '../components/Navbar';
import CoordinatorCard from '../components/CoordinatorCard';

export default function Coordinators() {
  const coordinators = [
    {
      name: 'Sahil Kumar',
      role: 'Main Coordinator',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Leading the creative vision of Creators Corner with expertise in content strategy and community building.',
      socials: {
        instagram: 'sahil.kumar',
        linkedin: 'sahilkumar',
        twitter: 'sahilk',
      },
    },
    {
      name: 'Yash Mali',
      role: 'Main Coordinator',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Specializing in event management and creator partnerships to bring unique opportunities to our community.',
      socials: {
        instagram: 'yash.mali',
        linkedin: 'yashmali',
        twitter: 'yashm',
      },
    },
    {
      name: 'Rudraksha Gupta',
      role: 'Main Coordinator',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: "Driving technical innovation and digital presence for Creators Corner's growing platform.",
      socials: {
        instagram: 'rudraksha.gupta',
        linkedin: 'rudrakshagupta',
        twitter: 'rudrakshag',
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Coordinators
          </h1>
          <div className="grid grid-cols-1 gap-12">
            {coordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
