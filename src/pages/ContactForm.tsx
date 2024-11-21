import Navbar from '../components/Navbar';

export default function ContactForm() {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Register for PodCoast Event</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}