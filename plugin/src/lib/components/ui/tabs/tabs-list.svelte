<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	export let style: string | undefined = undefined;

	type $$Props = TabsPrimitive.ListProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	class={cn(
		style == 'well'
			? 'inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500'
			: 'flex overflow-auto border-b border-gray-200',
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
