function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

function pushNewArray(ride){
  newArray.push(ride);
  renderRides(newArray)
}

window.addEventListener('DOMContentLoaded', function() {
    // YOUR CODE
  document.querySelector('#all-filter').addEventListener('click',async function(event){
    console.log('all filter button clicked');
    document.querySelector('.rides').innerHTML = ''
    newArray = [];

    let response = await fetch('http://kiei451.com/api/rides.json')
    let json = await response.json()
    let rideArray = json
    for(let i=0; i<rideArray.length;i++){
      let ride = rideArray[i]
      levelOfService(ride)
      renderRides(rideArray)
    }
  }
  
  )

})

document.querySelector('#noober-pool-filter').addEventListener('click',async function(event){
  console.log('noober pool button clicked');
  document.querySelector('.rides').innerHTML = ''
  newArray = [];

  let response = await fetch('http://kiei451.com/api/rides.json')
  let json = await response.json()
  let rideArray = json
  for(let i=0; i<rideArray.length;i++){
    let ride = rideArray[i]
    levelOfService(ride)

    if (levelOfService(ride) == 'Noober Pool'){
      pushNewArray(ride)
    }
  }
})

document.querySelector('#noober-purple-filter').addEventListener('click',async function(event){
  console.log('noober pool button clicked');
  document.querySelector('.rides').innerHTML = ''
  newArray = [];

  let response = await fetch('http://kiei451.com/api/rides.json')
  let json = await response.json()
  let rideArray = json
  for(let i=0; i<rideArray.length;i++){
    let ride = rideArray[i]
    levelOfService(ride)

    if (levelOfService(ride) == 'Noober Purple'){
      pushNewArray(ride)
    }
  }
})
document.querySelector('#noober-xl-filter').addEventListener('click',async function(event){
  console.log('noober xl button clicked');
  document.querySelector('.rides').innerHTML = ''
  newArray = [];

  let response = await fetch('http://kiei451.com/api/rides.json')
  let json = await response.json()
  let rideArray = json
  for(let i=0; i<rideArray.length;i++){
    let ride = rideArray[i]
    levelOfService(ride)

    if (levelOfService(ride) == 'Noober XL'){
      pushNewArray(ride)
    }
  }
})

document.querySelector('#noober-x-filter').addEventListener('click',async function(event){
  console.log('noober X button clicked');
  document.querySelector('.rides').innerHTML = ''
  newArray = [];

  let response = await fetch('http://kiei451.com/api/rides.json')
  let json = await response.json()
  let rideArray = json
  for(let i=0; i<rideArray.length;i++){
    let ride = rideArray[i]
    levelOfService(ride)

    if (levelOfService(ride) == 'Noober X'){
      pushNewArray(ride)
    }
  }
})
