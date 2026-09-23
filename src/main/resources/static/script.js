/* =========================================================
   PERUTURISNET - Lógica del sitio
   ========================================================= */

const destinos = {
    cusco: {
        nombre: "Cusco",
        ciudades: {
            cusco_ciudad: {
                nombre: "Cusco Ciudad",
                atracciones: {
                    sacsayhuaman: {
                        nombre: "Sacsayhuamán",
                        descripcion: "Complejo arqueológico famoso por sus enormes construcciones de piedra megalíticas.",
                        tipo: "Turismo histórico"
                    },
                    coricancha: {
                        nombre: "Templo de Coricancha",
                        descripcion: "El templo inca más importante dedicado al dios Sol.",
                        tipo: "Turismo cultural"
                    }
                }
            },
            machupicchu_pueblo: {
                nombre: "Machu Picchu Pueblo (Aguas Calientes)",
                atracciones: {
                    machupicchu: {
                        nombre: "Ciudadela de Machu Picchu",
                        descripcion: "Una impresionante ciudadela inca ubicada entre las montañas de los Andes.",
                        tipo: "Turismo cultural y natural"
                    }
                }
            }
        }
    },
    lima: {
        nombre: "Lima",
        ciudades: {
            lima_centro: {
                nombre: "Lima Metropolitana",
                atracciones: {
                    centro_historico: {
                        nombre: "Centro Histórico de Lima",
                        descripcion: "Famoso por su arquitectura colonial, la Plaza Mayor y las catacumbas de San Francisco.",
                        tipo: "Turismo histórico"
                    },
                    miraflores: {
                        nombre: "Malecón de Miraflores",
                        descripcion: "Hermosos acantilados con vista al mar Pacífico, ideales para pasear y hacer parapente.",
                        tipo: "Turismo urbano y natural"
                    }
                }
            }
        }
    },
    ica: {
        nombre: "Ica",
        ciudades: {
            paracas: {
                nombre: "Paracas",
                atracciones: {
                    reservanacional: {
                        nombre: "Reserva Nacional de Paracas",
                        descripcion: "Impresionante reserva costera desértica que alberga fauna marina única.",
                        tipo: "Turismo natural"
                    }
                }
            },
            ica_ciudad: {
                nombre: "Ica Ciudad / Huacachina",
                atracciones: {
                    huacachina: {
                        nombre: "Oasis de la Huacachina",
                        descripcion: "Un oasis natural en medio del desierto rodeado de enormes dunas de arena.",
                        tipo: "Turismo de aventura"
                    }
                }
            }
        }
    },
    puno: {
        nombre: "Puno",
        ciudades: {
            puno_ciudad: {
                nombre: "Puno Ciudad",
                atracciones: {
                    uros: {
                        nombre: "Islas Flotantes de los Uros",
                        descripcion: "Islas artificiales construidas de totora habitadas por los Uros en el Lago Titicaca.",
                        tipo: "Turismo cultural"
                    }
                }
            }
        }
    },
    ancash: {
        nombre: "Áncash",
        ciudades: {
            huaraz: {
                nombre: "Huaraz",
                atracciones: {
                    lagunachanparacocha: {
                        nombre: "Laguna 69 / Huascarán",
                        descripcion: "Impresionante laguna de color turquesa intenso ubicada en el Parque Nacional Huascarán.",
                        tipo: "Turismo de aventura y natural"
                    }
                }
            }
        }
    },
    arequipa: {
        nombre: "Arequipa",
        ciudades: {
            arequipa_ciudad: {
                nombre: "Arequipa Ciudad",
                atracciones: {
                    monasteriosantacatalina: {
                        nombre: "Monasterio de Santa Catalina",
                        descripcion: "Una ciudadela dentro de la ciudad con hermosas calles coloridas y arquitectura colonial.",
                        tipo: "Turismo histórico"
                    },
                    cañondelcolca: {
                        nombre: "Cañón del Colca",
                        descripcion: "Uno de los cañones más profundos del mundo, hábitat del majestuoso cóndor andino.",
                        tipo: "Turismo natural y de aventura"
                    }
                }
            }
        }
    },
    amazonas: {
        nombre: "Amazonas",
        ciudades: {
            chachapoyas: {
                nombre: "Chachapoyas",
                atracciones: {
                    kuelap: {
                        nombre: "Fortaleza de Kuelap",
                        descripcion: "Impresionante complejo arquitectónico prehispánico construido en la cima de una montaña.",
                        tipo: "Turismo histórico"
                    }
                }
            }
        }
    },
    "la-libertad": {
        nombre: "La Libertad",
        ciudades: {
            trujillo: {
                nombre: "Trujillo",
                atracciones: {
                    chanchan: {
                        nombre: "Ciudadela de Chan Chan",
                        descripcion: "La ciudad de barro más grande de América precolombina perteneciente a la cultura Chimú.",
                        tipo: "Turismo histórico"
                    }
                }
            }
        }
    }
};

