<script>
	import * as BaseTabs from '$lib/components/ui/tabs';
	import { getContext } from 'svelte';

	export let title;
	export let style;

	const tabs = getContext('TAB_REGISTRATION');

	$tabs = [...$tabs, title];
</script>

<BaseTabs.Content value={title} {style}>
	<slot />
</BaseTabs.Content>
