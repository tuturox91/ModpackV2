// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	//thermal turn off ingots
	event.hide('thermal:tin_ingot')
	event.hide('thermal:tin_ore')
	event.hide('thermal:deepslate_tin_ore')
	
	event.hide('thermal:lead_ingot')
	event.hide('thermal:lead_ore')
	event.hide('thermal:deepslate_lead_ore')
	
})

onEvent('jei.information', event => {
	event.add('thermal:iron_gear', ['Стоит поискать их где-то под землей..'])
})


onEvent('jei.add.items', event => {
  event.add(Item.of('smeltery_controller_box'))
  
})