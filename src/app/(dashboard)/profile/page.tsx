import { User, Mail, Phone, MapPin, Edit } from 'lucide-react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// This is a placeholder for the logged-in user data.
// In a real application, this would come from a session or API call.
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+8801234567890',
  location: 'Dhaka, Bangladesh',
  avatarUrl: 'https://i.pravatar.cc/150?u=user-1',
  role: 'USER',
  createdAt: '2023-01-15T00:00:00.000Z',
};

export default function ProfilePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-2xl">My Account</CardTitle>
                <Button variant="outline">
                  <Edit className="mr-2" /> Edit Profile
                </Button>
              </div>
              <CardDescription>
                View and manage your profile information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">
                    Member since {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                  <Badge className="mt-2">{user.role}</Badge>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h3 className="font-headline text-lg font-semibold">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                   <div className="flex items-center gap-3 rounded-md border p-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Full Name</p>
                      <p className="text-muted-foreground">{user.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email Address</p>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-md border p-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone Number</p>
                      <p className="text-muted-foreground">{user.phone}</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-3 rounded-md border p-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-muted-foreground">{user.location}</p>
                    </div>
                  </div>
                </div>
              </div>
               <Separator className="my-8" />
               <div className="space-y-4">
                 <h3 className="font-headline text-lg font-semibold">Security</h3>
                 <Button variant="secondary">Change Password</Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
