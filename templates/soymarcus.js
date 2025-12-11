document.addEventListener("DOMContentLoaded", cargarTemplate)

const soymarcusHTML = `
            <div class="sidebar_contenido">
                <h3>Transforma tu presencia digital con un sitio web profesional 👇</h3>
                <a href="https://soymarcus.pages.dev"
                    target="_blank">
                    <img loading="lazy" src="/img/BannerWeb.png" alt="banner SoyMarcus" class="banner-ml">
                </a>
            </div>
`;

function cargarTemplate() {
    document.querySelector("#soymarcus").innerHTML = soymarcusHTML;
}