document.querySelectorAll(".statsGame").forEach((stat) => {
  const left = stat.querySelector(".statsGame__infoline:first-child");
  const right = stat.querySelector(".statsGame__infoline:last-child");

  const leftNum = Number(
    left.querySelector(".statsGame__number").textContent.trim()
  );
  const rightNum = Number(
    right.querySelector(".statsGame__number").textContent.trim()
  );

  if (leftNum > rightNum) {
    left.classList.add("winner");
    right.classList.add("loser");
  } else if (rightNum > leftNum) {
    right.classList.add("winner");
    left.classList.add("loser");
  } else {
    left.classList.add("equal");
    right.classList.add("equal");
  }

  if (leftNum === 0) left.classList.add("zero");
  if (rightNum === 0) right.classList.add("zero");
});