const pais = document.getElementById("pais");
const ciudad = document.getElementById("ciudad");
const atraccion = document.getElementById("atraccion");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

/* CAMBIAR CIUDADES */
if (pais && ciudad && atraccion && resultado) {
    pais.addEventListener("change", () => {
        ciudad.innerHTML = '<option value="">Seleccionar ciudad</option>';
        atraccion.innerHTML = '<option value="">Seleccionar lugar</option>';

        ciudad.disabled = true;
        atraccion.disabled = true;
        resultado.innerHTML = "";

        if (!pais.value) return;

        const regionSeleccionada = destinos[pais.value];
        if (!regionSeleccionada) return;

        const ciudades = regionSeleccionada.ciudades;

        Object.entries(ciudades).forEach(([id, ciudadData]) => {
            ciudad.innerHTML += `
                <option value="${id}">
                    ${ciudadData.nombre}
                </option>
            `;
        });

        ciudad.disabled = false;
    });

    /* CAMBIAR ATRACCIONES */
    ciudad.addEventListener("change", () => {
        atraccion.innerHTML = '<option value="">Seleccionar lugar</option>';
        atraccion.disabled = true;
        resultado.innerHTML = "";

        if (!ciudad.value || !pais.value) return;

        const regionSeleccionada = destinos[pais.value];
        if (!regionSeleccionada) return;

        const ciudadSeleccionada = regionSeleccionada.ciudades[ciudad.value];
        if (!ciudadSeleccionada) return;

        const atracciones = ciudadSeleccionada.atracciones;

        Object.entries(atracciones).forEach(([id, atraccionData]) => {
            atraccion.innerHTML += `
                <option value="${id}">
                    ${atraccionData.nombre}
                </option>
            `;
        });

        atraccion.disabled = false;
    });

    /* MOSTRAR RESULTADO */
    buscar.addEventListener("click", () => {
        if (!pais.value || !ciudad.value || !atraccion.value) {
            resultado.innerHTML = `
                <div class="alert alert-warning">
                    <i class="bi bi-exclamation-circle me-2"></i>
                    Selecciona una región, una ciudad y una atracción.
                </div>
            `;
            return;
        }

        const destino = destinos[pais.value].ciudades[ciudad.value].atracciones[atraccion.value];

        resultado.innerHTML = `
            <div class="resultado-card">
                <div class="d-flex align-items-center gap-3">
                    <div class="resultado-icon">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                        <small class="amarillo fw-bold">
                            Destino encontrado
                        </small>
                        <h3 class="fw-bold mb-1">
                            ${destino.nombre}
                        </h3>
                        <p class="text-secondary mb-2">
                            ${destino.descripcion}
                        </p>
                        <span class="badge bg-warning text-dark">
                            ${destino.tipo}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
}

/* MENÚ HAMBURGUESA — JS puro, no depende de bootstrap.Offcanvas */
const menuToggle = document.getElementById("menuToggle");
const menuEl = document.getElementById("menu");
const menuBackdrop = document.getElementById("menuBackdrop");
const menuClose = document.getElementById("menuClose");

if (menuToggle && menuEl && menuBackdrop) {

    const openMenu = () => {
        menuEl.classList.add("show");
        menuBackdrop.classList.add("show");
        document.body.classList.add("menu-open");
        menuToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        menuEl.classList.remove("show");
        menuBackdrop.classList.remove("show");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
        menuEl.classList.contains("show") ? closeMenu() : openMenu();
    });

    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }

    menuBackdrop.addEventListener("click", closeMenu);

    menuEl.querySelectorAll(".menu-link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

/* ENVÍO DEL FORMULARIO DE CONTACTO (con validación) */
const formularioContacto = document.getElementById("formularioContacto");
const modalExitoEl = document.getElementById("modalExito");

if (formularioContacto && modalExitoEl) {
    const modalExito = new bootstrap.Modal(modalExitoEl);

    formularioContacto.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!formularioContacto.checkValidity()) {
            formularioContacto.classList.add("was-validated");

            const primerInvalido = formularioContacto.querySelector(":invalid");
            if (primerInvalido) {
                primerInvalido.focus();
            }
            return;
        }

        modalExito.show();
    });

    modalExitoEl.addEventListener("hidden.bs.modal", () => {
        formularioContacto.reset();
        formularioContacto.classList.remove("was-validated");
    });
}
