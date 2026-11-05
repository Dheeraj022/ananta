import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      propertySlug,
      propertyName,
      accommodationName,
      checkIn,
      checkOut,
      adults,
      children,
      specialRequests,
      privacyAccepted,
      honeypot,
    } = body;

    // Spam bot honeypot check
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: "Spam submission detected." },
        { status: 400 }
      );
    }

    // Required fields check
    if (!fullName || !email || !phone || !propertySlug || !checkIn || !checkOut || !adults) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        { success: false, message: "You must accept the privacy policy to submit an enquiry." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone format validation (allows international formats with + and digits)
    const phoneClean = phone.replace(/[\s\-\(\)]/g, "");
    if (!/^\+?[0-9]{7,15}$/.test(phoneClean)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number with country code." },
        { status: 400 }
      );
    }

    // Date validation
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json(
        { success: false, message: "Please select valid check-in and check-out dates." },
        { status: 400 }
      );
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { success: false, message: "Check-out date must be strictly after the check-in date." },
        { status: 400 }
      );
    }

    // Generate enquiry reference number
    const enquiryRef = `ENQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // In production, integrate email/CRM delivery here:
    // e.g. await sendEmail({ to: siteConfig.contact.email, data: ... })

    console.log("=== NEW ENQUIRY RECEIVED ===", {
      enquiryRef,
      fullName,
      email,
      phone,
      propertySlug,
      propertyName,
      accommodationName: accommodationName || "General Property Enquiry",
      checkIn,
      checkOut,
      adults,
      children: children || 0,
      specialRequests: specialRequests || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      reference: enquiryRef,
      message:
        "Thank you for your enquiry. Your request has been submitted successfully. Our team will contact you regarding the details.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your enquiry. Please try again." },
      { status: 500 }
    );
  }
}

