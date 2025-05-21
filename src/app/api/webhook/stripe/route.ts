import { stripe } from '@/lib/stripe';
import { NextResponse, NextRequest } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { revalidatePath } from 'next/cache';
import { saveSessionData } from '@/lib/sessionStore';


export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = (await headers()).get('Stripe-Signature') as string; // Wrap headers() to make it async in nextjs 15
  let event: Stripe.Event, data: any, eventType: any;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET! as string);
    data = event.data;
    eventType = event.type;
  } catch (error) {
    console.log(error);
    return NextResponse.json('Error occured in Webhook', { status: 400 });
  }


  if (eventType === 'checkout.session.completed') {
    const sessionId = data?.object.id;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
    const priceId = lineItems.data[0]?.price?.id;

    // console.log('Price ID from Stripe:', priceId);
    // console.log("🎯 Price ID from .env", process.env.NEXT_PUBLIC_STRIPE_MEMBERSHIP_PRICE_ID);
    const customerId = session?.customer
    const customer = await stripe.customers.retrieve(customerId as string)


    const sessionObject = event.data.object as Stripe.Checkout.Session;
    const metadata = sessionObject.metadata;

    // if (priceId != process.env.NEXT_PUBLIC_STRIPE_MEMEBERSHIP_PRICE_ID!) {
    //   return NextResponse.json('Price ID does not match', { status: 400 });
    // }

    //console.log(customer, customerId, priceId);
    //console.log("METADATA", metadata);
    //console.log("customer", customer);

    if (metadata) {
      const userId = metadata.userId;
      // * Update user in database (if localstorage is used, data will be updated in client)
      console.log('Fake user updated his membership successfully in our database');
      // updatedUser = mongodb fc findOneAndUpdate({userId, {isSubscribed: true, customerId}})
      // console.log(updatedUser);

      console.log('saving session fake data...', session);
      saveSessionData(sessionId, session); // | simulate a storage update

    }

    // if(!updatedUser) = return error
    // else console.log('User updated successfully', updatedUser)


  }

  console.log('Refreshing page...');
  revalidatePath("/subscriptions", "layout")
  return NextResponse.json("Webhook")
}
