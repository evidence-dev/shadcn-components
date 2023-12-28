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
	<span class="bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full">
		<SliderPrimitive.Range class="bg-primary absolute h-full" />
	</span>
	<SliderPrimitive.Thumb
		class="border-primary/50 bg-background block h-4 w-4 rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
	/>
</SliderPrimitive.Root>
