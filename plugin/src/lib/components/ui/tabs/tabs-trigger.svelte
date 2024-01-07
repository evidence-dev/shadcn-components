<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	export let style: string | undefined = undefined;

	type $$Props = TabsPrimitive.TriggerProps;
	type $$Events = TabsPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { className as class };
</script>

<TabsPrimitive.Trigger
	class={cn(
		style == 'well'
			? 'rounded-md px-3 py-1 text-sm font-medium  focus-visible:ring-offset-2 data-[state=active]:bg-white data-[state=active]:text-gray-700 data-[state=active]:shadow'
			: 'mr-4 box-border border-b-2 border-transparent py-1 text-base text-gray-800 data-[state=active]:border-gray-800',
		'inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400  disabled:pointer-events-none disabled:opacity-50  ',
		className
	)}
	{value}
	{...$$restProps}
	on:click
	on:keydown
	on:focus
>
	<slot />
</TabsPrimitive.Trigger>
