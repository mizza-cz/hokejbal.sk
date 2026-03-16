const sortButton = document.querySelector(".sort");
const docsRow = document.querySelector(".row.g-6");

if (!sortButton || !docsRow) return;

const getDocName = (item) => {
  const link = item.querySelector(".docsItem .text-sm-medium");
  return link ? link.textContent.trim().toLowerCase() : "";
};

sortButton.addEventListener("click", (e) => {
  e.preventDefault();

  const direction = sortButton.dataset.sort || "asc";
  const items = Array.from(
    docsRow.querySelectorAll(":scope > [class*='col-']")
  );

  items.sort((a, b) => {
    const nameA = getDocName(a);
    const nameB = getDocName(b);

    return direction === "asc"
      ? nameA.localeCompare(nameB, "cs", { sensitivity: "base" })
      : nameB.localeCompare(nameA, "cs", { sensitivity: "base" });
  });

  items.forEach((item) => docsRow.appendChild(item));

  sortButton.dataset.sort = direction === "asc" ? "desc" : "asc";

  const icon = sortButton.querySelector("img");
  if (icon) {
    icon.style.transform =
      sortButton.dataset.sort === "asc" ? "rotate(0deg)" : "rotate(180deg)";
  }
});
