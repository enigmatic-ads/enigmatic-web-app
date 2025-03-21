import { useEffect } from 'react';
import './PrivacyPolicy.css';
function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="privacy-container">
            <div className='privacy-heading-container'><h1>Privacy Policy</h1></div>

            <div className='privacy-content'>
                <p className='privacy-subcontent'>We respect your privacy and take great care with your information. This Privacy Policy is designed to help you decide whether to use Enigmatic Ads and in what manner.  </p>

                <div className='privacy-subheading'>What Information Does Enigmatic Ads Collect and for What Purpose?</div>

                <p className='privacy-maincontent'>a. Personal Information and Non-Personal Information: We may collect personal information such as your name, email address, phone number, and other contact details when you voluntarily submit them to us through our website or other communication channels. Enigmatic Ads also  retains some non-personally identifiable information (“Non-Personal Information”), such as your approximate geo-location, registry, program files, hard drive space, size of system memory, CPU, video hardware, browser types, browser extensions, installation date, changes made in your system, time zone, operating system, whether you installed the Platform with administrative privileges, your default search providers, browser language, operating system language, whether the system is 32bit or 64bit and other information relating to your use of the Platform in order to provide you with better services.</p>
                <p className='privacy-maincontent'>b. Usage Information: We automatically collect certain information about your device, browsing actions, and patterns when you interact with our website. This may include your IP address, browser type, operating system, referring URLs, and other usage details. </p>
                <p className='privacy-maincontent'>c. Cookies and Tracking Technologies: We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience, analyze usage patterns, and personalize content. You can control cookies through your browser settings, but please note that disabling cookies may limit certain functionalities of our website. </p>


                <div className='privacy-subheading'>How We Use Your Information:</div>

                <p className='privacy-maincontent'>a. To Provide Services: The Personal Information and Non-Personal Information we process are stored on your computer, which is then being analyzed to create statistical and profiling information that we process in order to allow better service and monitor use of Enigmatic Ads </p>
                <p className='privacy-maincontent'>b. For Marketing Purposes: With your consent, we may use your contact information to send promotional emails, newsletters, and other marketing communications about our products, services, and special offers. </p>

                <div className='privacy-subheading'>Information Sharing and Disclosure:</div>

                <p className='privacy-maincontent'>a.Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, conducting business activities, or providing services to you. These providers are obligated to maintain the confidentiality and security of your information.

                    <p className='privacy-maincontent'>b.We share Non-Personal Information with third parties, when this is required in order to provide, maintain or improve the Enigmatic Ads operation and services.</p>

                    <p className='privacy-maincontent'></p>c. We will NOT share Personal Information with any third party, except in an aggregated or statistical form. </p>
                <p className='privacy-maincontent'>d. Legal Compliance: We may disclose your information to comply with applicable laws, regulations, legal processes, or government requests, or to protect the rights, property, or safety of our company, users, or others. </p>

                <div className='privacy-subheading'>4. Data Security:</div>

                <p className='privacy-maincontent'>We implement reasonable security measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.
                </p>
                <div className='privacy-subheading'>Your Privacy Choices:</div>

                <p className='privacy-maincontent'>a. Opt-Out: You may opt out of receiving promotional emails from us by following the unsubscribe instructions provided in the email or by contacting us directly. </p>
                <p className='privacy-maincontent'>b. Access and Update: You have the right to access, update, or correct your personal information. If you would like to review or modify the information we have on file, please contact us. </p>

                <div className='privacy-subheading'>Children&apos;s Privacy:</div>
                <p className='privacy-maincontent'>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we may have inadvertently collected information from a child under 13, please contact us immediately. </p>

                <div className='privacy-subheading'>Changes to This Privacy Policy:</div>
                <p className='privacy-maincontent'>We reserve the right to update or revise this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates. </p>

                <div className='privacy-subheading'>Contact Us:</div>
                <p className='privacy-maincontent'>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at (take email).
                </p>

                <p className='privacy-maincontent'>By using our website or services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy