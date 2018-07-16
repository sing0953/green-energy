// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/wind-energy.jpg",
       "./img/water-energy.jpg",
       "./img/solar.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log('Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}');
};
window.addEventListener("load", preloader);

// list of topics
const energies = {
    water: {
        heading: "Water Energy",
        modal: "img/water-energy.jpg",
        description: "Hydroelectric power generates about 10% of the nation's energy. Credit: US Army Corps of Engineers Flowing water creates energy that can be captured and turned into electricity. This is called hydroelectric power or hydropower.The most common type of hydroelectric power plant uses a dam on a river to store water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which in turn activates a generator to produce electricity. But hydroelectric power doesn't necessarily require a large dam. Some hydroelectric power plants just use a small canal to channel the river water through a turbine."
    },
    wind: {
        heading: "WIND Energy",
        modal: "img/wind-energy.jpg",
        description: "The wind is a clean, free, and readily available renewable energy source. Each day, around the world, wind turbines are capturing the wind’s power and converting it to electricity. This source of power generation plays an increasingly important role in the way we power our world."
    },
    solar: {
        heading: "Solar Energy",
        modal: "img/solar.jpg",
        description: "Solar energy is the technology used to harness the sun's energy and make it useable. As of 2011, the technology produced less than one tenth of one percent of global energy demand.Many are familiar with so-called photovoltaic cells, or solar panels, found on things like spacecraft, rooftops, and handheld calculators. The cells are made of semiconductor materials like those found in computer chips. "
    }
};

/* refrence https://www.nationalgeographic.com/environment/global-warming/solar-power/
https://www.renewableenergyworld.com/hydropower/tech.html
https://www.ge.com/renewableenergy/wind-energy/technology/what-is-wind-energy
*/

const buttons = document.querySelectorAll(".load-buttons button");
const article = document.querySelector("article");

function loadContent(ev) {
    let clkbtn = ev.target;
    let main = clkbtn.getAttribute("data-content");

    article.innerHTML = `<div class="media d-flex flex-column">
                            <div class="media-left media-middle">
                                </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">${energies[main].heading}</h4>
                                        <img src="${energies[main].modal}" class="media-object pr-2" style="width:260px">
                                        <p>${energies[main].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}
