onEvent('recipes', event => {
	
	

	//vanilla smelting
	event.remove({type: 'minecraft:smelting', input: '#forge:ores'})
	
	//create ushed ores
	event.remove({type: 'minecraft:smelting', input: '#create:crushed_ores'})
	
	//dusts
	event.remove({type: 'minecraft:smelting', input: '#forge:dusts'})
	
	//event.remove({type: 'minecraft:blasting'})
	
	//thermal 
	event.remove({type: 'minecraft:smelting', input: '#forge:raw_materials'})

	//remove blastfurnace recipe
	event.remove({output: 'minecraft:blast_furnace'})
	
	
	
	//food
	//campfire
	event.remove({type: 'minecraft:campfire_cooking', output: 'minecraft:baked_potato'})
	
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_porkchop'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_cod'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_salmon'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_beef'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_chicken'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_mutton'})
	event.remove({type: 'minecraft:smelting', output: 'minecraft:cooked_rabbit'})
	
	
	
	
	
	
	// Change recipes here
})