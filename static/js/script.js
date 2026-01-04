document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[data-form-type="contact"]');
  if (!form) return; // now valid because we are inside a function

  function t(key) {
    // translation helper
    const lang =
      document.documentElement.lang ||
      localStorage.getItem("site-lang") ||
      "fr";

    return translations[lang]?.[key] || key;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll(".error-color").forEach((el) => el.remove());
    form
      .querySelectorAll(".form-wrap")
      .forEach((el) => el.classList.remove("has-error"));

    const formData = new FormData(form);

    let response;
    try {
      response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
    } catch {
      Swal.fire({
        title: t("alert-network-title"),
        text: t("alert-network-text"),
        icon: "error",
      });
      return;
    }

    let data;
    try {
      data = await response.json();
    } catch {
      Swal.fire({
        title: t("alert-server-title"),
        text: t("alert-server-text"),
        icon: "error",
      });
      return;
    }

    if (data.success) {
      Swal.fire({
        title: t("alert-success-title"),
        text: t("alert-success-text"),
        icon: "success",
      });
      form.reset();
      return;
    }

    // Show validation errors
    for (const [field, errors] of Object.entries(data.errors || {})) {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input) continue;

      const wrap = input.closest(".form-wrap");
      if (wrap) {
        wrap.classList.add("has-error");
        const err = document.createElement("p");
        err.className = "error-color";
        err.textContent = errors.join(", ");
        wrap.appendChild(err);
      }
    }

    Swal.fire({
      title: t("alert-failure-title"),
      text: t("alert-failure-text"),
      icon: "error",
    });
  });
});
