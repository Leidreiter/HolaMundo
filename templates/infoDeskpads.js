document.addEventListener("DOMContentLoaded", cargarTemplate);


const infoDeskpadsHTML = `
    <section class="caracteristicas separador">
                <h3 class="titulos">Características</h3>
                <ul class="caracteristicas__lista no-space">
                    <li class="caracteristica1 top"><span class="caracteristica-span">Materiales: </span>Gomaespuma SBL,
                        micro tela y antideslizante vinílico
                    </li>
                    <li class="caracteristica2"><span class="caracteristica-span">Medidas: </span>90 x 40 cm</li>
                    <li class="caracteristica1 bottom"><span class="caracteristica-span">Espesor: </span>3 mm</li>
                </ul>
            </section>

            <section class="descripcion">
                <h3 class="titulos">Descripción</h3>
                <p class="descripcion__copy">
                    ¡Dale un boost a tu setup con estos mousepads geek de nivel pro! Diseñados para programadores y
                    entusiastas del código, estos mousepads están hechos de gomaespuma SBL, con micro tela ultra suave
                    que garantiza un deslizamiento fluido y preciso. La base antideslizante vinílica mantiene todo en su
                    lugar, incluso en las sesiones de código más intensas.
                </p>
                <p class="descripcion__copy">
                    Pero lo que realmente los hace destacar son los diseños: un tributo al clásico "Hello World" en
                    varios lenguajes de programación, desde Python hasta C++, pasando por JavaScript y más.
                </p>
                <p class="descripcion__copy">
                    Cada mousepad es una mezcla de funcionalidad y estilo techie, perfecto para mostrar tu pasión por la
                    programación. Ya sea que estés trabajando, jugando o simplemente disfrutando de tu espacio, estos
                    mousepads combinan ergonomía y estética en un solo producto. ¡Ideal para cualquier coder que quiera
                    llevar su escritorio al siguiente nivel!
                </p>
            </section>
`;


function cargarTemplate() {
    document.querySelector("#infoDeskpads").innerHTML = infoDeskpadsHTML;
}