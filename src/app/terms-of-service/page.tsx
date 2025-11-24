import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function TermsOfService() {
    return (
        <div className="bg-background text-foreground font-sans">
            <Header/>
            <main className="container mx-auto px-6 sm:px-8 py-24 pt-40">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">Terms of Service</h1>
                    <p className="text-foreground/70 mb-8"><em>Last updated: 10/06/2025</em></p>

                    <div className="space-y-6 text-foreground/90">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">1. Agreement to Terms</h2>
                            <p>
                                By using our services, you agree to be bound by these Terms of Service. If you do not
                                agree to these terms, please do not use our services. We may update these terms from
                                time to time, and your continued use of the services constitutes acceptance of those
                                changes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property Rights</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain
                                the exclusive property of SeekHexa and its licensors. Our trademarks and trade dress
                                may not be used in connection with any product or service without the prior written
                                consent of SeekHexa.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
                            <p>
                                When you create an account with us, you must provide us with information that is
                                accurate, complete, and current at all times. Failure to do so constitutes a breach of
                                the Terms, which may result in immediate termination of your account on our Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">4. Prohibited Activities</h2>
                            <p>
                                You may not access or use the app for any purpose other than that for which we make the
                                app available. The app may not be used in connection with any commercial endeavors
                                except those that are specifically endorsed or approved by us.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
                            <p>
                                We may terminate or suspend your account immediately, without prior notice or
                                liability, for any reason whatsoever, including without limitation if you breach the
                                Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
                            <p>
                                In no event shall SeekHexa, nor its directors, employees, partners, agents, suppliers,
                                or affiliates, be liable for any indirect, incidental, special, consequential or
                                punitive damages, including without limitation, loss of profits, data, use, goodwill,
                                or other intangible losses.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">7. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of the
                                jurisdiction in which the company is established, without regard to its conflict of law
                                provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">8. Changes to These Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any
                                time. If a revision is material we will provide at least 30 days&apos; notice prior to
                                any
                                new terms taking effect. What constitutes a material change will be determined at our
                                sole discretion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at help@SeekHexa.com.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
