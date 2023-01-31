// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('modpack_book').displayName('Modpack Book Item')
	event.create('compressed_tube').displayName('Скомпрессированная труба')
	event.create('integral_scheme').displayName('Простая-ламповая-интегральная схема')
	event.create('integral_scheme_no_light').displayName('Неготовая интегральная схема')
	event.create('integral_scheme_nothing').displayName('Заготовка для интегральной схемы')
	event.create('iron_lists_nc').displayName('Стопка железных листов')
	event.create('rotor_one').displayName('Незавершенный ротор. 1/3')
	event.create('rotor_two').displayName('Незавершенный ротор. 2/3')
	event.create('compressed_plate').displayName('Скомпрессированная пластина')


	event.create('science_red').displayName('Красный исследовательский пакет')
	event.create('science_green').displayName('Зеленый Исследовательский пакет')
	event.create('science_blue').displayName('Синий исследовательский пакет')
	event.create('science_black').displayName('Черный Исследовательский пакет')
	event.create('science_purple').displayName('Фиолетовый исследовательский пакет')
	event.create('science_white').displayName('Белый Исследовательский пакет')
	event.create('science_yellow').displayName('Желтый Исследовательский пакет')

})

onEvent('block.registry', event => {
	
	event.create('smeltery_controller_box')
  	   .material('stone')
       .hardness(0.5)
       .displayName('Основа Контроллера Плавильни')
       .tagBlock('minecraft:mineable/pickaxe')

	// Block with custom type (see below for list of types)
	//event.create('test_block_slab', 'slab').material('glass').hardness(0.5)
	
	
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})





onEvent('fluid.registry', event => {
  // These first examples are 1.16.5 and 1.18.2 syntax
  
  // Basic "thick" (looks like lava) fluid with red tint
  event.create('thick_fluid')
    .thinTexture(0x00E8FF)
    .bucketColor(0x00E8FF)
    .displayName('Технический Спирт')
})