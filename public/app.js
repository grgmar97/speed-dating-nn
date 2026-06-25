const form = document.querySelector("#applicationForm");
const statusNode = document.querySelector("#formStatus");

const setStatus = (message, type = "") => {
  statusNode.textContent = message;
  statusNode.className = `form-status ${type}`.trim();
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("Отправляем заявку...");

  const formData = new FormData(form);
  const payload = {
    name: formData.get("name").trim(),
    age: Number(formData.get("age")),
    city: formData.get("city").trim(),
    contact: formData.get("contact").trim(),
    about: formData.get("about").trim(),
  };

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Не удалось отправить заявку");
    }

    form.reset();
    setStatus("Заявка отправлена. Мы рассмотрим анкету и свяжемся с вами.", "success");
  } catch (error) {
    setStatus(error.message || "Не удалось отправить заявку. Попробуйте еще раз.", "error");
  }
});
