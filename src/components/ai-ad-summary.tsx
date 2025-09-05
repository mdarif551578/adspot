'use client';

import { useState } from 'react';
import { Sparkles, LoaderCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { summarizeAd } from '@/ai/flows/ai-summarize-ad';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function AIAdSummary({ adContent }: { adContent: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      if (adContent.trim().length < 10) {
        // Basic validation to avoid sending empty/too short content
        throw new Error('Ad content is too short for a summary.');
      }
      const result = await summarizeAd({ adContent });
      setSummary(result.summary);
    } catch (error) {
      console.error('Failed to generate summary:', error);
      toast({
        title: 'Summarization Error',
        description:
          error instanceof Error
            ? error.message
            : 'Could not generate AI summary. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (summary) {
    return (
      <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-3">
        <h4 className="flex items-center font-semibold text-sm text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          AI-Powered Summary
        </h4>
        <p className="mt-1 text-sm text-foreground/80">{summary}</p>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSummarize}
            disabled={isLoading}
            className="mt-4 w-full"
          >
            {isLoading ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Generate AI Summary
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get a quick summary of the ad using AI.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
