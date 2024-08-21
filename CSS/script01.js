document.addEventListener("DOMContentLoaded", () => {
  const seccionAlquiler = document.getElementById("elemento_alquilar");
  const seccionCompra = document.getElementById("elemento_comprar");

  const alquilarElements = [
    document.getElementById("alquilar"),
    document.getElementById("alquilar2"),
    document.getElementById("alquilar3"),
    document.getElementById("alquilar4"),
  ];

  const comprarElements = [
    document.getElementById("comprar"),
    document.getElementById("comprar2"),
    document.getElementById("comprar3"),
    document.getElementById("comprar4"),
  ];

  seccionAlquiler.addEventListener("click", () => {
    comprarElements.forEach((element) => {
      element.style.display = "none";
    });
    alquilarElements.forEach((element) => {
      element.style.display = "block";
    });
  });

  seccionCompra.addEventListener("click", () => {
    alquilarElements.forEach((element) => {
      element.style.display = "none";
    });
    comprarElements.forEach((element) => {
      element.style.display = "block";
    });
  });
});

// Script para que funcione el boton de mostrar la card

function activateModal() {
  var modalHtml = `
    <div class="modal fade" id="phoneModal" tabindex="-1" aria-labelledby="phoneModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="phoneModalLabel">Número de teléfono</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>+543586018120</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  var phoneModal = new bootstrap.Modal(document.getElementById('phoneModal'));
  phoneModal.show();

  document.getElementById('phoneModal').addEventListener('hidden.bs.modal', function (event) {
    document.getElementById('phoneModal').remove();
  });
}
