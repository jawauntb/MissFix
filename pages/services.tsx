import Head from 'next/head'
import Layout from './layout';

export default function Services() {
    return (
        <Layout>
          <div className="bg-light-yellow text-black p-10">
              <Head>
                  <title>MissFix Services</title>
              </Head>
  
              <header className="mb-10">
                  <h1 className="text-center text-pink-500 text-4xl font-bold mb-6">MissFix Services: For the Modern Woman</h1>
                  <p className="text-center mb-4">Every independent woman deserves a home that shines just as brightly as she does. Let's ensure yours never loses its sparkle.</p>
              </header>
  
              <section className="mb-12">
                  <h2 className="text-pink-500 font-bold text-3xl mb-6">💄 Beauty Isn't Just Skin Deep: Deep Care for Your Home</h2>
  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded shadow">
                          <h3 className="text-pink-500 font-bold text-2xl mb-4">Financially Savvy Savings</h3>
                          <p>Stay ahead of the game. Little fixes today can save your purse from big drains tomorrow.</p>
                      </div>
  
                      <div className="bg-white p-6 rounded shadow">
                          <h3 className="text-pink-500 font-bold text-2xl mb-4">Time Is Your Luxury</h3>
                          <p>Your time's precious. Delegate home issues, focus on your passions, or perhaps that upcoming date night?</p>
                      </div>
  
                      <div className="bg-white p-6 rounded shadow">
                          <h3 className="text-pink-500 font-bold text-2xl mb-4">Premium Service with a Woman's Touch</h3>
                          <p>Our detail-oriented, women-led team knows how to perfect the balance between functionality and elegance.</p>
                      </div>
                  </div>
              </section>
  
              <section className="mb-12">
                  <h2 className="text-pink-500 font-bold text-3xl mb-6">💅 Tailored Home Services, Just for You</h2>
  
                  <div className="bg-white p-6 rounded shadow mb-6">
                      <h3 className="text-pink-500 font-bold text-2xl mb-4">Annual Home Glow-Up</h3>
                      <p>Regular check-ups to ensure your living space matches your vibrant energy.</p>
                  </div>
  
                  <div className="bg-white p-6 rounded shadow mb-6">
                      <h3 className="text-pink-500 font-bold text-2xl mb-4">Routine Pampering for Your Space</h3>
                      <ul className="list-disc pl-6">
                          <li>Rejuvenating furnace treatments*</li>
                          <li>... (Continue with the other services)</li>
                      </ul>
                      <p className="mt-4 text-sm">*Material costs are separate but always transparent.</p>
                  </div>
  
                  <div className="bg-white p-6 rounded shadow mb-6">
                      <h3 className="text-pink-500 font-bold text-2xl mb-4">Emergency Glam Squad</h3>
                      <p>No more panic during home emergencies. We've got your back 24/7, ensuring you never lose your cool.</p>
                  </div>
              </section>
  
              <footer>
                  <h2 className="text-pink-500 font-bold text-3xl mb-6">👠 MissFix Squad at Your Service</h2>
                  <p>From electrical issues to carpentry, our all-female team is here to empower and ensure your home is the sanctuary you deserve.</p>
              </footer>
          </div>
        </Layout>
    )
}
