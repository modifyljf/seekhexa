import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="bg-background text-foreground font-sans">
            <Header/>
            <main className="container mx-auto px-6 sm:px-8 py-24 pt-40">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
                    <p className="text-foreground/70 mb-8"><em>Last updated: 09/19/2025</em></p>

                    <div className="space-y-6 text-foreground/90">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                            <p>
                                Welcome to SeekHexa. We are committed to protecting your personal information and your
                                right to privacy.
                                If you have any questions or concerns about our policy, or our practices with regards to
                                your personal
                                information, please contact us at help@seekhexa.com.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on
                                the app,
                                express an interest in obtaining information about us or our products and services, when
                                you participate
                                in activities on the app or otherwise when you contact us.
                            </p>
                            <p className="mt-2">
                                The personal information that we collect depends on the context of your interactions
                                with us and the app,
                                the choices you make and the products and features you use. The personal information we
                                collect may
                                include the following: names, email addresses, and other similar information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our app for a variety of business purposes
                                described below.
                                We process your personal information for these purposes in reliance on our legitimate
                                business interests,
                                in order to enter into or perform a contract with you, with your consent, and/or for
                                compliance with
                                our legal obligations.
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To post testimonials.</li>
                                <li>To manage user accounts.</li>
                                <li>To send administrative information to you.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">4. Will Your Information Be Shared With
                                Anyone?</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with
                                services,
                                to protect your rights, or to fulfill business obligations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">5. How Long Do We Keep Your Information?</h2>
                            <p>
                                We will only keep your personal information for as long as it is necessary for the
                                purposes set out in
                                this privacy policy, unless a longer retention period is required or permitted by law
                                (such as tax,
                                accounting or other legal requirements).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">6. How Do We Keep Your Information Safe?</h2>
                            <p>
                                We have implemented appropriate technical and organizational security measures designed
                                to protect the
                                security of any personal information we process.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">7. Do We Collect Information From Minors?</h2>
                            <p>
                                We do not knowingly solicit data from or market to children under 18 years of age.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">8. What Are Your Privacy Rights?</h2>
                            <p>
                                In some regions (like the EEA and UK), you have certain rights under applicable data
                                protection laws.
                                These may include the right (i) to request access and obtain a copy of your personal
                                information,
                                (ii) to request rectification or erasure; (iii) to restrict the processing of your
                                personal information;
                                and (iv) if applicable, to data portability.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">9. Controls for Do-Not-Track Features</h2>
                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a
                                Do-Not-Track
                                (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to
                                have data about
                                your online browsing activities monitored and collected.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">10. How Can You Contact Us About This
                                Policy?</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at
                                help@seekhexa.com.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
