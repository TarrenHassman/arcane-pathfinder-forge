import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Adding email to waitlist:", email);

    // Add contact to Resend audience
    const contactResponse = await resend.contacts.create({
      email: email,
      audienceId: "78c9e0c1-200c-4b35-9f19-cd3b7eae6dfe", // You'll need to replace this with your actual audience ID
    });

    console.log("Contact created:", contactResponse);

    // Send welcome email
    const emailResponse = await resend.emails.send({
      from: "Codex Anima <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Codex Anima Waitlist!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background: linear-gradient(135deg, #2a1e0d 0%, #1a1409 100%); color: #f4f1e8; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #eeb62c; font-size: 32px; margin: 0; text-shadow: 0 0 10px rgba(238, 182, 44, 0.6);">
              ⚔️ Codex Anima ⚔️
            </h1>
            <p style="color: #87a96b; font-size: 18px; margin: 10px 0 0 0;">AI Driven Worlds</p>
          </div>
          
          <div style="background: rgba(244, 241, 232, 0.1); border: 1px solid #eeb62c; border-radius: 10px; padding: 30px; margin: 20px 0;">
            <h2 style="color: #eeb62c; margin-top: 0;">Welcome, Adventurer!</h2>
            <p style="line-height: 1.6; margin: 16px 0;">
              You've successfully joined the Codex Anima waitlist! Prepare to experience the future of tabletop gaming with AI-powered NPCs, dynamic storytelling, and infinite possibilities.
            </p>
            
            <div style="margin: 25px 0;">
              <h3 style="color: #eeb62c; margin-bottom: 15px;">What to Expect:</h3>
              <ul style="padding-left: 20px; line-height: 1.8;">
                <li>🤖 Intelligent NPCs that respond naturally to your actions</li>
                <li>📜 Dynamic quest generation based on your choices</li>
                <li>🌍 Procedurally generated worlds that evolve with your story</li>
                <li>⚡ Lightning-fast campaign setup and management</li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; margin: 16px 0;">
              We'll keep you updated on our progress and notify you the moment early access becomes available. 
              Your epic adventures await!
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eeb62c;">
            <p style="color: #87a96b; font-size: 14px; margin: 0;">
              Thank you for joining our community of storytellers and adventurers.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Welcome email sent:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully joined waitlist!",
        contactId: contactResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in join-waitlist function:", error);
    
    // Handle specific Resend errors
    if (error.message?.includes('Contact already exists')) {
      return new Response(
        JSON.stringify({ error: "You're already on our waitlist!" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ error: error.message || "Failed to join waitlist" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
