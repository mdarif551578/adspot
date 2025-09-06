import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Users, Banknote, Webcam } from 'lucide-react';

export default function SafetyTipsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-center font-headline text-4xl font-bold md:text-5xl">
            Safety Tips for Buyers & Sellers
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Stay safe while trading on AdSpot. Here are some important tips to
            keep in mind.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Meet in a Public Place</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Always arrange to meet sellers or buyers in a well-lit, public
                location, like a coffee shop, shopping mall, or police station
                parking lot. Avoid meeting in secluded areas or inviting
                strangers into your home.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle>Verify the Item Before Paying</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                For buyers, always inspect the item thoroughly before making a
                payment. Check for functionality, authenticity, and any
                defects. Don't feel pressured to complete the purchase if you
                are not satisfied.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Banknote className="h-6 w-6" />
                  </div>
                  <CardTitle>Avoid Advance Payments & Wiring Money</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Be wary of sellers who ask for advance payments, especially
                through wire transfers (e.g., Western Union, MoneyGram). Scammers
                often use these methods. Deal locally and pay in person once
                you have the item.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Webcam className="h-6 w-6" />
                  </div>
                  <CardTitle>Protect Your Personal Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Do not share unnecessary personal information like your bank
                account details, credit card numbers, or personal ID numbers.
                All communication should be kept within the AdSpot messaging
                system initially.
              </CardContent>
            </Card>
          </div>
           <Card className="mt-8 bg-destructive/10 border-destructive/50">
             <CardHeader>
                <CardTitle className="text-destructive">General Rule of Thumb</CardTitle>
             </CardHeader>
             <CardContent className="text-destructive">
                If a deal seems too good to be true, it probably is. Trust your instincts. If you feel uncomfortable or suspicious about a transaction, walk away and report the user to us.
             </CardContent>
           </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
