 onEvent('recipes', event => {
	 ////////
	 event.remove({output: 'thermal:iron_gear', type: 'minecraft:crafting_shaped'})
	 //remove pickaxe crafts
	 event.remove({output: 'minecraft:wooden_pickaxe'})
	 event.remove({output: 'minecraft:stone_pickaxe'})
	 event.remove({output: 'minecraft:iron_pickaxe'})
	 event.remove({output: 'minecraft:golden_pickaxe'})
	 event.remove({output: 'minecraft:diamond_pickaxe'})
	 ////////////////////////
	 
	 //remove axe crafts
	 event.remove({output: 'minecraft:wooden_axe'})
	 event.remove({output: 'minecraft:stone_axe'})
	 event.remove({output: 'minecraft:iron_axe'})
	 event.remove({output: 'minecraft:golden_axe'})
	 event.remove({output: 'minecraft:diamond_axe'})
	 ////////////////////////
	 
	 //remove hoe crafts 
	 event.remove({output: 'minecraft:wooden_hoe'})
	 event.remove({output: 'minecraft:stone_hoe'})
	 event.remove({output: 'minecraft:iron_hoe'})
	 event.remove({output: 'minecraft:golden_hoe'})
	 event.remove({output: 'minecraft:diamond_hoe'})
	 ////////////////////////
	 
	 //remove swords crafts 
	 event.remove({output: 'minecraft:wooden_sword'})
	 event.remove({output: 'minecraft:stone_sword'})
	 event.remove({output: 'minecraft:iron_sword'})
	 event.remove({output: 'minecraft:golden_sword'})
	 event.remove({output: 'minecraft:diamond_sword'})
	 ////////////////////////
	 
	 
	 //iron_lists_nc
	event.shaped('kubejs:iron_lists_nc', [
		' I ',
		' I ',
		' I '
    ], {
		I: 'create:iron_sheet'
	})

	 event.shaped('kubejs:science_red', [
		 '   ',
		 '   ',
		 ' CG'
	 ], {
		 C: 'minecraft:copper_ingot',
		 G: 'thermal:iron_gear'
	 })
	
	
	
	
	//event.remove({output: '#forge:tools/diamond', type: 'minecraft:crafting_shaped'})
	//event.remove({output: '#forge:tools/diamond', type: 'minecraft:crafting_shaped'})
	//event.remove({output: '#forge:tools/iron', type: 'minecraft:crafting_shaped'})
	//event.remove({output: '#forge:tools/gold', type: 'minecraft:crafting_shaped'})
	
	
	//event.remove({output: '#forge:tools/axes', type: 'minecraft:crafting_shaped'})
	//event.remove({output: '#forge:tools/pickaxes', type: 'minecraft:crafting_shaped'})
	//event.remove({output: '#forge:tools/shovels', type: 'minecraft:crafting_shaped'})
	
	
	//event.remove({output: 'minecraft:stone_sword', type: 'minecraft:crafting_shaped'})
	//event.remove({output: 'minecraft:wooden_sword', type: 'minecraft:crafting_shaped'})
	
	//event.remove({output: 'minecraft:stone_hoe', type: 'minecraft:crafting_shaped'})
	//event.remove({output: 'minecraft:wooden_hoe', type: 'minecraft:crafting_shaped'})
	
	event.remove({output: 'pneumaticcraft:air_compressor', type: 'minecraft:crafting_shaped'})
})