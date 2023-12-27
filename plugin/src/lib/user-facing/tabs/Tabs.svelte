<script>
	import * as BaseTabs from '$lib/components/shadcn/tabs';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let tabItems = writable([]);

	export let color;
	export let style = 'well';

	setContext('TAB_REGISTRATION', tabItems);
</script>

<BaseTabs.Root>
	<BaseTabs.List {style} {color}>
		{#each $tabItems as value}
			<BaseTabs.Trigger {value}>{value}</BaseTabs.Trigger>
		{/each}
	</BaseTabs.List>
	<slot />
</BaseTabs.Root>
