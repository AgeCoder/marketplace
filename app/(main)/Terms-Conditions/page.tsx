import Head from "next/head";

const Home = () => {
  return (
    <div className=" pt-16 p-2">
      <div className="max-w-3xl mx-auto  bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-3xl  font-bold tracking-tighter md:text-4xl/tight">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-6 px-2">Last updated: [25/05/2024]</p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-700 mb-4">Welcome to AlightUI!</p>
        <p className="text-gray-700 mb-4">
          These terms and conditions outline the rules and regulations for the
          use of AlightUI`s Website and Services
        </p>
        <p className="text-gray-700 mb-4">
          By accessing this website and engaging our services, we assume you
          accept these terms and conditions. Do not continue to use AlightUI if
          you do not agree to take all of the terms and conditions stated on
          this page.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          2. Services Provided
        </h2>
        <p className="text-gray-700 mb-4">
          We offer a range of website development services including design,
          development, and maintenance of websites. Specific services will be
          outlined in the service agreement with each client.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          3. Pricing and Payment
        </h2>
        <p className="text-gray-700 mb-4">
          Our pricing for services is outlined in the proposal or service
          agreement provided to each client. All payments are due as specified
          in the agreement, typically including a deposit before work commences
          and the balance upon completion.
        </p>
        <p className="text-gray-700 mb-4">
          We reserve the right to change our pricing at any time, but any
          changes will not affect the pricing agreed upon for ongoing projects.
        </p>
        <p className="text-gray-700 mb-4">
          Payments can be made via the following methods accepted by Stripe:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Credit and Debit Cards (Visa, MasterCard, American Express,
            Discover, JCB, Diners Club, China UnionPay)
          </li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Bank Transfers (ACH Credit Transfers, Wire Transfers)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Invoices are due within 7 days. Late payments may incur additional
          fees as specified in the service agreement.
        </p>

        <h3 className="text-xl font-semibold mb-4">Refund Policy</h3>
        <p className="text-gray-700 mb-4">
          Refunds are considered on a case-by-case basis and are issued at the
          sole discretion of AlightUI. We typically do not offer refunds once
          work has commenced due to the nature of our services.
        </p>
        <p className="text-gray-700 mb-4">
          If you are not satisfied with the services provided, please contact us
          within 7 days of delivery to discuss your concerns. We will make every
          effort to address and resolve any issues to your satisfaction.
        </p>
        <p className="text-gray-700 mb-4">
          If a refund is granted, it will be processed using the original
          payment method within 14 days of the agreement to refund.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          4. Client Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          Clients must provide all necessary materials and information required
          for the completion of the project. Timely feedback and approvals are
          essential to avoid delays.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          5. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-4">
          All intellectual property rights for materials provided by the client
          remain with the client. The intellectual property rights for the work
          created by AlightUI will be transferred to the client upon full
          payment.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          6. Termination
        </h2>
        <p className="text-gray-700 mb-4">
          Either party may terminate the service agreement by providing written
          notice. Any fees for services rendered up to the termination date will
          still be due.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          7. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-4">
          AlightUI will not be liable for any damages resulting from the use or
          inability to use the services provided. Our liability is limited to
          the amount paid for the services.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          8. Governing Law
        </h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by the laws of india.
        </p>

        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms, please contact us
        </p>
      </div>
    </div>
  );
};

export default Home;
