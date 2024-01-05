<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = SliderPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = [0];
	export { className as class };
</script>

<SliderPrimitive.Root
	bind:value
	class={cn('relative flex w-full touch-none select-none items-center', className)}
	{...$$restProps}
>
	<span class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-900/20">
		<SliderPrimitive.Range class="absolute h-full bg-gray-900" />
	</span>
	<SliderPrimitive.Thumb
		class="block h-4 w-4 rounded-full border border-gray-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
	/>
</SliderPrimitive.Root>
