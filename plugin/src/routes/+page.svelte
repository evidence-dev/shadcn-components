<script lang="ts">
	import Accordian from '$lib/user-facing/accordion/Accordion.svelte';
	import AccordianItem from '$lib/user-facing/accordion/AccordionItem.svelte';
	import Tabs from '$lib/user-facing/tabs/Tabs.svelte';
	import Tab from '$lib/user-facing/tabs/Tab.svelte';
	import Select from '$lib/user-facing/select/Select.svelte';
	import DateRange from '$lib/user-facing/date-range/DateRange.svelte';
	import DateToggle from '$lib/user-facing/date-toggle/DateToggle.svelte';
	import Modal from '$lib/user-facing/modal/Modal.svelte';

	const statuses = [
		{
			value: 'backlog',
			label: 'Backlog'
		},
		{
			value: 'todo',
			label: 'Todo'
		},
		{
			value: 'in progress',
			label: 'In Progress'
		},
		{
			value: 'done',
			label: 'Done'
		},
		{
			value: 'canceled',
			label: 'Canceled'
		}
	];
</script>

<Accordian>
	<AccordianItem title="Footnotes">Content placeholder</AccordianItem>
	<AccordianItem title="Disclaimers">Watch out</AccordianItem>
</Accordian>

<Tabs style="well">
	<Tab label="Monthly">monthly</Tab>
	<Tab label="Weekly">weekly</Tab>
</Tabs>

<h1 class="text-lg font-medium">Single Select</h1>
<Select title="Category" options={statuses} />

<h1 class="text-lg font-medium">Multi Select</h1>
<Select title="Category" options={statuses} multiple />

<h1 class="text-lg font-medium">Date Range</h1>
<DateRange />

<h1 class="text-lg font-medium">Date Toggle</h1>
<DateToggle />

<h1 class="text-lg font-medium">Modal</h1>
<Modal buttonText="Open the modal!" title="Modal Title">
	Sunt excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt. Sunt
	excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt. Sunt
	excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt. Sunt
	excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt. Sunt
	excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt. Sunt
	excepteur reprehenderit ex pariatur. Aliquip dolor culpa elit nulla pariatur Lorem labore ex
	dolor. Sunt culpa irure pariatur elit nostrud cupidatat id voluptate enim Lorem aliqua commodo
	labore do. Adipisicing pariatur qui mollit voluptate qui dolor non et mollit voluptate amet. Et
	minim esse est voluptate incididunt sunt exercitation in. Ex duis labore anim commodo sint duis
	culpa irure minim anim. Pariatur sit veniam nulla pariatur nostrud mollit consequat ipsum aliqua
	incididunt Lorem exercitation est. Occaecat elit nulla aute in deserunt in labore non officia nisi
	elit laborum consectetur. Reprehenderit deserunt non proident incididunt in sit. Sunt laboris ex
	aliqua consequat dolor. Sunt in dolore consequat duis et ex esse aute nulla duis in. Do veniam
	culpa enim et nulla amet est. Ut labore laboris qui mollit. Sint adipisicing magna dolor deserunt
	excepteur fugiat mollit officia ipsum voluptate magna. Dolore consequat officia incididunt sit
	sint duis Lorem ullamco non duis labore irure culpa aliquip. Incididunt do fugiat do officia
	cupidatat enim pariatur labore duis in sunt et commodo. Sint quis sit ipsum quis culpa laboris
	aliqua cupidatat magna proident mollit est. Nulla qui nulla excepteur in. Lorem exercitation dolor
	culpa duis labore fugiat adipisicing nulla nostrud excepteur amet sit ut. Duis esse pariatur ipsum
	consectetur incididunt duis id in nisi laborum exercitation aliquip sit laboris. Elit sint
	proident culpa officia ad veniam pariatur id voluptate. Magna in exercitation sint irure nulla
	sunt eiusmod mollit velit adipisicing adipisicing quis amet. Ex occaecat dolore aliqua. Minim enim
	non reprehenderit incididunt ad ut reprehenderit elit nostrud cupidatat duis. Sit dolor laborum
	nisi exercitation ullamco ullamco fugiat dolor mollit adipisicing deserunt dolor enim. Adipisicing
	labore id sunt enim mollit consequat veniam mollit aliqua deserunt quis eu sunt. Aliqua et ex
	proident officia amet nisi ipsum excepteur. Cillum aute ipsum dolore eu aliqua ipsum ea in
	consequat ullamco. Proident fugiat do aute reprehenderit laboris commodo non est dolor ullamco
	nulla cillum velit. Magna dolor minim ex voluptate incididunt consequat labore laborum id labore
	proident enim officia cillum. Est magna eiusmod consectetur duis occaecat in cupidatat ullamco
	aliqua consectetur dolore qui elit irure ut. Sint irure laborum culpa laborum est. Labore cillum
	minim reprehenderit culpa ut in quis fugiat do. Et eu magna minim ad amet aliqua officia cupidatat
	ex laborum veniam cupidatat tempor. Minim labore qui incididunt elit duis eiusmod officia proident
	voluptate non commodo aliqua consectetur. Mollit dolor consequat quis amet exercitation duis.
	Ullamco deserunt nisi eu culpa aliquip sunt deserunt reprehenderit. Exercitation irure voluptate
	irure magna consequat deserunt sunt quis nostrud. Velit amet exercitation ex non in id proident
	ipsum dolor. Esse duis elit excepteur veniam. Cillum velit ad enim proident magna sunt.
</Modal>

<h1 class="text-lg font-medium">Tabs (Underline)</h1>
<Tabs style="underline">
	<Tab label="Light Mode">Light Mode</Tab>
	<Tab label="Dark Mode">Dark</Tab>
	<Tab label="Preview">Content!</Tab>
</Tabs>
