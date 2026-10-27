import { NextRequest, NextResponse } from "next/server";
import { saveLead, notifyFounderOfLead, LeadSubmission } from "@/lib/leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.problem) {
      return NextResponse.json(
        { error: "Missing required contact details (name, email, problem description)." },
        { status: 400 }
      );
    }

    const leadId = `NQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const BUDGET_LABELS: Record<string, string> = {
      "15k_35k": "₹15,000 – ₹35,000 (Sprint Website & SEO)",
      "35k_75k": "₹35,000 – ₹75,000 (Web App / Client Portal)",
      "75k_150k": "₹75,000 – ₹1,50,000 (Full-Stack Platform)",
      "over_150k": "₹1,50,000+ (Enterprise System)",
      "scoping": "Need initial scoping guidance",
    };

    const resolvedBudget =
      BUDGET_LABELS[body.budget] || (body.budget ? String(body.budget).trim() : "Standard Range");

    const lead: LeadSubmission = {
      id: leadId,
      name: String(body.name).trim(),
      email: String(body.email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : "",
      business: body.business ? String(body.business).trim() : "",
      goal: body.goal ? String(body.goal).trim() : "Custom Architecture",
      timeline: body.timeline ? String(body.timeline).trim() : "Standard Delivery",
      budget: resolvedBudget,
      problem: String(body.problem).trim(),
      situation: body.situation ? String(body.situation).trim() : "",
      dpdpConsent: Boolean(body.dpdpConsent),
      submittedAt: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
    };

    // 1. Persist lead to disk asynchronously
    await saveLead(lead);

    // 2. Dispatch email notification to founder asynchronously
    notifyFounderOfLead(lead).catch((err) => {
      console.error("Non-blocking background email failure:", err);
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: "Lead brief successfully captured and logged.",
    });
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing project brief." },
      { status: 500 }
    );
  }
}
