import React from 'react'

function Faq() {
  return (
    <div className=" m-3 px-2 py-5 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-black">FAQ</h1>

      <div className="space-y-6">
        {/* FAQ Item */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">How do I check my order status?</h2>
          <p className='text-l'>
          To check the status of your order, including processing and delivery updates, you can log in to your My Account or enter your order number and email address. Once your order has been dispatched, you will receive an email with a tracking number for all delivery updates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">Can I change or cancel my order once it has been placed?</h2>
          <p className='text-l'>
            Unfortunately, no. Once placed, your order is immediately sent for processing. If needed, you can return your item—refer to our Return & Exchange policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">How do I return or exchange an item?</h2>
          <p className='text-l'>
            You can return items within 30 days in their original, unused condition for a full refund. Contact our customer service team at <strong>[Contact Information]</strong> to begin the return.  
            We don’t offer direct exchanges—please return the item and place a new order.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">What types of payments are accepted?</h2>
          <p className='text-l'>
            We accept debit/credit cards, Apple Pay, Google Pay, PayPal, and StoreKing Gift Cards. See our Payment Options page for full details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">How do I use a promotion/coupon code?</h2>
          <p className='text-l'>
            Enter your code at checkout in the coupon field and click "apply." Ensure the spelling and capitalization are correct. If invalid or expired, or if the cart doesn't meet requirements, the discount won't apply.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Why is my coupon code not working?</h2>
          <p className='text-l'>
            Codes may exclude new releases, clearance, or promotional items. Coupons can’t be combined with other offers, applied to past orders, or used for gift cards or account payments.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How quickly will my order be delivered?</h2>
          <p className='text-l'>
            We offer 1-hour express grocery delivery within our service area. Fast and reliable—just the way you like it!
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">What if my order is late?</h2>
          <p className='text-l'>
            Please contact our customer support team at <strong>086213456</strong>. While we aim for timely deliveries, occasional delays can occur due to unforeseen circumstances.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Can I schedule a delivery for a specific time?</h2>
          <p className='text-l'>
            Currently, we provide 1-hour express delivery but do not offer scheduled time slots. We're actively working to bring this feature soon.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">What items are not eligible for return?</h2>
          <p className='text-l'>
            Perishable items like fresh produce, dairy, and frozen goods are not returnable. Opened or used items are also not accepted unless defective or damaged.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Faq