import Layout from './layout';

export default function Contact() {
  return (
    <Layout>
      <section className="bg-white p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-xl">We're here for you!</p>
        <p className="mt-2">Just ask and get answers.</p>
        <p className="mt-4">Need a quick answer now about our service? Just click the chat button below and we will be happy to answer your questions.</p>

        <h2 className="mt-8 text-2xl font-bold">Have any questions?</h2>
        <h3 className="mt-4 font-bold">Reach us by phone.</h3>
        <p>You can reach us by phone during business hours at 240-xxx-xxxx. One of our staff would be happy to answer any of your questions.</p>

        <h3 className="mt-8 font-bold">Get more info quickly.</h3>
        <h4 className="mt-4">Most popular help topics.</h4>
        <p>Below you can find some answers to commonly asked questions. Take a look and if you still need help please contact us.</p>
      </section>

      <section className="mt-10 bg-white p-4">
        <h2 className="text-2xl font-bold">Contact us</h2>
        <p className="mt-2">Have some suggestions or just want to say hi? Contact us:</p>
        
        <div className="mt-4">
          <input type="text" placeholder="Your name" className="block w-full p-2 border rounded mt-2" />
          <input type="email" placeholder="Your email" className="block w-full p-2 border rounded mt-2" />
          <textarea placeholder="Your message" className="block w-full p-2 border rounded mt-2 h-32"></textarea>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded">Send</button>
        </div>
      </section>
    </Layout>
  );
}
