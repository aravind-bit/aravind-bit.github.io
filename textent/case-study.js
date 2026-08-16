const changes = {
  retention: {
    before: "Provider will delete customer content within 30 days after termination.",
    after: "Provider may retain customer content for up to 120 days after termination for operational purposes.",
    chip: "MATERIAL · RETENTION",
    title: "Deletion window expanded by 90 days.",
    why: "This increases post-termination data exposure and may conflict with the organization's retention policy.",
    action: "Request a 30-day deletion commitment or document an approved exception."
  },
  sla: {
    before: "Customer will receive a 15% service credit when monthly availability falls below 99.9%.",
    after: "Service credits are available only when monthly availability falls below 99.5% and a claim is filed within five business days.",
    chip: "MATERIAL · SERVICE LEVEL",
    title: "Credit eligibility narrowed and a claim window was added.",
    why: "The new threshold permits more downtime and the short filing period creates an operational burden.",
    action: "Restore the 99.9% threshold and propose automated credit issuance."
  },
  subprocessor: {
    before: "Provider will obtain written approval before adding a subprocessor.",
    after: "Provider may add subprocessors after providing notice through its online portal.",
    chip: "REVIEW · THIRD PARTY",
    title: "Prior approval changed to portal notice.",
    why: "The customer may lose the ability to assess a new processor before data access begins.",
    action: "Require advance notice, an objection window, and a documented escalation path."
  }
};

const fields = {
  before: document.getElementById("beforeText"),
  after: document.getElementById("afterText"),
  chip: document.getElementById("riskChip"),
  title: document.getElementById("changeTitle"),
  why: document.getElementById("changeWhy"),
  action: document.getElementById("changeAction")
};

document.querySelectorAll(".change-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const item = changes[tab.dataset.change];
    if (!item) return;
    document.querySelectorAll(".change-tab").forEach((candidate) => {
      const selected = candidate === tab;
      candidate.classList.toggle("active", selected);
      candidate.setAttribute("aria-selected", String(selected));
    });
    Object.entries(fields).forEach(([key, node]) => { node.textContent = item[key]; });
  });
});

document.querySelectorAll(".status-choice").forEach((choice) => {
  choice.addEventListener("click", () => {
    document.querySelectorAll(".status-choice").forEach((candidate) => candidate.classList.remove("selected"));
    choice.classList.add("selected");
  });
});
