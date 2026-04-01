"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call Supabase auth.signInWithOtp({ email })
    setSent(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <Compass className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-xl">UUL Compass</CardTitle>
          <p className="text-sm text-muted-foreground">
            Post-Merger Command Center
          </p>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-center space-y-2">
              <p className="text-sm">Check your email for a login link.</p>
              <p className="text-xs text-muted-foreground">
                Sent to {email}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSent(false)}
                className="mt-2"
              >
                Try another email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
              <Button type="submit" className="w-full h-11">
                Send Magic Link
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Invitation-only. Contact Jerry for access.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
