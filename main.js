
let data = []

function int() {
    $.ajax({
        type: "GET",
        url: "https://myjson.dit.upm.es/api/bins/6ui7",
        success: function (qiymat) {
            data = qiymat;
            Mapping(data)
            console.log(qiymat);
        }
    });
}
int()

function Mapping(qiymat) {
    $("#chex_row").html("")
    qiymat.map((v, i) => {
        let chexol = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="part3 mt-2 mb-2 p-2">
                <h5 class="like fs-2">
                    <i class="bi bi-heart text-danger"></i>
                </h5>
                <img class="img-fluid phone" src="./telefon2.jpeg" alt="rasm">

                <div class="inpart p-2 text-center">
                    <h4 class="oyna">
                    ${v.name}
                    </h4>
                    <button class="btn btn-outline-primary" onclick = "Korzina(${i})" id="korzina">
                        Korzina
                    </button>
                </div>
            </div>
        </div>  
        `
        $("#chex_row").append(chexol);
    })
}

function Korzina(i) {
    let carting = `
    <div class=" col-md-6 col-sm-12">
    <div class="part3 mt-2 mb-2 p-2 card">
        <img class="img-fluid phone" src="./telefon2.jpeg" alt="rasm">

        <div class="inpart p-2 text-center">
            <h4 class="oyna">
            ${data[i].name}
            </h4>
        </div>
         
        <h4 class="cost">
            ${data[i].cost} $
        </h4>
        <button onclick = "BUY(${i})" class="btn btn-success">Buy</button>
    </div>
    </div>    
    `

    $("#common").append(carting);
}

let data2 = []
function int2() {
    $.ajax({
        type: "GET",
        url: "https://myjson.dit.upm.es/api/bins/2rwf",
        success: function (qiymat) {
            data2 = qiymat;
            Mapping2(data2)
            console.log(data2);
        }
    });
}
int2()


function Mapping2(qiymat) {
    $("#quloq_row").html("")
    qiymat.map((v, i) => {
        let quloq = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="part3 mt-2 mb-2 p-2">
                <h5 class="like fs-2">
                    <i class="bi bi-heart text-danger"></i>
                </h5>
                <img class="img-fluid phone" src="./sony.webp" alt="rasm">

                <div class="inpart p-2 text-center">
                    <h4 class="oyna">
                    ${v.name}
                    </h4>
                    <button class="btn btn-outline-primary" onclick = "Korzina(${i})" id="korzina">
                        Korzina
                    </button>
                </div>
            </div>
        </div>  
        `
        $("#quloq_row").append(quloq);
    })
}

function int2() {
    $.ajax({
        type: "GET",
        url: "https://myjson.dit.upm.es/api/bins/6ui7",
        success: function (qiymat) {
            data2 = qiymat;
            Mapping2(data2)
            console.log(data2);
        }
    });
}

int2()

let umumiy_narx = 0;
function BUY(ind) {
    console.log(ind);
    soni = parseInt(prompt("Shu mahsulotdan nechta sotib olmoqchisiz?"))

    let hisob = umumiy_narx + data[ind].cost * soni

    $(".hisob").append(hisob+ "$");

}


$("#myInput").on("input", function(){

    console.log($("#myInput").val());
    
    let yangiMassiv = data.filter(man => {
        return man.name.toLocaleLowerCase().includes($("#myInput").val().toLocaleLowerCase())
    })

    Mapping(yangiMassiv)
   
})

$("#myInput").on("input", function(){

    console.log($("#myInput").val());
    
    let yangiMassiv2 = data2.filter(man => {
        return man.name.toLocaleLowerCase().includes($("#myInput").val().toLocaleLowerCase())
    })

    Mapping2(yangiMassiv2)
   
})

// function Qidirish(qidir) {
//     let yangiMassiv1 = data.filter(nom => {
//         return nom.name.toLocaleLowerCase().includes(qidir.toLocaleLowerCase()) 
        
//     })
//     Mapping(yangiMassiv1)
// }

