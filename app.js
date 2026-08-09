const products = `20260807_153011 20260807_153030 20260807_153101 20260807_153120 20260807_153138 20260807_153143 20260807_153147 20260807_153152 20260807_153220 20260807_153225 20260807_153231 20260807_153235 20260807_153238 20260807_153242 20260807_153257 20260807_153300 20260807_153305 20260807_153315 20260807_153330 20260807_153442 20260807_153451 20260807_153455 20260807_153459 20260807_153505 20260807_153509 20260807_153518 20260807_153525 20260807_153528 20260807_153539 20260807_153553 20260807_153556 20260807_153559 20260807_153602 20260807_153605 20260807_153610 20260807_153615 20260807_153633 20260807_153636 20260807_153645 20260807_153649 20260807_153652 20260807_153655 20260807_153702 20260807_153707 20260807_153711 20260807_153716 20260807_153720 20260807_153725 20260807_153727 20260807_153730 20260807_153733 20260807_153736 20260807_153739 20260807_153742 20260807_153747 20260807_153750 20260807_153756 20260807_153759 20260807_153803 20260807_153811 20260807_153829 20260807_153838 20260807_153848 20260807_153916 20260807_153929 20260807_153940 20260807_153950 20260807_153958 20260807_154011 20260807_154017 20260807_154020 20260807_154031 20260807_154050 20260807_154053 20260807_154111 20260807_154117 20260807_154120 20260807_154130 20260807_154148 20260807_154203 20260807_154220 20260807_154232 20260807_154237 20260807_154246 20260807_154248 20260807_154251 20260807_154254 20260807_154257 20260807_154310 20260807_154328 20260807_154348 20260807_154351 20260807_154358 20260807_154401 20260807_154406 20260807_154408 20260807_154412 20260807_154418 20260807_154421 20260807_154432 20260807_154439 20260807_154503 20260807_154506 20260807_154509 20260807_154533 20260807_154537 20260807_154543 20260807_154550 20260807_154556 20260807_154559 20260807_154602 20260807_154605 20260807_154613 20260807_154615 20260807_154618 20260807_154621 20260807_154640 20260807_154647 20260807_154717 20260807_154729 20260807_154747 20260807_154756 20260807_154802 20260807_154810 20260807_154817 20260807_154825 20260807_154831 20260807_154835 20260807_154841 20260807_154848 20260807_154853 20260807_155105 20260807_155129 20260807_155140 20260807_155143 20260807_155207 20260807_155216 20260807_155305 20260807_155332 20260807_155346 20260807_155352 20260807_155442 20260807_155651 PORTADA`.split(" ");
const categoryGroups = {
  coches: `20260807_153011 20260807_153030 20260807_153101 20260807_153120 20260807_153138 20260807_153143 20260807_153147 20260807_153152 20260807_153220 20260807_153225 20260807_153231 20260807_153235 20260807_153238 20260807_153242 20260807_153553 20260807_153556 20260807_153559 20260807_153602 20260807_153605 20260807_153610 20260807_153615`.split(" "),
  carros: `20260807_153442 20260807_153451 20260807_153455 20260807_153459 20260807_153505 20260807_153509 20260807_153518 20260807_153525 20260807_153528 20260807_153539 20260807_153633 20260807_153636 20260807_153645 20260807_153649 20260807_153652 20260807_153655 20260807_153702 20260807_153707 20260807_153711 20260807_153716 20260807_153720 20260807_153725 20260807_153727 20260807_153730 20260807_153733 20260807_153736 20260807_153739 20260807_153742 20260807_153747 20260807_153750 20260807_153756 20260807_153803 20260807_153829 20260807_153950 20260807_154017 20260807_154254 20260807_154257 20260807_154348 20260807_154351 20260807_154358 20260807_154401 20260807_154406 20260807_154729 20260807_154747 20260807_154756 20260807_154802 20260807_154810 20260807_154817 20260807_154825 20260807_154831 20260807_154835 20260807_154841 20260807_154848 20260807_154853`.split(" "),
  bicicletas: `20260807_153916 20260807_153929 20260807_153940 20260807_154031 20260807_154111 20260807_154203 20260807_154220 20260807_154310 20260807_154328 20260807_154503 20260807_154506`.split(" "),
  triciclos: `20260807_153759 20260807_153811 20260807_153958 20260807_154011 20260807_154020 20260807_154050 20260807_154053 20260807_154117 20260807_154120 20260807_154130 20260807_154148 20260807_154246 20260807_154248 20260807_154251 20260807_154408 20260807_154412 20260807_154418 20260807_154421`.split(" "),
  scooters: `20260807_154509 20260807_154559 20260807_154602 20260807_154605 20260807_154613 20260807_154615 20260807_154618 20260807_154621`.split(" "),
  andadores: `20260807_153257 20260807_153300 20260807_153305 20260807_153315 20260807_153330 20260807_154232 20260807_154237 20260807_154533 20260807_154537 20260807_154543 20260807_154550 20260807_154556 20260807_155140 20260807_155143`.split(" "),
  otros: `20260807_153838 20260807_153848 20260807_154432 20260807_154439 20260807_154640 20260807_154647 20260807_154717 20260807_155105 20260807_155129 20260807_155207 20260807_155216 20260807_155305 20260807_155332 20260807_155346 20260807_155352 20260807_155442 20260807_155651 PORTADA`.split(" ")
};
const categoryLabels = { coches: "Coche para bebé", carros: "Carro o moto infantil", bicicletas: "Bicicleta", triciclos: "Triciclo", scooters: "Scooter", andadores: "Andador", otros: "Otro producto" };
const categoryPluralLabels = { coches: "coches para bebés", carros: "carros y motos", bicicletas: "bicicletas", triciclos: "triciclos", scooters: "scooters", andadores: "andadores", otros: "otros productos" };
const categoryById = new Map(Object.entries(categoryGroups).flatMap(([category, ids]) => ids.map((id) => [id, category])));
const gallery = document.querySelector("#gallery");
const loadMore = document.querySelector("#load-more");
const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalWa = document.querySelector("#modal-wa");
const logoModal = document.querySelector("#logo-modal");
let displayed = 0;
let activeCategory = "todos";
let visibleProducts = products;
const batch = 24;
const imagePath = (id) => `assets/products/${id}.webp`;
function renderProducts() {
  const next = visibleProducts.slice(displayed, displayed + batch);
  next.forEach((id, index) => {
    const number = String(products.indexOf(id) + 1).padStart(3, "0");
    const category = categoryById.get(id) || "otros";
    const label = id === "PORTADA" ? "Nuestra tienda en Huacho" : `${categoryLabels[category]} · modelo ${number}`;
    const button = document.createElement("button");
    button.className = "product-card";
    button.type = "button";
    button.style.setProperty("--delay", `${Math.min(index * 35, 280)}ms`);
    button.innerHTML = `<img src="${imagePath(id)}" alt="${label} de Pequeño Bebé en Huacho" loading="lazy" decoding="async" /><span>Ver y consultar</span>`;
    button.addEventListener("click", () => openProduct(id, label));
    gallery.append(button);
  });
  displayed += next.length;
  loadMore.hidden = displayed >= visibleProducts.length;
}
function selectCategory(category) {
  activeCategory = category;
  visibleProducts = category === "todos" ? products : products.filter((id) => categoryById.get(id) === category);
  displayed = 0;
  gallery.replaceChildren();
  document.querySelectorAll("[data-filter]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === category)));
  const suffix = category === "todos" ? "fotos reales" : categoryPluralLabels[category];
  document.querySelector("#catalog-total").textContent = `${visibleProducts.length} ${suffix}`;
  renderProducts();
}
function openProduct(id, label) {
  const productUrl = new URL(imagePath(id), window.location.href).href;
  modalImage.src = imagePath(id);
  modalImage.alt = label;
  modalTitle.textContent = label;
  const message = `Hola Pequeño Bebé 👋\n\nQuiero consultar el precio, colores y disponibilidad de ${label}.\n\nFoto del producto: ${productUrl}`;
  modalWa.href = `https://wa.me/51949280933?text=${encodeURIComponent(message)}`;
  modal.showModal();
}
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
document.querySelector("#brand-open").addEventListener("click", () => logoModal.showModal());
document.querySelector(".logo-modal-close").addEventListener("click", () => logoModal.close());
logoModal.addEventListener("click", (event) => { if (event.target === logoModal) logoModal.close(); });
loadMore.addEventListener("click", renderProducts);
document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => selectCategory(button.dataset.filter)));
document.querySelectorAll(".categories [data-category]").forEach((link) => link.addEventListener("click", () => selectCategory(link.dataset.category)));
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", open); });
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
