// app/api/subscription-status/route.ts
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subscriptionId = searchParams.get("subscriptionId");

  if (!subscriptionId) {
    return NextResponse.json(
      { error: "Subscription ID is required" },
      { status: 400 }
    );
  }

  try {
    const subscriptionResponse = await stripe.subscriptions.retrieve(subscriptionId);
    // If using Stripe API v10+, the subscription object is in the 'data' property
    const subscription = (subscriptionResponse as any).data ?? subscriptionResponse;

    return NextResponse.json({
      id: subscription.id,
      status: subscription.status, // 'active', 'canceled', 'incomplete', etc.
      cancel_at_period_end: subscription.cancel_at_period_end,
      canceled_at: subscription.canceled_at,
      current_period_end: subscription.current_period_end,
      customer: subscription.customer,
    });
  } catch (error: any) {
    console.error("Error fetching subscription:", error.message);
    return NextResponse.json(
      { error: "Failed to retrieve subscription" },
      { status: 500 }
    );
  }
}
