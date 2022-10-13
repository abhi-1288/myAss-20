import React, { useState, useEffect } from "react";

// TandC component
function TandC() {

  return (
    <div className="text-white bg-slate-900 p-8">
        <h2 className="text-center text-xl font-mono font-black"><strong>Terms and Conditions</strong></h2>

        <p className="font-Caveat italic text-2xl m-3 text-center font-bold text-red-500">Welcome to we-shop.netlify.app!</p>

        <p className="font-Caveat italic text-xl m-3 font-black">These terms and conditions outline the rules and regulations for the use of We-Shop's Website, located at https://we-shop.netlify.app/.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">By accessing this website we assume you accept these terms and conditions. Do not continue to use we-shop.netlify.app if you do not agree to take all of the terms and conditions stated on this page.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Cookies</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">We employ the use of cookies. By accessing we-shop.netlify.app, you agreed to use cookies in agreement with the We-Shop's Privacy Policy. </p>

        <p className="font-Caveat italic text-xl m-3 font-black">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>License</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">Unless otherwise stated, We-Shop and/or its licensors own the intellectual property rights for all material on we-shop.netlify.app. All intellectual property rights are reserved. You may access this from we-shop.netlify.app for your own personal use subjected to restrictions set in these terms and conditions.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">You must not:</p>
        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">Republish material from we-shop.netlify.app</li>
            <li className="m-3 font-Shadows font-black text-lg">Sell, rent or sub-license material from we-shop.netlify.app</li>
            <li className="m-3 font-Shadows font-black text-lg">Reproduce, duplicate or copy material from we-shop.netlify.app</li>
            <li className="m-3 font-Shadows font-black text-lg">Redistribute content from we-shop.netlify.app</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsandconditionsgenerator.com/">Free Terms and Conditions Generator</a>.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. We-Shop does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of We-Shop,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, We-Shop shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">We-Shop reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">You warrant and represent that:</p>

        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
            <li className="m-3 font-Shadows font-black text-lg">The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
            <li className="m-3 font-Shadows font-black text-lg">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
            <li className="m-3 font-Shadows font-black text-lg">The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">You hereby grant We-Shop a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Hyperlinking to our Content</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">The following organizations may link to our Website without prior written approval:</p>

        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">Government agencies;</li>
            <li className="m-3 font-Shadows font-black text-lg">Search engines;</li>
            <li className="m-3 font-Shadows font-black text-lg">News organizations;</li>
            <li className="m-3 font-Shadows font-black text-lg">Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
            <li className="m-3 font-Shadows font-black text-lg">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">We may consider and approve other link requests from the following types of organizations:</p>

        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">commonly-known consumer and/or business information sources;</li>
            <li className="m-3 font-Shadows font-black text-lg">dot.com community sites;</li>
            <li className="m-3 font-Shadows font-black text-lg">associations or other groups representing charities;</li>
            <li className="m-3 font-Shadows font-black text-lg">online directory distributors;</li>
            <li className="m-3 font-Shadows font-black text-lg">internet portals;</li>
            <li className="m-3 font-Shadows font-black text-lg">accounting, law and consulting firms; and</li>
            <li className="m-3 font-Shadows font-black text-lg">educational institutions and trade associations.</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of We-Shop; and (d) the link is in the context of general resource information.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to We-Shop. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">Approved organizations may hyperlink to our Website as follows:</p>

        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">By use of our corporate name; or</li>
            <li className="m-3 font-Shadows font-black text-lg">By use of the uniform resource locator being linked to; or</li>
            <li className="m-3 font-Shadows font-black text-lg">By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">No use of We-Shop's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>iFrames</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Content Liability</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Your Privacy</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">Please read Privacy Policy</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Reservation of Rights</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Removal of links from our website</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

        <h3 className="text-center text-xl font-serif my-3 font-black"><strong>Disclaimer</strong></h3>

        <p className="font-Caveat italic text-xl m-3 font-black">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

        <ul className="list-disc">
            <li className="m-3 font-Shadows font-black text-lg">limit or exclude our or your liability for death or personal injury;</li>
            <li className="m-3 font-Shadows font-black text-lg">limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li className="m-3 font-Shadows font-black text-lg">limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li className="m-3 font-Shadows font-black text-lg">exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>

        <p className="font-Caveat italic text-xl m-3 font-black">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

        <p className="font-Caveat italic text-xl m-3 font-black">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    </div>
  )
}

export default TandC;
