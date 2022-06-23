<template>
  <div class="card">
    <div class="card-body">
        <h5>{{country.name.common}}</h5>
        <p class="text-center">
          <img :src="country.flags[0]" class="img-fluid w-25"/>
        </p>
        <div class="card-text">
            <span class="badge badge-dark d-block mb-2">{{country.name.official}} </span>
            <span class="badge badge-info d-block mb-2 p-3" >{{formatedNumber(country.population)}} </span>
            <span class="badge badge-dark d-block mb-2">{{country.capital}} </span>
            <span class="badge badge-dark d-block mb-2">{{country.region}} </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
props:['country'],
setup(){
  const formatedNumber =(num) => new Intl.NumberFormat("de-DE").format(num)

  return {formatedNumber}
}
}
</script>

<style>

</style>