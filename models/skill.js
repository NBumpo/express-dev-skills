

   
	const skills = [
    { id: 1, skill: 'Javascript', skilled: true},
    {id: 2, skill: 'HTML', skilled: true},
    {id: 3, skill: 'CSS', skilled: true},
    {id: 4, skill: 'Express', skilled: false}
]
  

  module.exports = {getAll, getOne, create}

  function getAll(){
    return skills
  }

  function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.skilled = false;
    skills.push(skill);
    return skill;
  }

