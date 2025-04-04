// Coordinators page component that displays the team of coordinators with their details and social links
import Navbar from '../components/Navbar';
import CoordinatorCard from '../components/CoordinatorCard';

export default function Coordinators() {
  const coordinators = [
    {
      name: 'Sahil Kumar',
      role: 'Main Coordinator',
      image: '../../images/sahil.jpeg',
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
      image: '../../images/yash.jpeg',
      bio: 'Specializing in event management and creator partnerships to bring unique opportunities to our community.',
      socials: {
        instagram: 'yash.mali',
        linkedin: 'yashmali',
        twitter: 'yashm',
      },
    },
    {
      name: 'Rudransh Gupta',
      role: 'Main Coordinator',
      image: '../../images/rudrash.jpeg',
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
      <div className="pt-16 bg-gray-50 dark:bg-navy transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
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
