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

<Tabs>
	<Tab title="Light Mode">Light Mode</Tab>
	<Tab title="Dark Mode">Dark</Tab>
	<Tab title="Preview">Content!</Tab>
</Tabs>

<h1 class="text-lg font-medium">Single Select</h1>
<Select title="Category" options={statuses} />

<h1 class="text-lg font-medium">Multi Select</h1>
<Select title="Category" options={statuses} multiple />

<h1 class="text-lg font-medium">Date Range</h1>
<DateRange />

<h1 class="text-lg font-medium">Date Toggle</h1>
<DateToggle />

<h1 class="text-lg font-medium">Date Toggle</h1>
<Modal buttonText="Open the modal!" title="Modal Title" />
