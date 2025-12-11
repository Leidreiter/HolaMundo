document.addEventListener("DOMContentLoaded", cargarTemplate);


const infoCuadrosHTML = `
    <section class="caracteristicas separador">
                <h3 class="titulos">Características</h3>
                <ul class="caracteristicas__lista no-space">
                    <li class="caracteristica1 top"><span class="caracteristica-span">Materiales: </span>Papel vinilo
                    </li>
                    <li class="caracteristica2"><span class="caracteristica-span">Medidas: </span>30 x 40 cm</li>
                    <li class="caracteristica1"><span class="caracteristica-span">Gramaje: </span>200 gr.</li>
                    <li class="caracteristica2 bottom"><span class="caracteristica-span">Impresión: </span>Láser</li>
                </ul>
            </section>

            <section class="descripcion">
                <h3 class="titulos">Descripción</h3>
                <p class="descripcion__copy">
                    ¡Atención, programadores y frikis del código! Este póster es un verdadero tributo al clásico "Hello
                    World", el primer mensaje que cualquier dev escribe cuando empieza en un nuevo lenguaje. Desde
                    Python y JavaScript hasta C++ y Ruby, este póster reúne cómo se saluda al mundo en casi todos los
                    lenguajes de programación.
                </p>
                <p class="descripcion__copy">
                    Perfecto para darle ese toque geek a tu setup, oficina o rincón de
                    código. Es más que un simple póster: es un grito de batalla para quienes viven entre líneas de
                    código y compilaciones infinitas. Ideal para devs veteranos, principiantes que están en pleno
                    bootcamp, o simplemente para fans de la cultura tech.
                </p>
                <p class="descripcion__copy">
                    Este diseño es un must-have para cualquier
                    coder orgulloso de su stack. Si amas los algoritmos, las APIs y los bugs imposibles, este póster es
                    para ti. ¡Haz que tu espacio grite "Hello World!" en todos los idiomas del código!
                </p>
            </section>
`;


function cargarTemplate() {
    document.querySelector("#infoCuadros").innerHTML = infoCuadrosHTML;
}