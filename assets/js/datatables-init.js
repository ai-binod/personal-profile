/**
 * ====================================================================
 * Binod Sthapit - AI Marketing Expert Portfolio
 * DataTables Initialization (AI Marketing Services & Deliverables Matrix)
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const tableEl = document.getElementById("servicesDataTable");
  if (!tableEl) return;

  // Check if jQuery and DataTables are loaded
  if (typeof jQuery !== "undefined" && typeof jQuery.fn.DataTable !== "undefined") {
    jQuery("#servicesDataTable").DataTable({
      responsive: true,
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search services or challenges...",
        lengthMenu: "Show _MENU_ services per page",
        info: "Showing _START_ to _END_ of _TOTAL_ service areas",
        paginate: {
          first: '<i class="bi bi-chevron-double-left"></i>',
          previous: '<i class="bi bi-chevron-left"></i>',
          next: '<i class="bi bi-chevron-right"></i>',
          last: '<i class="bi bi-chevron-double-right"></i>'
        }
      },
      order: [[0, "asc"]],
      dom: "<'row align-items-center mb-3'<'col-md-6'l><'col-md-6 text-md-end'f>>" +
           "<'row'<'col-12'tr>>" +
           "<'row align-items-center mt-3'<'col-md-6 text-muted small'i><'col-md-6 d-flex justify-content-md-end'p>>"
    });
  } else {
    console.warn("jQuery or DataTables not loaded; displaying native HTML table fallback.");
  }
});
