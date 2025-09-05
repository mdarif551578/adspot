'use client';

import { Search, Archive, Trash2, Reply, CornerUpRight, Paperclip } from 'lucide-react';

import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ads } from '@/lib/mock-data';
import { formatDistanceToNow } from 'date-fns';

const conversations = [
  {
    id: 'msg-1',
    userName: 'Jane Smith',
    userAvatar: 'https://i.pravatar.cc/150?u=user-2',
    adTitle: 'Slightly Used iPhone 14 Pro, 256GB, Deep Purple',
    adId: '1',
    lastMessage: 'Is this still available? Very interested!',
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    unread: true,
  },
  {
    id: 'msg-2',
    userName: 'John Doe',
    userAvatar: 'https://i.pravatar.cc/150?u=user-1',
    adTitle: '2018 Toyota Axio Hybrid - Mint Condition',
    adId: '2',
    lastMessage: "Thanks for the quick response! I'll take it.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    unread: false,
  },
];

const selectedConversation = {
  ...conversations[0],
  messages: [
    {
      id: 'm1',
      sender: 'Jane Smith',
      content: 'Is this still available? Very interested!',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: 'm2',
      sender: 'You',
      content: 'Yes, it is. Are you available to meet tomorrow?',
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
  ],
};


export default function MessagesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto h-[calc(100vh-8rem)] px-0">
           <div className="h-full rounded-lg border">
            <div className="grid h-full grid-cols-1 md:grid-cols-3">
              <div className="flex h-full flex-col border-r md:col-span-1">
                <div className="flex items-center p-4">
                  <h1 className="font-headline text-xl font-semibold">Inbox</h1>
                   <Tabs defaultValue="all" className="ml-auto">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="unread">Unread</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                 <Separator />
                <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <form>
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search messages..." className="pl-8" />
                    </div>
                  </form>
                </div>
                 <ScrollArea className="flex-1">
                  {conversations.map((convo) => (
                    <div key={convo.id} className="cursor-pointer border-b p-4 hover:bg-accent">
                       <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={convo.userAvatar} />
                          <AvatarFallback>{convo.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="font-semibold">{convo.userName}</p>
                          <p className="text-sm text-muted-foreground">{convo.adTitle}</p>
                          <p className="line-clamp-2 text-sm">{convo.lastMessage}</p>
                        </div>
                        {convo.unread && <div className="ml-auto h-2 w-2 rounded-full bg-primary" />}
                      </div>
                    </div>
                  ))}
                 </ScrollArea>
              </div>
              <div className="flex h-full flex-col md:col-span-2">
                 <div className="flex items-center p-4">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">{selectedConversation.userName}</h2>
                     <span className="text-xs text-muted-foreground">on "{selectedConversation.adTitle}"</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="ghost" size="icon"><Archive /></Button>
                        </TooltipTrigger>
                        <TooltipContent>Archive</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="ghost" size="icon" className="text-destructive"><Trash2 /></Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <Separator />
                 <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {selectedConversation.messages.map((msg, index) => (
                        <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                             {msg.sender !== 'You' && <Avatar className="h-8 w-8"><AvatarImage src={selectedConversation.userAvatar} /></Avatar>}
                             <div className={`max-w-xs rounded-lg p-3 ${msg.sender === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p className="text-sm">{msg.content}</p>
                                <p className="mt-1 text-right text-xs opacity-70">{formatDistanceToNow(msg.timestamp, { addSuffix: true })}</p>
                             </div>
                        </div>
                    ))}
                  </div>
                </div>
                <div className="border-t p-4">
                  <div className="relative">
                    <Textarea placeholder="Type your message..." className="pr-20" />
                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                      <Button type="submit" size="sm">Send</Button>
                      <Button type="button" variant="ghost" size="icon"><Paperclip /></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
