<script lang="ts">
	import Accordian from '$lib/user-facing/accordion/Accordion.svelte';
	import AccordianItem from '$lib/user-facing/accordion/AccordionItem.svelte';
	import Tabs from '$lib/user-facing/tabs/Tabs.svelte';
	import Tab from '$lib/user-facing/tabs/Tab.svelte';
	import Select from '$lib/user-facing/select/Select.svelte';
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

<Select />
