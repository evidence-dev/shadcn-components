<script lang="ts">
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = ProgressPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let max: $$Props['max'] = 100;
	export let value: $$Props['value'] = undefined;
	export { className as class };
</script>

<ProgressPrimitive.Root
	class={cn('relative h-2 w-full overflow-hidden rounded-full bg-gray-900/20', className)}
	{...$$restProps}
>
	<div
		class="h-full w-full flex-1 bg-gray-900 transition-all"
		style={`transform: translateX(-${100 - (100 * (value ?? 0)) / (max ?? 1)}%)`}
	/>
</ProgressPrimitive.Root>
