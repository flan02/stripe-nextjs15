import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const WebhookPage = (props: Props) => {
  return (
    <main className='px-8 space-y-4'>
      <br />
      <h1 className='text-center text-4xl font-bold'>📦 List of Stripe Objects and Their Purpose</h1>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🔁</span>checkout.session</h2>
        <br />
        <p><strong>What is it?</strong><br />A session created when a user starts the Stripe Checkout payment flow.</p>
        <p><strong>What is it used for?</strong><br />Manages the payment process. Includes data like <code>payment_status</code>, <code>subscription</code>, <code>customer</code>, <code>success_url</code>, and <code>cancel_url</code>.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">checkout.session.completed</li>
          <li className="font-bold text-green-600">checkout.session.async_payment_failed</li>
          <li className="font-bold text-green-600">checkout.session.async_payment_succeeded</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">👤</span>customer</h2>
        <br />
        <p><strong>What is it?</strong><br />Represents the user or customer who makes payments.</p>
        <p><strong>What is it used for?</strong><br />Stores persistent info like email, address, payment methods, and history.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">customer.created</li>
          <li className="font-bold text-green-600">customer.updated</li>
          <li className="font-bold text-green-600">customer.deleted</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🧾</span>subscription</h2>
        <br />
        <p><strong>What is it?</strong><br />Represents an active subscription to a recurring product or service.</p>
        <p><strong>What is it used for?</strong><br />Manages recurring payments (monthly, yearly) and includes status (active, canceled, etc.).</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">customer.subscription.created</li>
          <li className="font-bold text-green-600">customer.subscription.updated</li>
          <li className="font-bold text-green-600">customer.subscription.deleted</li>
          <li className="font-bold text-green-600">invoice.payment_succeeded</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">💳</span>invoice</h2><br />
        <p><strong>What is it?</strong><br />An invoice automatically generated to charge a customer for a subscription.</p>
        <p><strong>What is it used for?</strong><br />Details charges per billing cycle and supports both automatic and manual payments.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">invoice.created</li>
          <li className="font-bold text-green-600">invoice.paid</li>
          <li className="font-bold text-green-600">invoice.payment_failed</li>
          <li className="font-bold text-green-600">invoice.finalized</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">💸</span>payment_intent</h2><br />
        <p><strong>What is it?</strong><br />Represents the intent to make a payment.</p>
        <p><strong>What is it used for?</strong><br />Orchestrates the payment process: method selection, validations, and confirmation.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">payment_intent.succeeded</li>
          <li className="font-bold text-green-600">payment_intent.payment_failed</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">📦</span>product</h2><br />
        <p><strong>What is it?</strong><br />Defines a good or service available for sale.</p>
        <p><strong>What is it used for?</strong><br />Links to price to define what it costs. Can be physical or digital.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">product.created</li>
          <li className="font-bold text-green-600">product.updated</li>
          <li className="font-bold text-green-600">product.deleted</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">💰</span>price</h2><br />
        <p><strong>What is it?</strong><br />Defines the cost of a product.</p>
        <p><strong>What is it used for?</strong><br />Can be one-time or recurring. Includes currency, amount, and billing frequency.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">price.created</li>
          <li className="font-bold text-green-600">price.updated</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">📬</span>shipping</h2>br
        <p><strong>What is it?</strong><br />Shipping information provided by the customer.</p>
        <p><strong>What is it used for?</strong><br />Applies to physical products. Includes address, shipping options, and costs.</p>
        <p><strong>Related events:</strong><br />No standalone events; shipping data is included within <code>checkout.session</code> or <code>invoice</code>.</p>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🧾</span>payment_method</h2><br />
        <p><strong>What is it?</strong><br />Represents the payment method used (card, PayPal, Link, etc.).</p>
        <p><strong>What is it used for?</strong><br />Can be stored for future use, updated, or removed.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">payment_method.attached</li>
          <li className="font-bold text-green-600">payment_method.detached</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">📩</span>subscription_schedule</h2><br />
        <p><strong>What is it?</strong><br />A more advanced subscription configuration for scheduled future changes.</p>
        <p><strong>What is it used for?</strong><br />Ideal for automating future plan changes, pauses, or upgrades.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">subscription_schedule.created</li>
          <li className="font-bold text-green-600">subscription_schedule.updated</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🎟️</span>coupon & discount</h2><br />
        <p><strong>What is it?</strong><br />Discounts applied to subscriptions or invoices.</p>
        <p><strong>What is it used for?</strong><br />Enables temporary or permanent price reductions.</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">customer.discount.created</li>
          <li className="font-bold text-green-600">invoice.discount.created</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">📆</span>trial_periods</h2><br />
        <p><strong>What is it?</strong><br />Trial periods offered before a subscription begins billing.</p>
        <p><strong>What is it used for?</strong><br />Allows customers to access services for free for a limited time.</p>
        <p><strong>Included in:</strong><br /><code>subscription.trial_start</code>, <code>subscription.trial_end</code></p>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🌐</span>webhook_endpoint</h2><br />
        <p><strong>What is it?</strong><br />The URL endpoint where Stripe sends event notifications.</p>
        <p><strong>What is it used for?</strong><br />Lets your backend respond to Stripe events (e.g., user creation, subscription activation).</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">webhook_endpoint.created</li>
          <li className="font-bold text-green-600">webhook_endpoint.deleted</li>
        </ul>
      </div>
      <br />
      <div className="space-y-1">
        <h2 className='text-center text-2xl font-bold'><span className="emoji">🔒</span>setup_intent</h2><br />
        <p><strong>What is it?</strong><br />Similar to <code>payment_intent</code>, but used to store a payment method without charging.</p>
        <p><strong>What is it used for?</strong><br />Prepares a payment method for future use (e.g., one-click subscriptions).</p>
        <p><strong>Related events:</strong></p>
        <ul>
          <li className="font-bold text-green-600">setup_intent.created</li>
          <li className="font-bold text-green-600">setup_intent.succeeded</li>
        </ul>
      </div>

      <hr />

      <h2 className='text-center text-2xl font-bold'>✅ Summary</h2><br />
      <p className='font-bold'>These objects are interconnected and make up the Stripe ecosystem for handling:</p>
      <ul>
        <li className="font-bold text-green-600">Customers</li>
        <li className="font-bold text-green-600">Products & Prices</li>
        <li className="font-bold text-green-600">Subscriptions</li>
        <li className="font-bold text-green-600">Invoices & Payments</li>
        <li className="font-bold text-green-600">Shipping</li>
        <li className="font-bold text-green-600">Discounts</li>
        <li className="font-bold text-green-600">Webhooks & Automation</li>
      </ul>
      <p>Use webhooks to listen for all key events in real-time and synchronize your backend logic accordingly.</p>
      <br /><br />
      <div className='text-center'>

        <Button asChild className=''>

          <Link href='/' rel="noopener">Go back</Link>
        </Button>
      </div>
      <br /><br />
    </main>
  )
}

