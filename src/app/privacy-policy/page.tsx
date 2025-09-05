import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-stone mx-auto max-w-none dark:prose-invert">
            <h1 className="text-center font-headline">Privacy Policy</h1>
            <p className="text-center text-sm text-muted-foreground">
              Last updated: July 22, 2024
            </p>

            <h2>1. Introduction</h2>
            <p>
              AdSpot ("we", "us", "our") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul>
              <li>
                <strong>Personal Data:</strong> Personally identifiable
                information, such as your name, email address, and telephone
                number, that you voluntarily give to us when you register with
                the site.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers
                automatically collect when you access the site, such as your
                IP address, browser type, operating system, and access times.
              </li>
              <li>
                <strong>Financial Data:</strong> We currently do not store any
                financial information. If we introduce paid features, we will
                use a third-party payment processor (e.g., Stripe) and will
                update this policy.
              </li>
            </ul>

            <h2>3. Use of Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Facilitate communication between users.</li>
              <li>Email you regarding your account or orders.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
              <li>Prevent fraudulent transactions and monitor against theft.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <ul>
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the
                release of information about you is necessary to respond to
                legal process, to investigate or remedy potential violations
                of our policies, or to protect the rights, property, and safety
                of others.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share
                your information with third parties that perform services for
                us or on our behalf, including data analysis, email delivery,
                hosting services, and customer service.
              </li>
              <li>
                <strong>User Interactions:</strong> If you interact with other
                users of the Site, those users may see your name, profile photo,
                and descriptions of your activity.
              </li>
            </ul>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide
              to us, please be aware that despite our efforts, no security
              measures are perfect or impenetrable.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. You can manage your account information from your user
              dashboard or by contacting us directly.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{' '}
              <a href="mailto:privacy@adspot.com">privacy@adspot.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
