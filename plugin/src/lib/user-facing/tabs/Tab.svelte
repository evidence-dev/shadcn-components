<script>
	import * as BaseTabs from '$lib/components/ui/tabs';
	import { getContext } from 'svelte';

	export let label;
	export let style;

	const tabs = getContext('TAB_REGISTRATION');

	$tabs = [...$tabs, title];
</script>

<BaseTabs.Content value={label} {style}>
	<slot />
</BaseTabs.Content>
