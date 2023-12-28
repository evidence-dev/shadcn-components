<script lang="ts">
	import Accordian from '$lib/user-facing/accordion/Accordion.svelte';
	import AccordianItem from '$lib/user-facing/accordion/AccordionItem.svelte';
	import Tabs from '$lib/user-facing/tabs/Tabs.svelte';
	import Tab from '$lib/user-facing/tabs/Tab.svelte';
	import Select from '$lib/user-facing/select/Select.svelte';

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

<div class="mt-10">
	<Select title="Category" options={statuses} />
</div>
