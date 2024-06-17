import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <Navbar />
      <div className="privacy-wrapper">
        <h1>Privacy Policy</h1>
        <p>
          <span>Last Updated:</span> March, 2024
        </p>
        <div className="privacy-contain">
          <div className="privacy-text">
            <h3>Your Privacy at Orenda Psychiatry:</h3>
            <p>
              At Orenda Psychiatry, we understand the importance of privacy,
              especially in telehealth and telemedicine services. Our commitment
              to safeguarding your personal information is paramount. We adhere
              to the principle of collecting only the information necessary for
              providing our services effectively.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Collection of Personal Information:</h3>
            <p>
              We collect information essential for Telehealth appointments,
              including contact details, medical history, treatment preferences.
              Non-personally-identifying information like browser type and
              language preference is also gathered to improve our website’s
              functionality.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Use and Disclosure of Personal Information:</h3>
            <p>
              Your personal information is confidential and use solely for the
              purpose of your treatment and improving our Telehealth services.
              We do not share your information except as required by law or for
              vital operational needs. Any sharing of data complies with
              healthcare privacy regulations, ensuring your confidentiality.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Data Storage and Security:</h3>
            <p>
              Personal information is stored securely and only as long as
              necessary to provide our services or as required by law. We employ
              advanced security measures to protect your data from unauthorized
              access.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Visitor Interaction and Consent:</h3>
            <p>
              By using our Telehealth services, you consent to our collection
              and use of your personal information as necessary for your care.
              Visitors can choose not to provide certain information, but this
              may affect the availability or quality use of our services.
            </p>
          </div>

          <div className="privacy-text">
            <h3>International Data Transfer:</h3>
            <p>
              As a Telehealth provider, we may transfer information across
              borders for processing or storage. We ensure all data transfers
              comply with international privacy standards and regulations.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Cookies and Website Usage:</h3>
            <p>
              We use cookies to enhance your experience on our website and to
              understand how our services are used. You can set your browser to
              refuse cookies, but this may limit your ability to use certain
              features of our website effectively.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Policy Changes and Notifications:</h3>
            <p>
              We may update this privacy policy occasionally. Significant
              changes will be communicated to our users via email or through our
              website. We encourage you to review our policy regularly.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Contact Information and User Rights:</h3>
            <p>
              For any privacy-related concerns or to exercise your rights
              regarding your personal data (access, correction, deletion),
              please contact us at admin@orendapsych.com
            </p>
          </div>

          <div className="privacy-text">
            <h3>Legal Compliances and Best Practices:</h3>
            <p>
              Orenda Psychiatry is committed to complying with all applicable
              Telehealth privacy regulations, including HIPAA and other local
              laws. We strive to maintain the highest standards of data
              protection and patient confidentiality. Your continued use of our
              Telehealth services signifies acceptance of these terms and our
              dedication to your privacy.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Text and SMS Communication Policy:</h3>
            <p>
              At Orenda Psychiatry, we use text messages and SMS primarily for
              non-clinical purposes. This includes appointment reminders,
              notifications about required intake documents, and other
              service-related information. Patients are able to also opt out of
              text/sms communication here:{" "}
              <span>https://www.orendapsych.com/contact</span>.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Non-Clinical Use:</h3>
            <p>
              Texts/SMS will be used to convey information related to
              appointment times / dates / reminders, intake documentatuon
              completion, and non-clinical administrative matters.
            </p>
          </div>

          <div className="privacy-text">
            <h3>Clinical Information via Text/SMS:</h3>
            <li>
              We will only engage in text/SMS communication involving clinical
              information (such as medication refills or changes in pharmacy) if
              initiated by the patient.
            </li>
            <li>
              If you, as a patient, send us an inbound text/SMS requesting
              clinical actions like medication refills or changes in pharmacy
              details, we will respond accordingly. However, we recommend that
              such requests be followed up with a direct communication to our
              office for verification and documentation purposes via our HIPPA
              compliant email: <span>admin@orendapsych.com</span> or speaking
              directly with your provider.
            </li>
          </div>

          <div className="privacy-text">
            <h3>Patient Consent and Security:</h3>
            <p>
              By providing your mobile number, you consent to receiving text/SMS
              communications for the purposes outlined above unless you choose
              to opt out as described above.
            </p>
            <li>
              We prioritize the security and confidentiality of all
              communications. However, please be aware that text messaging is
              not the most secure form of communication. For sensitive or
              private health information, we recommend using our secure
              Telehealth platform or direct phone communication.
            </li>
            <p>Please contact us if you have any questions or need to update your communication preferences.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
