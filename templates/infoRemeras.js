document.addEventListener("DOMContentLoaded", cargarTemplate);


const infoRemerasHTML = `
   <section class="caracteristicas separador">
                <h3 class="titulos">Características</h3>
                <ul class="caracteristicas__lista no-space">
                    <li class="caracteristica1 top"><span class="caracteristica-span">Materiales: </span>Poliester 
                    </li>
                    <li class="caracteristica2"><span class="caracteristica-span">Tipo de tela: </span>Spum
                    </li>
                    <li class="caracteristica1"><span class="caracteristica-span">Tipo de manga: </span>Corta
                    </li>
                    <li class="caracteristica2"><span class="caracteristica-span">Cuello: </span>Redondo
                    </li>
                    <li class="caracteristica1"><span class="caracteristica-span">Medidas: </span>S, M, L, XL, XXL</li>
                    <li class="caracteristica2 bottom"><span class="caracteristica-span">Impresión: </span>Sublimadas</li>
                </ul>
            </section>

            <section class="descripcion">
                <h3 class="titulos">Descripción</h3>
                <p class="descripcion__copy">
                    Lleva tu código siempre contigo con nuestras remeras de programación, creadas para quienes respiran
                    tecnología. Olvida las típicas camisetas aburridas; estas vienen cargadas de referencias que solo
                    los que viven en modo dark theme entenderán.
                </p>
                <p class="descripcion__copy">
                    Desde líneas de código minimalistas hasta guiños a lenguajes legendarios, nuestras remeras combinan
                    estilo y actitud para esos devs que no se conforman con lo básico. Ideales para lucir en meetups,
                    entre monitores o cuando estás en modo deep work con un café infinito al lado. Con diseños tan
                    limpios como tu repositorio favorito, cada prenda es más que un simple outfit; es una declaración de
                    principios: "Compilo, luego existo".
                </p>
                <p class="descripcion__copy">
                    Ultra cómodas para que tu única preocupación sea escribir buen código. Tu
                    estilo geek merece ser tan sharp como tu lógica. Viste con personalidad y deja que tu pasión por la
                    programación hable por sí sola.
                </p>
            </section>
`;


function cargarTemplate() {
    document.querySelector("#infoRemeras").innerHTML = infoRemerasHTML;
}