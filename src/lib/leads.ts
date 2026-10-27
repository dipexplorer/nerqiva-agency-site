import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  business?: string;
  goal: string;
  timeline: string;
  budget: string;
  problem: string;
  situation?: string;
  dpdpConsent: boolean;
  submittedAt: string;
  ip?: string;
}

/**
 * Persists lead to local JSON file store (server-side).
 * Supports both local dev and serverless runtime environments (e.g. Vercel /tmp).
 */
export async function saveLead(lead: LeadSubmission): Promise<void> {
  try {
    const isVercel = Boolean(process.env.VERCEL);
    const dataDir = isVercel ? path.join("/tmp", "nerqiva-data") : path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let existingLeads: LeadSubmission[] = [];
    if (fs.existsSync(leadsFile)) {
      try {
        const fileContent = fs.readFileSync(leadsFile, "utf-8");
        existingLeads = JSON.parse(fileContent);
        if (!Array.isArray(existingLeads)) {
          existingLeads = [];
        }
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.unshift(lead);
    fs.writeFileSync(leadsFile, JSON.stringify(existingLeads, null, 2), "utf-8");
  } catch (error) {
    console.warn("Non-fatal note: could not persist lead to local disk:", error);
  }
}

/**
 * Configures Gmail SMTP transporter using environment variables.
 */
function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  const cleanPass = pass.replace(/\s+/g, "");

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: cleanPass,
    },
  });
}

/**
 * Dispatches a clean, executive editorial email notification to the founder.
 * Follows strict anti-slop guidelines: zero emojis, crisp light paper palette,
 * no neon text, and an authoritative executive design.
 */
export async function notifyFounderOfLead(lead: LeadSubmission): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("Gmail transporter not configured; lead safely recorded in data/leads.json.");
    return false;
  }

  const recipient = process.env.ADMIN_NOTIFICATION_EMAIL || "ndipjyotidas22@gmail.com";
  const ccRecipient = process.env.AGENCY_NOTIFICATION_EMAIL || "nerqiva.studio@gmail.com";
  const senderAddress = process.env.GMAIL_USER || "nerqiva.studio@gmail.com";

  const cleanPhone = lead.phone ? lead.phone.replace(/[^0-9]/g, "") : "";
  const waReplyUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `Hi ${lead.name}, this is Dipjyoti from NERQIVA Studio. I received your project brief regarding "${lead.business || lead.goal}". When is a good time for a 15-minute technical review?`
      )}`
    : `https://wa.me/918724932985`;

  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Brief: ${lead.name}</title>
