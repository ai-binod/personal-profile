/**
 * ====================================================================
 * Binod Sthapit - AI Marketing Expert Portfolio
 * Blog Search & Category Filtering Logic
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articlesGrid");
  if (!container) return; // Only run on blog listing page

  let activeCategory = "all";
  let searchQuery = "";

  const searchInput = document.getElementById("blogSearchInput");
  const filterButtons = document.querySelectorAll(".filter-btn-group .btn");
  const emptyState = document.getElementById("blogEmptyState");
  const resultsCount = document.getElementById("blogResultsCount");
  const resetBtn = document.getElementById("resetSearchBtn");

  function renderArticles() {
    const articles = window.BLOG_ARTICLES || [];
    const query = searchQuery.trim().toLowerCase();

    const filtered = articles.filter(article => {
      const matchesCategory = (activeCategory === "all") || (article.category.toLowerCase() === activeCategory.toLowerCase());
      const matchesSearch = query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        (article.tags && article.tags.some(t => t.toLowerCase().includes(query)));
      return matchesCategory && matchesSearch;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${articles.length} article${articles.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.classList.remove("d-none");
      return;
    }

    if (emptyState) emptyState.classList.add("d-none");

    container.innerHTML = filtered.map(article => `
      <div class="col-md-6 col-lg-4 mb-4">
        <article class="article-card h-100">
          <div class="article-card-body">
            <div class="article-meta">
              <span class="article-category-badge">${article.category}</span>
              <span><i class="bi bi-clock me-1"></i>${article.readTime}</span>
            </div>
            <h3 class="article-card-title">
              <a href="${article.slug}">${article.title}</a>
            </h3>
            <p class="text-secondary small mb-3 flex-grow-1">${article.excerpt}</p>
            <div class="article-card-footer">
              <span class="text-muted small"><i class="bi bi-calendar3 me-1"></i>${article.formattedDate}</span>
              <a href="${article.slug}" class="fw-bold small text-teal">Read Article <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </article>
      </div>
    `).join("");
  }

  // Initial render
  renderArticles();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderArticles();
    });
  }

  // Category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category") || "all";
      renderArticles();
    });
  });

  // Empty state reset button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      activeCategory = "all";
      if (searchInput) searchInput.value = "";
      filterButtons.forEach(b => b.classList.remove("active"));
      const allBtn = document.querySelector('.filter-btn-group [data-category="all"]');
      if (allBtn) allBtn.classList.add("active");
      renderArticles();
    });
  }
});
