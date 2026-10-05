/**
 * ====================================================================
 * Binod Sthapit - AI Marketing Expert Portfolio
 * Contact Form Handler: Direct Email Client Dispatch & Google Calendar Integration
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("consultationContactForm");
  if (!contactForm) return;

  const formStatus = document.getElementById("contactFormStatus");

  // Helper to escape HTML characters in dynamic strings
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Check HTML5 validation
    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      const firstInvalid = contactForm.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    contactForm.classList.add("was-validated");

    // Gather form input data
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const businessName = document.getElementById("contactBusiness").value.trim();
    const websiteUrl = document.getElementById("contactWebsite").value.trim() || "Not provided";
    const service = document.getElementById("contactService").value;
    const message = document.getElementById("contactMessage").value.trim();

    const receiverEmail = window.SITE_CONFIG?.personal?.email || "mail@binodsthapit.com.np";
    const calendarUrl = window.SITE_CONFIG?.personal?.bookingUrl || "https://calendar.app.google/n4R95r7LdRjVfTHD9";

    // Format subject for Google Calendar & Email booking
    const subjectText = `Google Calendar - Book a Call: ${service} - ${businessName} (${name})`;
    const subjectAndLinkText = `Subject: ${subjectText}\nGoogle Calendar Link: ${calendarUrl}`;

    // Format structured consultation message
    const bodyText = 
`Hello Binod,

I would like to book a consultation call regarding digital marketing and AI growth solutions for my business.

--- CONTACT & BUSINESS DETAILS ---
• Name: ${name}
• Email: ${email}
• Business Name: ${businessName}
• Website URL: ${websiteUrl}
• Primary Service of Interest: ${service}

--- GOAL & CURRENT CHALLENGE ---
${message}

--- GOOGLE CALENDAR BOOKING LINK ---
Schedule directly on Google Calendar: ${calendarUrl}

---
Sent via portfolio consultation form at binodsthapit.com.np`;

    const encodedSubject = encodeURIComponent(subjectText);
    const encodedBody = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:${receiverEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Render interactive confirmation card with Google Calendar link and copy actions
    formStatus.innerHTML = `
      <div class="alert alert-success border-0 shadow-sm p-4 mb-4" role="alert">
        <div class="d-flex align-items-start gap-3">
          <i class="bi bi-calendar-check-fill text-teal fs-2 mt-1"></i>
          <div class="w-100">
            <h5 class="fw-bold text-navy mb-1">Inquiry Prepared & Email App Opening...</h5>
            <p class="text-secondary small mb-2">
              Your inquiry has been formatted with the subject:
              <br>
              <span class="d-inline-block bg-white text-navy fw-semibold px-2 py-1 rounded border mt-1">
                ${escapeHtml(subjectText)}
              </span>
            </p>

            <!-- Google Calendar Direct Booking Card -->
            <div class="p-3 bg-white rounded border my-3">
              <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-1">
                <span class="small fw-bold text-navy">
                  <i class="bi bi-calendar-event text-teal me-1"></i> Google Calendar Booking Link:
                </span>
                <a href="${calendarUrl}" target="_blank" rel="noopener noreferrer" class="small fw-semibold text-teal text-decoration-none">
                  Open Google Calendar <i class="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
              <div class="small text-muted text-break">${calendarUrl}</div>
            </div>

            <!-- Action Buttons: Google Calendar, Mailto fallback, Copy Subject & Link -->
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="${calendarUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-cta btn-sm">
                <i class="bi bi-calendar-plus me-1"></i> Book a Call on Google Calendar
              </a>
              <a href="${mailtoUrl}" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-envelope-arrow-up me-1"></i> Open Email App Again
              </a>
              <button type="button" class="btn btn-outline-secondary btn-sm" id="copySubjectLinkBtn">
                <i class="bi bi-clipboard-check me-1"></i> Copy Subject & Calendar Link
              </button>
              <button type="button" class="btn btn-outline-secondary btn-sm" id="copyInquiryTextBtn">
                <i class="bi bi-clipboard-data me-1"></i> Copy Full Message
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // 1. Copy Subject & Calendar Link Button Handler
    const copySubjectBtn = document.getElementById("copySubjectLinkBtn");
    if (copySubjectBtn) {
      copySubjectBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(subjectAndLinkText).then(() => {
          copySubjectBtn.innerHTML = `<i class="bi bi-check2 text-success me-1"></i> Subject & Link Copied!`;
          setTimeout(() => {
            copySubjectBtn.innerHTML = `<i class="bi bi-clipboard-check me-1"></i> Copy Subject & Calendar Link`;
          }, 3000);
        });
      });
    }

    // 2. Copy Full Message Button Handler
    const copyInquiryBtn = document.getElementById("copyInquiryTextBtn");
    if (copyInquiryBtn) {
      copyInquiryBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(bodyText).then(() => {
          copyInquiryBtn.innerHTML = `<i class="bi bi-check2 text-success me-1"></i> Message Copied!`;
          setTimeout(() => {
            copyInquiryBtn.innerHTML = `<i class="bi bi-clipboard-data me-1"></i> Copy Full Message`;
          }, 3000);
        });
      });
    }

    // Launch default email client directly
    window.location.href = mailtoUrl;

    // Reset validation state
    contactForm.classList.remove("was-validated");
  });
});
