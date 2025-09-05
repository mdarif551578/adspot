import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Users, Goal } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-headline text-center text-4xl font-bold md:text-5xl">
              About AdSpot
            </h1>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Your trusted partner in buying and selling, right in your
              community.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Our Mission
                  </CardTitle>
                  <Goal className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To create a simple, safe, and efficient marketplace that
                    connects local buyers and sellers, fostering a vibrant
                    community economy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Who We Are</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We are a team of passionate developers and entrepreneurs
                    dedicated to building a platform that empowers individuals
                    and small businesses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Our Vision
                  </CardTitle>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To be the #1 classifieds platform in the region, known for
                    our commitment to user trust, security, and continuous
                    innovation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-stone mx-auto mt-12 max-w-none dark:prose-invert">
              <h2>The AdSpot Story</h2>
              <p>
                Founded in 2024, AdSpot was born from a simple idea: make it
                easier for people to find what they need and sell what they
                don't, without the hassle. We noticed that existing platforms
                were either too complicated, too expensive, or lacked the trust
                and safety features necessary for a comfortable user
                experience.
              </p>
              <p>
                We set out to change that. By focusing on a clean design,
                intuitive features, and a strong emphasis on community safety,
                we've built a platform that we're proud of. Whether you're
                looking for a new car, a new job, or a new home for your pre-loved
                items, AdSpot is here to help you make the connection.
              </p>
              <blockquote>
                <p>
                  Our goal is not just to be a website, but a cornerstone of
                  the local economy.
                </p>
              </blockquote>
              <p>
                Thank you for being a part of our journey. We're excited to
                see what you'll discover on AdSpot.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
