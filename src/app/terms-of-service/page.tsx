import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-stone mx-auto max-w-none dark:prose-invert">
            <h1 className="text-center font-headline">Terms of Service</h1>
            <p className="text-center text-sm text-muted-foreground">
              Last updated: July 22, 2024
            </p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to AdSpot ("we", "us", "our"). By accessing or using our
              website and services, you agree to be bound by these Terms of
              Service ("Terms"). Please read them carefully.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              You must be at least 18 years old to create an account. You are
              responsible for maintaining the confidentiality of your account
              and password and for all activities that occur under your
              account.
            </p>

            <h2>3. Ad Posting and Content</h2>
            <ul>
              <li>
                You are solely responsible for the content you post on AdSpot.
              </li>
              <li>
                You agree not to post content that is illegal, fraudulent,
                defamatory, obscene, or infringing on intellectual property
                rights.
              </li>
              <li>
                We reserve the right to remove any content or terminate
                accounts that violate these terms without notice.
              </li>
              <li>
                Prohibited items include, but are not limited to, weapons,
                drugs, counterfeit goods, and adult services.
              </li>
            </ul>

            <h2>4. Prohibited Conduct</h2>
            <p>
              You agree not to engage in any of the following prohibited
              activities: spamming, phishing, scraping data, attempting to
              interfere with the proper working of the service, or bypassing
              any measures we may use to prevent or restrict access to the
              service.
            </p>

            <h2>5. Disclaimers and Limitation of Liability</h2>
            <p>
              AdSpot is provided "as is" without any warranties. We are not
              liable for any damages or losses resulting from your use of the
              service or from any interactions between users. We do not
              guarantee the accuracy, safety, or legality of items or content
              posted.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access to our service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with
              the laws of Bangladesh, without regard to its conflict of law
              provisions.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or
              replace these Terms at any time. We will provide notice of any
              changes by posting the new Terms on this page.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@adspot.com">legal@adspot.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
