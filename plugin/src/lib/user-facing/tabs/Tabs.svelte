<script>
	import * as BaseTabs from '$lib/components/ui/tabs';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let tabItems = writable([]);

	export let color;
	export let style;

	setContext('TAB_REGISTRATION', tabItems);
</script>

<BaseTabs.Root>
	<BaseTabs.List {style} {color}>
		{#each $tabItems as value}
			<BaseTabs.Trigger {value} {style}>{value}</BaseTabs.Trigger>
		{/each}
	</BaseTabs.List>
	<slot />
</BaseTabs.Root>
