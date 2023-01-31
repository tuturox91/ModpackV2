onEvent('recipes', event => {
	
	event.shaped('4x pneumaticcraft:pressure_tube', [
		'AAA',
		'STS',
		'AAA'
	], {
    S: 'pneumaticcraft:ingot_iron_compressed',
    T: 'kubejs:compressed_tube',
	A: 'minecraft:air'
  })

    event.remove({output: 'pneumaticcraft:compressed_iron_gear', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'pneumaticcraft:refinery', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'pneumaticcraft:refinery_output', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'pneumaticcraft:thermopneumatic_processing_plant', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'pneumaticcraft:gas_lift', type: 'minecraft:crafting_shaped'})
  event.remove({type: 'minecraft:crafting_shaped', output: 'pneumaticcraft:pressure_tube'})
})