import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const { data, error } = await supabase.functions.invoke('join-waitlist', {
        body: { email }
      });

      if (error) {
        throw error;
      }

      setStatus('success');
      setMessage('Welcome to the waitlist! Check your email for confirmation.');
      setEmail('');
    } catch (error: any) {
      console.error('Waitlist error:', error);
      setStatus('error');
      setMessage(error.message || 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center gap-3 p-4 bg-fantasy-sage/20 border border-fantasy-sage/50 rounded-full">
        <CheckCircle className="w-5 h-5 text-fantasy-sage" />
        <span className="text-fantasy-parchment font-crimson">
          You're on the list! Check your email.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto z-99">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-fantasy-parchment/95 border-fantasy-gold/50 text-fantasy-brown placeholder:text-fantasy-brown/60 font-crimson"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="bg-fantasy-gold hover:bg-fantasy-gold-dark text-fantasy-brown font-cinzel font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-fantasy-brown/30 border-t-fantasy-brown rounded-full animate-spin" />
              Joining...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Join Waitlist
            </div>
          )}
        </Button>
      </form>
      
      {status === 'error' && message && (
        <div className="flex items-center gap-2 mt-3 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          {message}
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
