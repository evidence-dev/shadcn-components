<script>
	import * as BaseTabs from '$lib/components/ui/tabs';
	import { getContext } from 'svelte';

	export let label;
	export let style;

	const tabs = getContext('TAB_REGISTRATION');

	$tabs = [...$tabs, label];
</script>

<BaseTabs.Content value={label} {style}>
	<div class="mb-4">
		<slot />
	</div>
</BaseTabs.Content>
