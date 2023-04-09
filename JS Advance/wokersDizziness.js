function solve(obj){
    if(obj.dizziness == true){
        obj.levelOfHydrated = Number(obj.weight) * Number(obj.experience/10)
        obj.dizziness = false;
    }
   return obj;
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )