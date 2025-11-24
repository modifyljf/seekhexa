import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white font-sans">
            <Header/>
            <main className="container mx-auto px-6 sm:px-8 py-24 pt-40">
                <div
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-10 py-10 shadow-xl shadow-black/30 backdrop-blur-sm">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-white/60 mb-8">
                        <em>Last updated: 11/24/2025</em>
                    </p>

                    <div className="space-y-8 text-white/90 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                            <p>
                                Welcome to SeekHexa, an AI-assisted divination and journaling
                                space. We understand that your questions, emotions, and
                                spiritual reflections are deeply personal. We are committed to
                                protecting your personal information and your right to privacy.
                                If you have any questions or concerns about this policy or our
                                practices with regard to your personal information, please
                                contact us at <span className="underline">help@seekhexa.com</span>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                2. Information We Collect
                            </h2>
                            <p>
                                We collect personal information that you voluntarily provide to
                                us when you register on the app, express interest in obtaining
                                information about us or our services, participate in activities
                                on the app, or otherwise contact us.
                            </p>
                            <p className="mt-2">
                                The personal information that we collect depends on the context
                                of your interactions with us and the app, the choices you make,
                                and the products and features you use. The personal information
                                we collect may include the following: names, email addresses,
                                and other similar information.
                            </p>
                            <p className="mt-2">
                                In the context of a divination and journaling app, this may also
                                include content you choose to input — such as journal entries,
                                questions asked to the system, tags, and metadata associated
                                with your readings (for example, timestamps or categories). You
                                are always in control of what you choose to share.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                3. How We Use Your Information
                            </h2>
                            <p>
                                We use personal information collected via our app for a variety
                                of business purposes described below. We process your personal
                                information for these purposes in reliance on our legitimate
                                business interests, in order to enter into or perform a contract
                                with you, with your consent, and/or for compliance with our
                                legal obligations.
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>To facilitate account creation and log-in.</li>
                                <li>
                                    To provide you with personalized readings, insights, and
                                    journaling features.
                                </li>
                                <li>
                                    To operate, maintain, and improve the app experience,
                                    including stability, usability, and feature quality.
                                </li>
                                <li>To manage user accounts and provide user support.</li>
                                <li>To send important administrative information to you.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                4. Will Your Information Be Shared With Anyone?
                            </h2>
                            <p>
                                We only share information with your consent, to comply with
                                laws, to provide you with services, to protect your rights, or
                                to fulfill legitimate business obligations. We do not sell your
                                personal information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                5. How Long Do We Keep Your Information?
                            </h2>
                            <p>
                                We will only keep your personal information for as long as it is
                                necessary for the purposes set out in this privacy policy,
                                unless a longer retention period is required or permitted by law
                                (such as tax, accounting, or other legal requirements).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                6. How Do We Keep Your Information Safe?
                            </h2>
                            <p>
                                We have implemented appropriate technical and organizational
                                security measures designed to protect the security of any
                                personal information we process. While we strive to safeguard
                                your data, no electronic transmission or storage technology can
                                be guaranteed to be 100% secure, and you share information at
                                your own risk.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                7. Do We Collect Information From Minors?
                            </h2>
                            <p>
                                We do not knowingly solicit data from or market to children
                                under 18 years of age. By using the app, you represent that you
                                are at least 18, or that you are the parent or guardian of such
                                a minor and consent to such minor dependent&apos;s use of the
                                app. If we learn that personal information from users under 18
                                has been collected, we will take reasonable measures to promptly
                                delete such data.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                8. What Are Your Privacy Rights?
                            </h2>
                            <p>
                                In some regions (like the EEA and UK), you have certain rights
                                under applicable data protection laws. These may include the
                                right (i) to request access and obtain a copy of your personal
                                information, (ii) to request rectification or erasure, (iii) to
                                restrict the processing of your personal information, and (iv),
                                if applicable, to data portability.
                            </p>
                            <p className="mt-2">
                                You can also request to delete your account and associated data
                                from within the app or by contacting us directly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                9. Controls for Do-Not-Track Features
                            </h2>
                            <p>
                                Most web browsers and some mobile operating systems and mobile
                                applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting
                                you can activate to signal your privacy preference not to have
                                data about your online browsing activities monitored and
                                collected. At this time, no uniform technology standard for
                                recognizing and implementing DNT signals has been finalized, and
                                we do not currently respond to DNT browser signals or any other
                                mechanism that automatically communicates your choice not to be
                                tracked online.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                10. Journals, Readings, and Vault Mode
                            </h2>
                            <p>
                                Your journal entries and divination readings may be stored so
                                that you can review past insights, observe patterns over time,
                                and use advanced features like trends and dashboards. You may
                                choose which entries or readings are available for such
                                features.
                            </p>
                            <p className="mt-2">
                                Content stored in any dedicated “Vault” or similar high-privacy
                                area is treated with additional sensitivity. It is intended
                                solely for your personal reference and is not used to generate
                                collective analytics or trends.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                11. How Can You Contact Us About This Policy?
                            </h2>
                            <p>
                                If you have questions or comments about this policy, you may
                                email us at <span className="underline">help@seekhexa.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}