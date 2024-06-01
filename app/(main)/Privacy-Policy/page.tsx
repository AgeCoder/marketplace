import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16 p-2">
      <Head>
        <title>Privacy Policy | Your Company Name</title>
        <meta
          name="description"
          content="Privacy Policy of Your Company Name"
        />
      </Head>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl container p-6">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6 px-2">Last updated: 26/05/2024</p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-700 mb-4">
          Welcome to AlightUI. We respect your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website alightui.vercel.app, including any other media form,
          media channel, mobile website, or mobile application related or
          connected thereto (collectively, the “Site”).
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          2. Important Information and Who We Are
        </h2>
        <p className="text-gray-700 mb-4">
          This Privacy Policy aims to give you information on how AlightUI
          collects and processes your personal data through your use of this
          website, including any data you may provide when you purchase a
          product or service.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          3. The Data We Collect About You
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect, use, store, and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Identity Data includes first name, last name, username or similar
            identifier, marital status, title, date of birth, and gender.
          </li>
          <li>
            Contact Data includes billing address, delivery address, email
            address, and telephone numbers.
          </li>
          <li>
            Financial Data includes bank account and payment card details.
          </li>
          <li>
            Transaction Data includes details about payments to and from you and
            other details of products and services you have purchased from us.
          </li>
          <li>
            Technical Data includes internet protocol (IP) address, your login
            data, browser type and version, time zone setting and location,
            browser plug-in types and versions, operating system and platform,
            and other technology on the devices you use to access this website.
          </li>
          <li>
            Profile Data includes your username and password, purchases or
            orders made by you, your interests, preferences, feedback, and
            survey responses.
          </li>
          <li>
            Usage Data includes information about how you use our website,
            products, and services.
          </li>
          <li>
            Marketing and Communications Data includes your preferences in
            receiving marketing from us and your communication preferences.
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          4. How We Use Your Personal Data
        </h2>
        <p className="text-gray-700 mb-4">
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            To perform the contract we are about to enter into or have entered
            into with you.
          </li>
          <li>To comply with a legal obligation.</li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li>
            To process your domain registration and website development
            requests.
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          5. Security of Data
        </h2>
        <p className="text-gray-700 mb-4">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal data you provide to us, please be aware
          that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          6. Third-Party Disclosure
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell, trade, or otherwise transfer to outside parties your
          Personally Identifiable Information unless we provide users with
          advance notice. This does not include website hosting partners and
          other parties who assist us in operating our website, conducting our
          business, or serving our users, so long as those parties agree to keep
          this information confidential. We may also release information when
          its release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others rights, property, or safety.
        </p>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          7. Your Data Protection Rights
        </h2>
        <p className="text-gray-700 mb-4">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            The right to access – You have the right to request copies of your
            personal data.
          </li>
          <li>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </li>
          <li>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </li>
          <li>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </li>
          <li>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </li>
          <li>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tighter mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