export default WebhookPage

/* 
    <main classNameName='px-8 space-y-2'>

      <h1 classNameName='text-center text-4xl font-bold'>Stripe Object Reference</h1>

      <p>This document describes the main objects that Stripe handles when working with subscriptions, sessions, payments, and webhooks.</p>
      <br />

      <h2 classNameName='text-green-600 text-2xl'>1. Checkout Session</h2>
      <p><strong>Purpose:</strong> Represents a single instance of a customer going through the payment process.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Unique ID of the session (e.g., <code>cs_test_...</code>).</li>
        <li className="font-bold text-green-600"><strong>mode:</strong> Indicates the purpose (e.g., <code>subscription</code>, <code>payment</code>).</li>
        <li className="font-bold text-green-600"><strong>customer:</strong> ID of the associated customer.</li>
        <li className="font-bold text-green-600"><strong>subscription:</strong> ID of the created subscription if <code>mode</code> is <code>subscription</code>.</li>
        <li className="font-bold text-green-600"><strong>payment_status:</strong> Shows if the payment was successful (<code>paid</code>).</li>
        <li className="font-bold text-green-600"><strong>success_url / cancel_url:</strong> URLs where the customer is redirected after success or cancellation.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>2. Subscription</h2>
      <p><strong>Purpose:</strong> Represents an ongoing billing agreement between a customer and your product/service.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Unique subscription ID (e.g., <code>sub_...</code>).</li>
        <li className="font-bold text-green-600"><strong>status:</strong> Can be <code>active</code>, <code>past_due</code>, <code>canceled</code>, or <code>unpaid</code>.</li>
        <li className="font-bold text-green-600"><strong>cancel_at_period_end:</strong> If <code>true</code>, subscription will cancel at end of current billing period.</li>
        <li className="font-bold text-green-600"><strong>canceled_at:</strong> Timestamp of when it was canceled (if applicable).</li>
        <li className="font-bold text-green-600"><strong>customer:</strong> Stripe customer ID linked to the subscription.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>3. Customer</h2>
      <p><strong>Purpose:</strong> Represents a user or buyer in Stripe.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Stripe customer ID (e.g., <code>cus_...</code>).</li>
        <li className="font-bold text-green-600"><strong>email:</strong> Email address of the customer.</li>
        <li className="font-bold text-green-600"><strong>name / address / phone:</strong> Personal info associated with the customer.</li>
        <li className="font-bold text-green-600"><strong>subscriptions:</strong> List of active and past subscriptions.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>4. Price</h2>
      <p><strong>Purpose:</strong> Represents the cost of a product or service.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Unique price ID (e.g., <code>price_...</code>).</li>
        <li className="font-bold text-green-600"><strong>unit_amount:</strong> Amount to be charged, in cents.</li>
        <li className="font-bold text-green-600"><strong>currency:</strong> Currency code (e.g., <code>usd</code>).</li>
        <li className="font-bold text-green-600"><strong>recurring:</strong> Describes interval (<code>monthly</code>, <code>yearly</code>).</li>
        <li className="font-bold text-green-600"><strong>product:</strong> Linked product ID.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>5. Product</h2>
      <p><strong>Purpose:</strong> Describes what is being sold (used with <code>Price</code>).</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Product ID.</li>
        <li className="font-bold text-green-600"><strong>name:</strong> Product name (e.g., Pro Plan).</li>
        <li className="font-bold text-green-600"><strong>description:</strong> Short description of the product.</li>
        <li className="font-bold text-green-600"><strong>active:</strong> Indicates if the product is available.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>6. Invoice</h2>
      <p><strong>Purpose:</strong> Automatically generated when charging customers for subscriptions or other recurring payments.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> Invoice ID (e.g., <code>in_...</code>).</li>
        <li className="font-bold text-green-600"><strong>status:</strong> <code>draft</code>, <code>open</code>, <code>paid</code>, <code>uncollectible</code>, <code>void</code>.</li>
        <li className="font-bold text-green-600"><strong>amount_due:</strong> Total amount due in the invoice.</li>
        <li className="font-bold text-green-600"><strong>subscription:</strong> Subscription ID that generated the invoice.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>7. PaymentIntent</h2>
      <p><strong>Purpose:</strong> Represents a payment that is being attempted.</p>
      <ul>
        <li className="font-bold text-green-600"><strong>id:</strong> PaymentIntent ID (e.g., <code>pi_...</code>).</li>
        <li className="font-bold text-green-600"><strong>status:</strong> <code>requires_payment_method</code>, <code>requires_confirmation</code>, <code>succeeded</code>, etc.</li>
        <li className="font-bold text-green-600"><strong>amount:</strong> Total amount intended to be collected.</li>
      </ul>
      <br />
      <h2 classNameName='text-green-600 text-2xl'>8. Webhook Events</h2>
      <p><strong>Purpose:</strong> Notifications sent by Stripe to your backend when certain actions happen (e.g., subscription canceled).</p>
      <ul>
        <li className="font-bold text-green-600"><strong>checkout.session.completed</strong> – A Checkout Session has successfully completed.</li>
        <li className="font-bold text-green-600"><strong>invoice.payment_succeeded</strong> – A payment for an invoice was successful.</li>
        <li className="font-bold text-green-600"><strong>customer.subscription.created</strong> – A new subscription was created.</li>
        <li className="font-bold text-green-600"><strong>customer.subscription.updated</strong> – A subscription was updated.</li>
        <li className="font-bold text-green-600"><strong>customer.subscription.deleted</strong> – A subscription was canceled or ended.</li>
      </ul>

      <p>For a full list of events and object schemas, refer to Stripe’s official documentation: <a href="https://stripe.com/docs/api/events/types" target="_blank">https://stripe.com/docs/api/events/types</a></p>
    </main>
*/