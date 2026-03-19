// Lemonade Bloom – Walmart Seller Course Data
// All content sourced from SOP documents and course workbook

export interface Step {
  id: string;
  title: string;
  content: string;
  important?: string;
  tip?: string;
  checklist?: string[];
  substeps?: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
  hasVideo?: boolean;
  videoTitle?: string;
  steps: Step[];
}

export const modules: Module[] = [
  {
    id: "welcome",
    number: 1,
    title: "Welcome to Lemonade Bloom",
    subtitle: "Your Walmart Seller Journey Starts Here",
    icon: "🌼",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    hasVideo: true,
    videoTitle: "Welcome & Walmart Marketplace Overview",
    steps: [
      {
        id: "w1",
        title: "Why Walmart Marketplace?",
        content: "Walmart Marketplace is one of the fastest-growing ecommerce platforms in the United States. With over 120 million monthly unique visitors and a rapidly expanding third-party seller ecosystem, it offers incredible opportunity for new sellers.",
        checklist: [
          "Massive, loyal customer base of 120M+ monthly visitors",
          "Lower seller competition compared to Amazon",
          "High buy box win opportunity for new sellers",
          "Free to list — no monthly subscription fee",
          "Trusted brand name drives customer confidence",
          "Growing marketplace with less saturation"
        ]
      },
      {
        id: "w2",
        title: "The Lemonade Bloom Strategy",
        content: "Our proven system focuses on selling high-profit, everyday products that customers already buy. We source lightweight, low-cost items from local and online retailers, list them on Walmart, and fulfill orders efficiently to build consistent daily income.",
        checklist: [
          "Source everyday products under 7.5 oz",
          "Keep product cost under $4 per unit",
          "Target items with fewer than 7 active sellers",
          "Focus on high-turnover, repeat-purchase products",
          "Start with 5 products × 5 units to test the market",
          "Scale winners and add variations over time"
        ]
      },
      {
        id: "w3",
        title: "What You'll Learn in This Course",
        content: "This course walks you through every step of building and running a profitable Walmart seller store — from account setup to scaling with a team. Each module includes exact SOPs used by Lemonade Bloom.",
        checklist: [
          "Module 1: Account Signup & Requirements",
          "Module 2: Payment Setup & Payoneer",
          "Module 3: Store Configuration & Templates",
          "Module 4: Product Research & Listing",
          "Module 5: Order Fulfillment & Labels",
          "Module 6: Returns & Customer Service",
          "Module 7: Scaling & Team Building",
          "Module 8: Tools, Costs & Profitability"
        ]
      }
    ]
  },
  {
    id: "signup",
    number: 2,
    title: "Account Signup",
    subtitle: "Get Your Walmart Seller Account Approved",
    icon: "📝",
    color: "#D0804A",
    bgColor: "#FEE7DA",
    steps: [
      {
        id: "s1",
        title: "Step 1 — Get Your EIN (Free)",
        content: "An Employer Identification Number (EIN) is required to apply for a Walmart Seller account. You can get one for free directly from the IRS.",
        substeps: [
          "Visit irs.gov and navigate to the EIN application",
          "Choose 'Sole Proprietor' if you don't have an LLC",
          "Complete the online application (takes ~10 minutes)",
          "Save your EIN confirmation letter as a PDF",
          "Wait 7–14 business days for IRS records to sync before applying to Walmart"
        ],
        tip: "If you have an LLC, use your LLC's EIN and business information instead of personal details."
      },
      {
        id: "s2",
        title: "Step 2 — Create a Business Gmail",
        content: "Create a Gmail address that matches your business name. This will be your primary contact for your Walmart Seller account.",
        substeps: [
          "Create a Gmail that matches your business name (e.g., yourbrand@gmail.com)",
          "Use this email consistently across all business accounts",
          "Keep login credentials saved securely"
        ]
      },
      {
        id: "s3",
        title: "Step 3 — Gather Required Documents",
        content: "Before applying, make sure you have all required documents ready. Missing items will delay your approval.",
        checklist: [
          "EIN confirmation letter (from IRS.gov — FREE)",
          "LLC documents (if applicable — state-based filing)",
          "Business website URL ($50–$150 service available through Lemonade Bloom)",
          "Business phone number",
          "Business address (residential address is acceptable)",
          "Government-issued ID (front AND back)"
        ],
        important: "All information submitted must exactly match your EIN confirmation letter. Any discrepancy will cause rejection."
      },
      {
        id: "s4",
        title: "Step 4 — Apply at seller.walmart.com",
        content: "Once your EIN is recognized (7–14 days after applying), you can submit your Walmart Seller application.",
        substeps: [
          "Go to seller.walmart.com and click 'Request to Sell'",
          "Use the exact business name and address from your EIN letter",
          "Complete all sections: business info, contact, fulfillment details",
          "Upload all required documents",
          "Submit and wait for approval (up to 2 weeks)"
        ],
        tip: "Approval typically takes 1–2 weeks. You'll receive an email confirmation followed by a phone verification call from Walmart."
      },
      {
        id: "s5",
        title: "Step 5 — Post-Approval Setup",
        content: "Once approved, you'll receive an email confirmation and a phone verification call from Walmart. Complete these steps to activate your account.",
        substeps: [
          "Watch for approval email from Walmart",
          "Answer the phone verification call from Walmart",
          "Log in to Walmart Seller Center",
          "Complete your store profile and contact information",
          "Add customer service contact details"
        ]
      }
    ]
  },
  {
    id: "payment",
    number: 3,
    title: "Payment Setup",
    subtitle: "Connect Payoneer & Your Bank Account",
    icon: "💳",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    steps: [
      {
        id: "p1",
        title: "Understanding Walmart Payments",
        content: "Walmart pays sellers through Payoneer, a global payment platform. Your Walmart earnings are deposited into Payoneer, which then transfers to your bank account.",
        tip: "Payoneer setup does NOT affect your Walmart store setup. You can complete both simultaneously."
      },
      {
        id: "p2",
        title: "Sole Proprietor vs LLC — Bank Account Decision",
        content: "The type of bank account you need depends on your business structure. This is an important decision that affects how you receive payments.",
        checklist: [
          "Sole Proprietor → Can use your personal bank account",
          "LLC → Must use a dedicated business bank account",
          "Business bank accounts: Chase Business, Bank of America Business, or similar",
          "Keep business finances separate from personal for clean bookkeeping"
        ],
        important: "If you have an LLC, using a personal bank account instead of a business account can create legal and tax complications. Always use a business account with an LLC."
      },
      {
        id: "p3",
        title: "Setting Up Payoneer",
        content: "Follow these steps to connect Payoneer to your Walmart Seller account.",
        substeps: [
          "Go to payoneer.com and create an account",
          "Select 'Sole Proprietor' to link a personal bank account (or 'Company' for LLC)",
          "Complete identity verification with your ID",
          "Add your bank account details",
          "Log in to Walmart Seller Center → Settings → Payment",
          "Connect your Payoneer account to Walmart",
          "Verify the connection is active"
        ]
      },
      {
        id: "p4",
        title: "Payment Timeline",
        content: "Understanding when you get paid helps you manage cash flow as you grow your store.",
        checklist: [
          "Walmart pays on a bi-weekly schedule",
          "Funds are released after order delivery confirmation",
          "Payoneer transfers to your bank within 2–3 business days",
          "Keep a float of sourcing funds while waiting for payouts",
          "Use Seller Ledger to track expected payouts"
        ]
      }
    ]
  },
  {
    id: "store-setup",
    number: 4,
    title: "Store Setup",
    subtitle: "Configure Your Store for Success",
    icon: "⚙️",
    color: "#D0804A",
    bgColor: "#FEE7DA",
    steps: [
      {
        id: "ss1",
        title: "Step 1 — Set Operating Hours",
        content: "Your operating hours tell Walmart when you process orders. Setting correct hours prevents late shipment warnings.",
        substeps: [
          "In Seller Center, click the Gear Icon ⚙️",
          "Go to Seller Fulfillment",
          "Click the three dots (⋮) next to your fulfillment address",
          "Click Edit",
          "Scroll down to Operating Schedule",
          "Set Monday through Friday",
          "Set cutoff time to 11:00 AM",
          "Click Update to save"
        ],
        important: "Always set your cutoff time to 11:00 AM Monday–Friday. Orders placed after this time will be processed the next business day."
      },
      {
        id: "ss2",
        title: "Step 2 — Create Shipping Templates",
        content: "Shipping templates define how much customers pay for shipping and how long delivery takes. Proper setup is critical for profitability.",
        substeps: [
          "Click Gear Icon ⚙️ → Shipping Templates",
          "Click 'Create Shipping Template'",
          "Select 'Manual Shipping Settings'",
          "Click 'Edit Template Name' and name your template",
          "Click 'Edit Regions' to select delivery zones",
          "Uncheck high-shipping-cost states (limit to 5): FL, NY, GA, TX, SC, NC",
          "Add a separate shipping rule for unchecked states",
          "Set Transit Time to 5 days for long-distance zones",
          "Add price tiers: $1.99 → $3.99 → $5.99 → $6.99",
          "Set Handling Time to 4–5 days",
          "Click 'Save Template'"
        ],
        tip: "Create multiple templates for different product weight ranges. Name them clearly (e.g., 'Standard_Under4oz', 'Standard_4to8oz')."
      },
      {
        id: "ss3",
        title: "Step 3 — Add Custom Package Sizes",
        content: "Custom package presets save time when processing orders. Always prefix names with 'A_' so they appear at the top of the dropdown list.",
        substeps: [
          "Click Gear Icon ⚙️ → Ship with Walmart → Custom Packages",
          "Click 'Add Custom Package'",
          "Name your package starting with 'A_' (e.g., 'A_SmallBox_6x4x3')",
          "Enter accurate box dimensions (length × width × height in inches)",
          "Enter the box weight (empty weight)",
          "Save the package preset",
          "Repeat for all box sizes you use regularly"
        ],
        important: "ALWAYS prefix package names with 'A_' — this ensures your custom packages appear first in the selection dropdown when processing orders, saving significant time."
      },
      {
        id: "ss4",
        title: "Step 4 — Create Message Templates",
        content: "Pre-written message templates allow you to respond to customers quickly and professionally. Walmart requires responses within 48 hours.",
        substeps: [
          "Click Gear Icon ⚙️ → Message Templates",
          "Click 'Create Template'",
          "Create Template 1: 'Cancelled' — for cancelled orders with refund processed",
          "Create Template 2: 'Not Cancelled' — for orders already shipped",
          "Create Template 3: 'Delay' — for packages with shipping delays",
          "Save each template",
          "Check the envelope icon daily for new messages (red dot = unread)"
        ],
        tip: "Always respond within 48 hours. A red dot on the envelope icon in your dashboard means a customer message is waiting."
      },
      {
        id: "ss5",
        title: "Step 5 — Add Admin Users",
        content: "If you have a team member or VA helping manage your store, add them as an admin user.",
        substeps: [
          "Go to Settings → Users & Permissions",
          "Click 'Invite User'",
          "Enter their email address",
          "Assign appropriate permission level",
          "They'll receive an email invitation to join your account"
        ]
      },
      {
        id: "ss6",
        title: "Step 6 — Upload Lag Time via CSV",
        content: "Lag time gives you extra processing time before Walmart expects shipment. Setting it to 1 day is recommended.",
        substeps: [
          "Download the lag time CSV template from Seller Center",
          "Set lag time = 1 for all SKUs",
          "Upload the CSV file",
          "Verify the update was applied successfully"
        ],
        important: "Lag time of 1 day means Walmart gives you 1 extra day before counting a shipment as late. This is critical for maintaining good seller performance metrics."
      }
    ]
  },
  {
    id: "product-research",
    number: 5,
    title: "Product Research",
    subtitle: "Find Winning Products That Sell",
    icon: "🔍",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    steps: [
      {
        id: "pr1",
        title: "Winning Product Criteria",
        content: "Not all products are created equal. Use these criteria to identify products that will generate consistent, profitable sales on Walmart.",
        checklist: [
          "Weight: Under 7.5 oz (keeps shipping costs low)",
          "Cost: Under $4 per unit to source",
          "Competition: Fewer than 7 active sellers",
          "Demand: High turnover / repeat purchase item",
          "Availability: Sourceable locally or from Amazon Business",
          "Walmart listing: NOT sold directly by Walmart",
          "Buy box: Opportunity to win with competitive pricing"
        ],
        important: "If Walmart sells the item directly, you will almost never win the buy box. Always check if Walmart is a seller before listing."
      },
      {
        id: "pr2",
        title: "Where to Source Products",
        content: "Source products from these retailers to find items at prices that allow profitable resale on Walmart.",
        checklist: [
          "Amazon Business (Prime pricing available)",
          "Walmart Business Plus (member pricing)",
          "Costco (bulk pricing for high-volume items)",
          "Sam's Club (membership pricing)",
          "Dollar Tree (low-cost everyday items)",
          "Local grocery and dollar stores",
          "Instacart (emergency same-day restock)"
        ]
      },
      {
        id: "pr3",
        title: "Pricing Strategy & Buy Box",
        content: "The buy box is the default seller when a customer clicks 'Add to Cart.' Winning it consistently drives the majority of sales.",
        substeps: [
          "Research the current buy box price on Walmart",
          "Calculate your total cost: product + shipping + packaging + Walmart fees",
          "Price to win the buy box while maintaining at least $2–3 profit per unit",
          "Walmart fees are typically 8–15% of the selling price",
          "Use formula: Selling Price – Product Cost – Shipping – Packaging = Profit",
          "Start at the lowest competitive price, then test raising it",
          "Monitor buy box status weekly and adjust pricing as needed"
        ],
        tip: "The buy box is won by a combination of price, seller performance, and fulfillment speed. Maintaining good metrics is just as important as price."
      },
      {
        id: "pr4",
        title: "Product Launch Strategy",
        content: "Don't launch all products at once. Use this proven launch sequence to test before committing inventory.",
        substeps: [
          "Start with 1 unit to test the listing",
          "Check if you're winning the buy box",
          "If not winning: remove inventory, adjust price or add lag time = 1",
          "If winning: add 5 units and monitor",
          "Launch 5 products total with 5 units each",
          "After 2–4 weeks, identify winners",
          "Scale winners: increase inventory, add variations",
          "Drop underperformers and replace with new test products"
        ]
      },
      {
        id: "pr5",
        title: "Tracking Products in Your Spreadsheet",
        content: "Track every product in a spreadsheet to monitor profitability and make data-driven decisions.",
        checklist: [
          "Source (where you buy it)",
          "Product cost per unit",
          "Shipping cost per order",
          "Walmart selling price",
          "Walmart fee (% of selling price)",
          "Packaging cost",
          "Net profit per unit",
          "Link to Walmart listing",
          "Buy box status (Yes/No)"
        ]
      }
    ]
  },
  {
    id: "product-upload",
    number: 6,
    title: "Product Upload",
    subtitle: "List Your Products on Walmart",
    icon: "📦",
    color: "#D0804A",
    bgColor: "#FEE7DA",
    steps: [
      {
        id: "pu1",
        title: "Step 1 — Find the Product ID",
        content: "Walmart uses Product IDs (Item IDs) to identify listings. You'll find the product ID in the Walmart.com URL when viewing the product page.",
        substeps: [
          "Go to Walmart.com and find the product you want to list",
          "Look at the URL — the product ID is the number after '/ip/' in the URL",
          "Example: walmart.com/ip/Product-Name/123456789 → ID is 123456789",
          "Copy and save the product ID",
          "If adding multiple products, separate IDs with commas"
        ],
        tip: "You can add multiple product IDs at once by separating them with commas in the search box."
      },
      {
        id: "pu2",
        title: "Step 2 — Add Items via Express Upload",
        content: "Express Upload (also called Add Items) lets you add existing Walmart catalog items to your store quickly.",
        substeps: [
          "Log in to Walmart Seller Center",
          "Go to Catalog → Add Items (upper right corner)",
          "Paste the Product ID(s) into the search box",
          "Press Enter — products will appear below",
          "Click the '+Add' button next to each product",
          "Click 'Next' to proceed"
        ]
      },
      {
        id: "pu3",
        title: "Step 3 — Set SKU and Price",
        content: "Each product needs a unique SKU (Stock Keeping Unit) and a competitive price. Follow the SKU format exactly.",
        substeps: [
          "Enter your SKU using the required format (see below)",
          "Set your selling price (competitive with buy box)",
          "Under Shipping Weight, enter: 1 (use 1 as placeholder)",
          "Review all fields for accuracy",
          "Click 'Submit'"
        ],
        important: "SKU FORMAT (CRITICAL): BRAND_PRODUCTNAME_FLAVOR_TYPE_OZ\n\nExample: KRAFT_MACCHEESE_ORIGINAL_BOX_7.25OZ\n\nAlways use underscores, ALL CAPS, and include the weight at the end. This format is required for proper catalog management."
      },
      {
        id: "pu4",
        title: "Step 4 — Monitor Activity Feed",
        content: "After submitting, check the Activity Feed to confirm your products were added successfully.",
        substeps: [
          "After clicking Submit, a confirmation screen will appear",
          "Click 'Go to Activity Feed'",
          "Wait for processing (usually a few minutes)",
          "Status should show 'Published' when live",
          "If errors appear, review and correct the flagged fields",
          "Do NOT add inventory yet — first verify the listing looks correct"
        ]
      },
      {
        id: "pu5",
        title: "Step 5 — Optimize Your Listing",
        content: "A well-optimized listing ranks higher in search results and converts more browsers into buyers.",
        checklist: [
          "Clean, accurate product title with brand name",
          "Correct brand name (matches manufacturer)",
          "Keyword-rich bullet points describing benefits",
          "1–3 high-quality product images",
          "Accurate product description",
          "Correct category and attributes",
          "Competitive price set to win buy box"
        ]
      }
    ]
  },
  {
    id: "fulfillment",
    number: 7,
    title: "Order Fulfillment & Labels",
    subtitle: "Ship Orders Fast & Profitably",
    icon: "🚚",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    hasVideo: true,
    videoTitle: "Shipping & Fulfillment Walkthrough",
    steps: [
      {
        id: "f1",
        title: "Golden Rule: Print Labels on Ship Day Only",
        content: "Never pre-print shipping labels. Labels must be purchased and printed on the same day you ship. Pre-printing creates carrier scan issues and can result in late shipment flags.",
        important: "NEVER pre-print labels. Only buy and print labels on the day you are physically dropping off or scheduling pickup for the packages."
      },
      {
        id: "f2",
        title: "Step 1 — Go to Orders Tab",
        content: "Start your daily fulfillment workflow by reviewing new orders in Seller Center.",
        substeps: [
          "Log in to Walmart Seller Center",
          "Click the 'Orders' tab",
          "Review all orders that need to be processed today",
          "Select orders by ticking the checkbox next to each order",
          "Click 'Process Order'"
        ]
      },
      {
        id: "f3",
        title: "Step 2 — Verify Order Details (Critical Checklist)",
        content: "Before buying a label, verify every field carefully. Errors here cost money and hurt your seller metrics.",
        checklist: [
          "✅ Tick the order checkbox to mark it for processing",
          "✅ Hazmat: Always select NO",
          "✅ Package Size: Select your custom package (use ChatGPT to verify box fit if unsure)",
          "✅ Weight: Enter the accurate total weight (product + packaging)",
          "✅ Carrier: Select the CHEAPEST option shown at the top",
          "✅ Shipping Method: Always select the FIRST option",
          "✅ Add-ons: Select ONLY 'Included' options — never add paid add-ons"
        ],
        important: "Always choose the cheapest carrier. Your target is to keep average label cost under $5 per order."
      },
      {
        id: "f4",
        title: "Step 3 — Process Orders in EXACT Order",
        content: "The following steps MUST be completed in this exact sequence, especially when processing multiple orders. Skipping steps or doing them out of order causes errors.",
        substeps: [
          "1️⃣ Click 'Buy Shipping' — purchase the label",
          "2️⃣ Click 'Print Label' — print immediately after purchase",
          "3️⃣ Click 'View Packing Slips' — download and print packing slips",
          "4️⃣ Click 'Mark as Shipped' — update order status in Walmart",
          "5️⃣ Click 'Save Shipping Presets' — save settings for next time",
          "6️⃣ Click 'Return to Orders' — go back to process next order"
        ],
        important: "This sequence is MANDATORY. Do not skip steps. Do not change the order. This is especially critical when processing multiple orders in bulk."
      },
      {
        id: "f5",
        title: "Step 4 — Carrier Pickup Schedules",
        content: "Know your carrier pickup windows to ensure packages are dropped off or picked up on time.",
        checklist: [
          "USPS: Monday–Saturday, 8AM–4PM",
          "FedEx Express: Monday–Saturday, 8AM–4PM",
          "FedEx Ground: Monday–Friday, 8AM–6PM",
          "UPS Ground: Monday–Friday, 8AM–5PM",
          "No scan sheet required for drop-offs",
          "Schedule USPS pickup via usps.com for large volumes"
        ]
      },
      {
        id: "f6",
        title: "Step 5 — Track Label Costs",
        content: "Monitor your shipping costs to maintain profitability. High label costs eat into your margins.",
        substeps: [
          "After each shipping session, note total shipping spend",
          "Divide total shipping cost by number of orders processed",
          "Target: keep average under $5 per order",
          "If costs are high, review package sizes — smaller boxes = lower rates",
          "Use USPS for most packages under 1 lb (usually cheapest)",
          "Use UPS or FedEx for heavier packages or longer distances"
        ],
        tip: "Use a Bluetooth thermal printer for fast, accurate label printing. Available on Amazon for under $59. Free UPS thermal labels or $14 for 500 from Amazon."
      }
    ]
  },
  {
    id: "returns",
    number: 8,
    title: "Returns & Customer Service",
    subtitle: "Handle Issues Like a Pro",
    icon: "🔄",
    color: "#D0804A",
    bgColor: "#FEE7DA",
    steps: [
      {
        id: "r1",
        title: "Processing Refunds & Returns",
        content: "When a customer requests a refund or return, follow this exact process. Using 'Adjust' instead of 'Refund' ensures the return is properly initiated in Walmart's system.",
        substeps: [
          "Log in to Walmart Seller Center",
          "Navigate to Orders → Shipped",
          "Find the specific order by PO number",
          "Click on the order to open it",
          "Select 'Adjust' (NOT 'Refund') — even for full refunds",
          "Fill in the Adjust Item form (see fields below)",
          "Click 'Adjust $$$' to initiate the return"
        ],
        important: "Always use 'Adjust' even when refunding the full amount. This ensures the return is properly initiated in Walmart's system. Using 'Refund' alone may not trigger the return process correctly."
      },
      {
        id: "r2",
        title: "Adjust Item Form — Required Fields",
        content: "When the Adjust Item popup appears, fill in all required fields accurately.",
        checklist: [
          "Quantity to Adjust: Enter the number of items being returned",
          "Type of Adjustment: Select 'Entire' for full refund, 'Custom' for partial",
          "Adjustment Amount: Auto-filled when 'Entire' is selected",
          "Refund Category: Select the most appropriate category",
          "Reason: Select the reason for the return/refund",
          "Comments: Optional — add any relevant notes"
        ]
      },
      {
        id: "r3",
        title: "Customer Message Templates",
        content: "Use these pre-written templates to respond to customer messages quickly and professionally. Always respond within 48 hours.",
        substeps: [
          "Template 1 — CANCELLED: Use when order was cancelled and refund processed",
          "Template 2 — NOT CANCELLED: Use when order already shipped and cannot be cancelled",
          "Template 3 — DELAY: Use when package is delayed in transit"
        ],
        tip: "Check the envelope icon in your Seller Center dashboard daily. A red dot means you have unread customer messages that need a response within 48 hours."
      },
      {
        id: "r4",
        title: "Cancelled Order Template",
        content: "Use this template when an order has been cancelled and the refund has been processed.",
        substeps: [
          "Subject: Order Cancellation Confirmed",
          "Hi [Customer First Name],",
          "Thank you for your message. We're reaching out to confirm that your order has been successfully cancelled and your refund has already been processed. You should see the refund reflect in your account within 3–5 business days depending on your bank.",
          "If you have any further questions or need assistance with anything else, we're happy to help!",
          "Best regards, [Your Store Name]"
        ]
      },
      {
        id: "r5",
        title: "Not Cancelled Template",
        content: "Use this template when the order has already shipped and cannot be cancelled.",
        substeps: [
          "Hi [Customer First Name],",
          "Thank you for reaching out. We understand you'd like to cancel your order; however, it has already shipped and is currently in transit. Because it is past the shipping point, we are unable to process a cancellation or refund at this time.",
          "Once the item is delivered, you may initiate a return through Walmart's return process if eligible. We're here if you need help with that.",
          "Thank you for understanding, [Your Store Name]"
        ]
      },
      {
        id: "r6",
        title: "Delay Template",
        content: "Use this template when a customer is asking about a delayed package.",
        substeps: [
          "Hi [Customer First Name],",
          "Thank you for your message. We're sorry to hear there's been a delay with your order. We've opened an investigation with USPS to locate your package and will follow up as soon as we receive an update.",
          "Please allow us 24–48 hours to check in with the carrier. We appreciate your patience and will stay in touch throughout the process.",
          "Warm regards, [Your Store Name]"
        ]
      }
    ]
  },
  {
    id: "scaling",
    number: 9,
    title: "Scaling & Team Building",
    subtitle: "Grow Your Store to Full Operations",
    icon: "📈",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    steps: [
      {
        id: "sc1",
        title: "Phase 1 — Validate & Scale Products",
        content: "Before hiring or expanding, make sure your product strategy is working. Scale what's proven, not what's hoped.",
        substeps: [
          "Identify your top 3–5 performing products (consistent buy box wins)",
          "Increase inventory on winners: 10 → 25 → 50+ units",
          "Add product variations (size, flavor, quantity packs)",
          "Drop products that haven't won the buy box in 30 days",
          "Replace dropped products with new test items",
          "Target: 20+ active SKUs before hiring help"
        ]
      },
      {
        id: "sc2",
        title: "Phase 2 — Move to Warehouse (100+ orders/day)",
        content: "When you're consistently processing 100+ orders per day, it's time to consider a warehouse space.",
        checklist: [
          "Look for 500 sq ft minimum, temperature-controlled space",
          "Ground floor access for easy loading/unloading",
          "Options: Saltbox, Shift, or local shared warehouse",
          "Shelves: ~$50",
          "35 storage bins: ~$40",
          "6ft folding table: ~$35",
          "Table covers: ~$15",
          "Chair: ~$35"
        ]
      },
      {
        id: "sc3",
        title: "Phase 3 — Build Your Team",
        content: "Hiring the right people at the right time allows you to step into a CEO role and focus on growth strategy.",
        checklist: [
          "Night Shipper: 7PM–11PM, $1,500/month (handles evening order processing)",
          "Mid Shipper: 10AM–2PM, $1,500/month (handles daytime orders)",
          "Admin VA: $300–$600/month via OnlineJobs.ph (handles customer service, listings)",
          "Use DocuSign for employment agreements",
          "Use Gusto for payroll processing",
          "Use Slack for team communication"
        ]
      },
      {
        id: "sc4",
        title: "Phase 4 — CEO Mode",
        content: "Once your team is running operations, your role shifts to strategic leadership.",
        substeps: [
          "Approve new products (final decision on what to test)",
          "Review weekly profit reports",
          "Set monthly revenue and growth targets",
          "Manage team performance and schedules",
          "Explore new sourcing channels and product categories",
          "Lead long-term business strategy"
        ]
      }
    ]
  },
  {
    id: "tools",
    number: 10,
    title: "Tools & Profitability",
    subtitle: "Track Costs & Stay Profitable",
    icon: "🧰",
    color: "#D0804A",
    bgColor: "#FEE7DA",
    steps: [
      {
        id: "t1",
        title: "Profit Formula",
        content: "Know your numbers at all times. This formula gives you your true profit per order.",
        substeps: [
          "Selling Price",
          "– Product Cost",
          "– Shipping Cost",
          "– Packaging Cost",
          "– Walmart Fee (8–15%)",
          "= Net Profit Per Order",
          "Target: minimum $2–3 profit per unit"
        ],
        important: "Always calculate profit BEFORE listing a product. If the math doesn't work at the current buy box price, don't list it."
      },
      {
        id: "t2",
        title: "Affordable Supplies",
        content: "Keep your packaging costs low by sourcing supplies strategically.",
        checklist: [
          "Tape: Walmart — ~$2/roll",
          "Boxes (small): Walmart — $0.63–$1.08 each",
          "Bubble Mailers: Amazon — $0.10–$0.50 each",
          "Poly Bags: Amazon — under $0.10 each",
          "Thermal Printer: Amazon — under $59",
          "Thermal Labels (UPS): FREE",
          "Thermal Labels (generic 500-pack): ~$14 on Amazon"
        ]
      },
      {
        id: "t3",
        title: "Essential Tools",
        content: "These tools help you stay organized, track profits, and scale efficiently.",
        checklist: [
          "Seller Ledger ($10–$50/month) — tracks payouts, fees, and expenses",
          "Google Sheets / Excel — manual product tracking spreadsheet",
          "Instacart — emergency same-day product restock",
          "Amazon Business Prime — bulk sourcing with business pricing",
          "Walmart Business Plus — member pricing on sourcing",
          "Costco / Sam's Club — bulk pricing for high-volume products"
        ]
      },
      {
        id: "t4",
        title: "Sourcing Memberships",
        content: "Invest in memberships that give you access to lower prices. The savings quickly outweigh the membership cost.",
        checklist: [
          "Amazon Business Prime: Access to business-only pricing and bulk discounts",
          "Walmart Business Plus: Member pricing on Walmart.com purchases",
          "Costco: Excellent for bulk household and food items",
          "Sam's Club: Similar to Costco with different product selection",
          "Dollar Tree: Great for low-cost everyday items under $1.25"
        ]
      }
    ]
  },
  {
    id: "services",
    number: 11,
    title: "Lemonade Bloom Services",
    subtitle: "Let Us Help You Grow Faster",
    icon: "💼",
    color: "#D0804A",
    bgColor: "#FEE9CE",
    steps: [
      {
        id: "sv1",
        title: "Product Research Service",
        content: "Let our team find your next winning products. We research, analyze, and deliver a list of 5 vetted products ready to list.",
        substeps: [
          "5 researched products: $100",
          "Each product verified against our winning criteria",
          "Includes: product name, source, cost, Walmart price, estimated profit",
          "Delivered within 48 hours",
          "Perfect for sellers who want to skip the research phase"
        ]
      },
      {
        id: "sv2",
        title: "Business Website Service",
        content: "A professional business website is required for your Walmart Seller application. We build clean, professional sites that meet Walmart's requirements.",
        substeps: [
          "Basic website: $50",
          "Professional website with custom branding: $150",
          "Includes: domain setup, professional design, contact page",
          "Delivered within 3–5 business days",
          "Meets all Walmart Seller application requirements"
        ]
      },
      {
        id: "sv3",
        title: "Account Management",
        content: "Want us to run your Walmart store for you? Our account management service handles everything from product uploads to order fulfillment coordination.",
        substeps: [
          "Full store management available",
          "Product research and listing",
          "Order processing oversight",
          "Customer service handling",
          "Performance monitoring and optimization",
          "Contact us for custom pricing based on store size"
        ]
      }
    ]
  }
];

export const getModuleById = (id: string) => modules.find(m => m.id === id);
export const getTotalSteps = () => modules.reduce((acc, m) => acc + m.steps.length, 0);
