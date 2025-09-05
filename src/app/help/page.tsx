import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HelpPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
            Help & FAQ
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Find answers to common questions about using AdSpot.
          </p>

          <Accordion type="single" collapsible className="mt-12 w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I post an ad?</AccordionTrigger>
              <AccordionContent>
                To post an ad, click the "Post Ad" button in the navigation
                bar. You'll be guided through a simple process to select a
                category, add details and images, and publish your listing.
                You must be logged in to post an ad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is posting an ad free?</AccordionTrigger>
              <AccordionContent>
                Yes, standard ad listings on AdSpot are completely free. We may
                offer optional paid features in the future, such as "Featured
                Ads," to increase visibility, but the core service of posting
                an ad will remain free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I edit or delete my ad?</AccordionTrigger>
              <AccordionContent>
                You can manage all your ads from your dashboard. Log in to your
                account and navigate to the "My Ads" section. From there, you
                will find options to edit, mark as sold, or delete your
                listings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I contact a seller?</AccordionTrigger>
              <AccordionContent>
                On the ad detail page, you will find a "Send Message" button.
                Clicking this will allow you to send a private message to the
                seller directly through our platform. Some sellers may also
                choose to display their phone number.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What should I do if I suspect a scam?</AccordionTrigger>
              <AccordionContent>
                If you encounter a suspicious ad or user, please report it to
                us immediately. On every ad detail page, there is a "Report
                this ad" button. Provide as much detail as possible, and our
                moderation team will investigate.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-6">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                If you've forgotten your password, you can go to the login page and click the "Forgot Password?" link. You will be asked to enter your email address, and a password reset link will be sent to you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