</head>
<body style="margin: 0; padding: 36px 16px; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #18181b;">
  
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);">
    
    <!-- Top Minimalist Slate Accent Line -->
    <tr>
      <td height="3" style="background-color: #18181b; font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>

    <!-- Header Block -->
    <tr>
      <td style="padding: 32px 36px 24px 36px; border-bottom: 1px solid #f4f4f5;">
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #71717a; font-weight: 600; margin-bottom: 8px;">
          NERQIVA STUDIO · PROJECT INTAKE
        </div>
        <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: 700; color: #09090b; letter-spacing: -0.3px; line-height: 1.25;">
          ${lead.name}
        </h1>
        <div style="margin-top: 6px; font-size: 13px; color: #52525b;">
          ${lead.business ? `<strong style="color: #18181b;">${lead.business}</strong> · ` : ""}Ref: <span style="font-family: monospace; color: #71717a; font-weight: 600;">${lead.id}</span>
        </div>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 28px 36px 36px 36px;">
        
        <!-- Key Metadata Grid -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
          <tr>
            <td width="48%" valign="top" style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 14px 16px;">
              <div style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 4px;">Service Scope</div>
              <div style="font-size: 13px; font-weight: 600; color: #09090b; line-height: 1.4;">${lead.goal}</div>
            </td>
            <td width="4%">&nbsp;</td>
            <td width="48%" valign="top" style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 14px 16px;">
              <div style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 4px;">Budget Range</div>
              <div style="font-size: 13px; font-weight: 600; color: #09090b; line-height: 1.4;">${lead.budget}</div>
            </td>
          </tr>
          <tr><td height="12" colspan="3"></td></tr>
          <tr>
            <td width="48%" valign="top" style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 14px 16px;">
              <div style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 4px;">Timeline SLA</div>
              <div style="font-size: 13px; font-weight: 600; color: #09090b; line-height: 1.4;">${lead.timeline}</div>
            </td>
            <td width="4%">&nbsp;</td>
            <td width="48%" valign="top" style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 14px 16px;">
              <div style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 4px;">Direct Phone / WhatsApp</div>
              <div style="font-size: 13px; font-weight: 600; color: #09090b; line-height: 1.4;">
                <a href="tel:${lead.phone}" style="color: #09090b; text-decoration: none; font-family: monospace;">${lead.phone || "Not provided"}</a>
              </div>
            </td>
          </tr>
        </table>

        <!-- Contact Email Details -->
        <div style="margin-bottom: 24px; background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #52525b;">
          <span style="font-weight: 600; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; color: #71717a; display: inline-block; width: 60px;">Email:</span>
          <a href="mailto:${lead.email}" style="color: #09090b; font-weight: 500; text-decoration: underline;">${lead.email}</a>
        </div>

        <!-- Problem / Operational Brief -->
        <div style="margin-bottom: 28px;">
          <div style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 8px;">
            Project Brief &amp; Operational Goal
          </div>
          <div style="background-color: #fafafa; border: 1px solid #f4f4f5; border-radius: 8px; padding: 16px 18px; font-size: 13px; color: #27272a; line-height: 1.65; white-space: pre-wrap;">${lead.problem}</div>
          ${
            lead.situation
              ? `
          <div style="margin-top: 8px; font-size: 12px; color: #71717a; padding-left: 2px;">
            <strong style="color: #52525b;">Current Stack:</strong> ${lead.situation}
          </div>`
              : ""
          }
        </div>

        <!-- Executive Action Button -->
        <div style="text-align: center; padding-top: 8px;">
          <a href="${waReplyUrl}" style="display: inline-block; background-color: #09090b; color: #ffffff; font-weight: 600; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 13px 28px; border-radius: 8px; text-decoration: none; letter-spacing: 0.3px;">
            Reply to Client on WhatsApp &rarr;
          </a>
        </div>

      </td>
    </tr>

    <!-- Clean Minimal Footer -->
    <tr>
      <td style="padding: 16px 36px; background-color: #fafafa; border-top: 1px solid #f4f4f5; font-size: 11px; color: #71717a; text-align: center;">
        NERQIVA Studio · Logged under DPDP Act 2023 Consent · ${lead.submittedAt}
      </td>
    </tr>

  </table>

</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `"NERQIVA Studio" <${senderAddress}>`,
      to: recipient,
      cc: ccRecipient,
      replyTo: lead.email,
      subject: `[NERQIVA BRIEF] ${lead.name} · ${lead.business || lead.goal} · Ref: ${lead.id}`,
      text: [
        `PROJECT BRIEF — NERQIVA STUDIO`,
        `Reference ID: ${lead.id}`,
        `Submitted: ${lead.submittedAt}`,
        `----------------------------------------`,
        `Client: ${lead.name}`,
        `Company: ${lead.business || "Independent"}`,
        `WhatsApp: ${lead.phone || "Not provided"}`,
        `Email: ${lead.email}`,
        ``,
        `Target Scope: ${lead.goal}`,
        `Timeline SLA: ${lead.timeline}`,
        `Budget Range: ${lead.budget}`,
        ``,
        `Problem Description:`,
        lead.problem,
        lead.situation ? `\nCurrent Stack / Context:\n${lead.situation}` : "",
        `----------------------------------------`,
        `Reply via WhatsApp: ${waReplyUrl}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: htmlContent,
    });
    return true;
  } catch (error) {
    console.error("Failed to send email notification to founder:", error);
    return false;
  }
}
