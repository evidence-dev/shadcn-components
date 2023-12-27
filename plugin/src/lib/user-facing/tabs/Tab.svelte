<script>
	import * as BaseTabs from '$lib/components/shadcn/tabs';
	import { getContext, onMount } from 'svelte';

	export let title;

	const tabs = getContext('TAB_REGISTRATION');

	$tabs = [...$tabs, title];
</script>

<BaseTabs.Content value={title}>
	<slot />
</BaseTabs.Content>
