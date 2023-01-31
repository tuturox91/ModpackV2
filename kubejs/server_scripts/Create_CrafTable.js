
onEvent('recipes', event => {
	event.shaped('tconstruct:smeltery_controller', [
		'LLL',
		'LSL',
		'LLL'
	], {
		S: 'kubejs:smeltery_controller_box',
		L: 'create:brass_ingot'
	})
  
  
	event.remove({output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped'})
	
	event.remove({output: 'create:encased_fan', type: 'minecraft:crafting_shaped'})
	
	//event.remove({ouptut: 'create:encased_fan', type: 'minecraft:crafting_shaped'})
  
})
