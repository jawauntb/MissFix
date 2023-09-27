import Head from 'next/head';
import Layout from './layout';

const copy = {
  title: "MissFix: Empowerment Through Home Maintenance",
  mainHeader: "Confident Home Care, Tailored for Women.",
  mainSubtext: "Empower yourself with the knowledge, resources, and community to confidently handle your home's needs. Be the master of your domain with MissFix.",
  promoHeader: "Unlock a Year of Home Care Confidence for only $299",
  promoSubtext: "Access to tutorials, professional advice, and a supportive community. Plus, on-call experts for only $99/hour, always there to guide you.",
  benefitsHeader: "Why MissFix?",
  benefitsSubtext: "We believe every woman should feel empowered and confident in her own space. We're more than just a service-we're a movement.",
  benefit1Title: "Learn with Confidence",
  benefit1Text: "Access tutorials and resources designed to make home maintenance clear and approachable. Learn the essentials, step-by-step.",
  benefit2Title: "Connect with Community",
  benefit2Text: "Join a network of like-minded women. Share experiences, seek advice, and celebrate your home care victories together.",
  benefit3Title: "Always Supported",
  benefit3Text: "Our on-call experts are always ready to help. Got a question? Need advice? MissFix is by your side.",
  checkupHeader: "Home Checkup",
  checkupText: "Get two home checkups per year by our home service professionals. It's like 2 doctor's checkups per year, but for your house.",
  
  proactiveMaintenanceHeader: "Proactive Maintenance",
  proactiveMaintenanceText: "Use your customized Home Health Report to prioritize and schedule service before they become costly repairs.",
  
  convenienceHeader: "Convenience",
  convenienceText: "Take care of your home conveniently through your phone. Schedule service, send photos and track projects with your Home Manager through our app.",
  
  // ... (more new copy)
};

export default function Home() {
return (
    <Layout>
      <div className="bg-yellow-100 min-h-screen p-6">
        <Head>
          <title>{copy.title}</title>
          <meta name="description" content="Home Maintenance Empowerment for Women" />
        </Head>
  
        <main className="mt-10 space-y-10">
          <section className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4">
              <h2 className="text-pink-500 text-5xl font-bold leading-tight">{copy.mainHeader}</h2>
              <p className="mt-4 text-black text-xl">{copy.mainSubtext}</p>
            </div>
            <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-black text-2xl font-bold">{copy.promoHeader}</h4>
                <p className="mt-4 text-black">{copy.promoSubtext}</p>
                <a href="#" className="mt-4 inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Get Started »</a>
              </div>
            </div>
          </section>
          
          <section className="flex flex-wrap -mx-4">
            <h2 className="text-black text-4xl p-2 font-bold leading-tight">{copy.benefitsHeader}</h2>
            
            <p className="mt-6 break-normal text-pink-500 text-xl">{copy.benefitsSubtext}</p>
  
            <div className="flex flex-wrap mt-10">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <i className="fas fa-book-open text-5xl text-black mb-4"></i>
                <h4 className="text-2xl text-black font-bold">{copy.benefit1Title}</h4>
                <p className="mt-4 text-black">{copy.benefit1Text}</p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <i className="fas fa-users text-5xl text-black mb-4"></i>
                <h4 className="text-2xl text-black font-bold">{copy.benefit2Title}</h4>
                <p className="mt-4 text-black">{copy.benefit2Text}</p>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <i className="fas fa-phone text-5xl text-black mb-4"></i>
                <h4 className="text-2xl text-black font-bold">{copy.benefit3Title}</h4>
                <p className="mt-4 text-black">{copy.benefit3Text}</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-black text-4xl font-bold leading-tight mb-6">Our Services</h2>

            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-1/3 px-4">
                <h3 className="text-black text-2xl font-bold mb-2">{copy.checkupHeader}</h3>
                <p className="mb-4">{copy.checkupText}</p>
              </div>

              <div className="w-full lg:w-1/3 px-4">
                <h3 className="text-black text-2xl font-bold mb-4">{copy.proactiveMaintenanceHeader}</h3>
                <p>{copy.proactiveMaintenanceText}</p>
              </div>

              <div className="w-full lg:w-1/3 px-4">
                <h3 className="text-black text-2xl font-bold mb-4">{copy.convenienceHeader}</h3>
                <p>{copy.convenienceText}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}