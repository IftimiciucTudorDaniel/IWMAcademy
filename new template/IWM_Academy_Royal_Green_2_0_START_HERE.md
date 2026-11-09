# IWM ACADEMY — ROYAL GREEN 2.0
## Website concept and implementation handoff
**Date:** 09 November 2026

### Open these files first
1. `IWM_Academy_Royal_Green_2_0_Interactive_Website.html` — a **standalone, responsive, interactive prototype**. Open in Chrome, Safari or Edge. No external assets or package installation needed.
2. `IWM_Academy_Royal_Green_2_0_Engineer_Blueprint.pdf` — an 11-page implementation specification, including screens, trade fields, subscriptions, permissions, risk boundaries, and QA.
3. Preview images — compare homepage, Swing Trade example, five desks, checkout and mobile layout.

### Scope of the design
The site includes five desk choices, not four:
- **Large-Cap & AI Desk** — maps to the 200K Group.
- **Swing Trading Desk** — dedicated Swing Trade option.
- **Small Cap Desk** — maps to the Small Cap Group.
- **Earnings Desk** — maps to the Earnings Group.
- **Tough Market Desk** — maps to the Tough Market Group.

An **All Desks Bundle** selector is included as a conditional product. Enable it only if it is in the approved live catalogue.

### The trade example is a central sales demonstration
A user can click each of the five desk tabs and instantly see:
- Long **BUY entry** or short **SELL-SHORT entry**.
- Exact **STOP LOSS**.
- **TARGET 1**, **TARGET 2**.
- Example **SELL exit** or **BUY-TO-COVER exit**.
- Synthetic line chart with labeled levels.
- Four-stage lifecycle: plan → entry → update → exit.

**All sample trades and charts are purely synthetic.** They are not live prices, actual member results, executed trades, or investment recommendations. In the real portal, plans and any later updates need author attribution and timestamps, with losing, invalidated and unfilled plans preserved.

### Visitor-to-member flow
Homepage → Trade example → Select desk → Select term (1, 6 or 12 months) → Email → Review verified price / renewal terms → Eligible hosted payment checkout → Provider-confirmed activation → Member dashboard → Optional Discord connection.

The current HTML is a **demo**. Its “checkout” and dashboard are previews, not actual billing or accounts.

### Deployment blockers and required owner inputs
Do not deploy the prototype as a payment-enabled production site. Production engineering must include:
- Official approved logo file and correct legal academy name.
- Real plan prices, tax/currency settings, billing recurrence and renewal date from a verified server-side product catalogue. **No amounts were invented in this concept.**
- Eligible secure payment provider, consent tracking, payment webhooks, idempotency and reconciled subscription status.
- Authentication, member database, app security, privacy policies, support contact and account recovery.
- Desk-specific server-enforced entitlements, trade record administration and full audited updates.
- Optional Discord OAuth with role assignment and expiry reconciliation.
- Compliance-reviewed research disclosures and subscription policies.
- Desktop, 360px/390px mobile and keyboard/accessibility testing.

### QA already performed on the prototype
- No JavaScript exceptions on desktop or mobile in browser smoke checks.
- Tested Swing Trade tab, short-side Earnings tab, five desk selection, 6-month change, email input, checkout preview and member dashboard.
- Tested 1440px desktop and 390px mobile without horizontal overflow.
- Rendered and visually checked all 11 PDF pages.

### Website review scope
The publicly accessible website content retrieved from `https://iwm.academy` listed 200K, Small Cap, Earnings and Tough Market. Swing was not discoverable in that public homepage extract, but is included in this redesign on the owner's instructions. Before go-live, reconcile all live offerings with the approved back-office catalogue.
