

const refundPolicy = [
    {
        id: 1,
        title: "Scope & Applicability",
        content: `This Refund Policy applies to all fees and charges levied by Mpluse Fintech Private Limited for its API-based Banking-as-a-Service offerings—whether for transaction processing (IMPS, UPI, BBPS payouts or collections), wallet management, subscription plans, or related service fees—when initiated through our primary portal (dashboard.mpluse.in), developer portal (developer.mpluse.in), sandbox environment, or any officially published API endpoints. It governs requests for refunds on INR-denominated charges incurred on or after the effective date of this Policy and is available to all Users holding an active Mpluse account in good standing.`,
    },
    {
        id: 2,
        title: " This Policy does not cover:",
        content: [
            {
                id: "1",
                content: ` Taxes, duties or levies imposed by governmental authorities`
            },
            {
                id: "2",
                content: ` Fees collected and retained by third-party banking or payment partners`
            },
            {
                id: "3",
                content: ` Non-refundable charges expressly identified as such (e.g., setup, customization or support fees)`
            },
            {
                id: "4",
                content: ` Losses arising from customer-side errors, misconfigurations, or force majeure events`
            }
        ],
        description: " By submitting a refund request, you acknowledge that this Policy—and only this Policy—governs your right to seek reimbursement from Mpluse. Continuous use of our Services after any updates to this Policy constitutes acceptance of its revised scope and terms."
    },
    {
        id: 3,
        title: "Eligibility Criteria",
        content: " Refunds under this policy are available only when a charge or transaction error can be attributed solely to Mpluse’s systems or processes, and must be requested within thirty days of the original transaction. You may seek reimbursement if our API or platform malfunctioned— resulting in duplicate billing, failed or incomplete settlement—or if funds were debited without your authorization due to a verified case of fraud. Similarly, if we fail to meet our 99.9% uptime commitment and you report the unplanned outage in accordance with our maintenance notification procedures, you may be eligible for a prorated refund. All requests must include relevant transaction identifiers and supporting evidence, and any claim submitted after the thirty-day window or arising from customer-side errors, third-party network delays, or fees expressly deemed non-refundable will not be honored. Continuous adherence to these criteria ensures that genuine system-side mistakes are promptly corrected while safeguarding Mpluse’s services from improper or abusive claims."
    },
    {
        id: 4,
        title: "Non-Refundable Fees",
        content: "All fees charged by Mpluse for one-time resource commitments or third-party pass-through costs are non-refundable. This includes, but is not limited to, account setup and activation fees; any charges for custom integration or professional services; and monthly or annual subscription fees—even if the service is only partially used. Additionally, any amounts paid to third-party payment gateways, banking partners, or network providers are final once remitted, as are any administrative or support fees explicitly designated as non-refundable at the time of invoicing. These charges represent irreversible investments by Mpluse in infrastructure provisioning, dedicated engineering and onboarding resources, licensing and certification expenses, and compliance-related activities. Because these costs are incurred upfront and cannot be recouped, once any non-refundable fee is invoiced and paid, it remains with Mpluse under all circumstances."
    },
    {
        id: 5,
        title: "Request Submission",
        content: "To initiate a refund, please submit your request by emailing refunds@mpluse.in or via the “Refund Request” form in your developer portal dashboard. Your request must include your Mpluse Account ID, the original transaction reference number, date and amount charged, a concise explanation of the error or issue, and any supporting documentation (for example, API logs, bank statements, or fraud reports). All refund requests must be received within 30 days of the original transaction date to be considered. Once we receive your request, we will acknowledge it within two business days and may contact you for additional information if needed. Our goal is to complete the verification process and provide a final decision within seven business days of acknowledgment. Continuous updates on the status of your request will be provided via email until the matter is fully resolved."
    },
    {
        id: 6,
        title: "Timeframe for Requests",
        content: " All refund requests must be submitted within 30 days of the original transaction date; requests received after this window will not be considered. Upon receipt, Mpluse will:",
        point: [
            {
                id: "1",
                content: "Acknowledge your request within 2 business days, confirming we have all necessary information."
            },
            {
                id: "2",
                content: " Review and verify the claim—examining logs, documents, and SLA reports—within 7 business days of acknowledgment."
            },
            {
                id: "3",
                content: "Communicate our decision in writing by the end of that 7-day review period."
            }
        ],
        description: "If we require additional information to complete our review, we will notify you within the initial acknowledgment period; in that case, the 7-day review clock pauses until you provide the requested materials. Once a refund is approved, Mpluse will process the reimbursement via your original payment method within 5 business days. Continuous updates on your request’s status will be sent by email at each key milestone until closure."
    },
    {
        id: 7,
        title: "Review & Approval",
        content: "Once we receive your refund request and confirm that all required details and supporting documents are in order, our billing and operations teams will initiate a comprehensive assessment. We verify that the transaction in question was affected by a system error, unauthorized debit, or SLA breach on Mpluse’s part, and that it meets the established eligibility criteria. We then calculate the appropriate refund amount—factoring in any prorated credits for unplanned downtime or partial usage—while ensuring that non-refundable fees are excluded from reimbursement. Within seven business days of acknowledging your request, we will provide you with a written decision. If approved, you’ll receive confirmation of the exact refund sum, the payment method to be used, and an estimated timeframe for disbursement. Should we be unable to honor the request, we will explain which policy provisions led to the decision. In cases where additional information is needed, we will pause our review and let you know what’s required; the evaluation timeline will resume as soon as we receive the outstanding details. Throughout this process, all communications are sent to the email address linked to your Mpluse account, ensuring transparency and a clear record of each step."
    },
    {
        id: 8,
        title: "Limitation of Liability",
        content: " To the fullest extent permitted by applicable law, Mpluse Fintech Private Limited’s total aggregate liability for any claim arising out of or related to these Terms or your use of the Services shall not exceed the total fees you have paid to Mpluse in the twelve (12) months immediately preceding the event giving rise to the claim. In no event shall Mpluse be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to loss of profits, revenue, data or business opportunity, even if Mpluse has been advised of the possibility of such damages. Nothing in this clause shall limit liability for death or personal injury resulting from Mpluse’s gross negligence or willful misconduct, or any liability that cannot be excluded or limited under applicable law."
    },
    {
        id: 9,
        title: "Dispute Resolution",
        content: " Any dispute, claim or controversy arising out of or relating to these Terms or your use of Mpluse’s Services shall first be addressed by good-faith discussions between you and Mpluse within thirty (30) days of written notice. If the parties cannot resolve the matter amicably within that period, the dispute shall be finally settled by binding arbitration under the Arbitration and Conciliation Act, 1996. The arbitration shall take place in Lucknow, India, before a sole arbitrator mutually appointed by the parties (or, failing agreement, by the Lucknow Centre for Arbitration). The proceedings shall be conducted in English, and the arbitrator’s award shall be final, binding on both parties, and enforceable in any court of competent jurisdiction. Notwithstanding the foregoing, either party may seek interim injunctive relief in the courts of Lucknow to protect its intellectual property or confidential information."
    },
    {
        id: 10,
        title: "Policy Modification",
        content: " Mpluse reserves the right to amend or update this Refund Policy at any time. Where we make material changes—such as altering eligibility criteria, timeframes, or fee designations—we will post the revised policy on our website and send a notice to all active account holders at least 30 days prior to the changes taking effect. That notice will specify the nature of the updates and their effective date. Your continued use of Mpluse’s services after the effective date of the revised policy will constitute your acceptance of those changes. Minor, non-substantive edits (such as typographical corrections or clarifications) may be implemented immediately without advance notice. Continuous review of this policy is your responsibility; please check for updates regularly to ensure you remain informed of its current terms."
    },
    {
        id: 11,
        title: "Limitation of Liability",
        content: `For any questions or assistance regarding your refund request, please contact our Refunds
            Team:\n
            Email: refunds@mpluse.in\n
            Phone: +91 522 123 4567 (Monday–Friday, 9:00 AM–6:00 PM IST)\n
            Address: Plot No. 12, Sector 9, Financial District, Hazratganj, Lucknow – 226001, Uttar Pradesh,
            India\n
            We aim to acknowledge all refund inquiries within two business days and provide regular status
            updates until your request is resolved`
    }
];

export default refundPolicy