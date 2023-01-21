const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Dia já incluso 🔴',
      width:350,
      color: '#ffff',
      background:'#09090a',
      showConfirmButton: false,
      timer: 1500
    })
     return
  }

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Dia Adicionado com Sucesso! ✅',
    width:350,
    color: '#ffff',
    background:'#09090a',
    showConfirmButton: false,
    timer: 1500
  })
  nlwSetup.addDay(today)
}

// Salvando o Dia adicionado com o Localstorage na maquina
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()




// const form = document.querySelector("#form-habits");
// // Selecionando o ID do form
// const nlwSetup = new NLWSetup(form);
// // Pegando a tag Button de dentro do header
// const button = document.querySelector('header button');
// // OUVINDO O EVENTO
// button.addEventListener('click', add)
// function add() {
//   const today = "01/01"
//   const dayExists = nlwSetup.dayExists(today)  // Verifica se o dia ja existe na pagina
//   //caso exista ele me dirá que sim
//   if (dayExists) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Dia já incluso!',
  
//     })
//   return
//   }
//   Swal.fire({
//     position: 'center',
//     icon: 'success',
//     title: 'Dia Adicionado Com sucesso',
//     showConfirmButton: false,
//     timer: 1500
//   })
//   nlwSetup.addDay();

// }

// // Construindo a tabela de habitos
// // const data = {
// //   run: ['01-01', '01-02', '01-06'],
// //   water: ['01-04', '01-05'],
// //   food: ['01-01', '01-03'],
// //   journal: ['01-05', '01-01'],
// //   takepills: ['01-01', '01-07'],
// // }

// // //Tendo os dados acima, adicionamos eles com a
// // //função .setData(nome da constante aqui)
// // nlwSetup.setData(data)
// // nlwSetup.load();