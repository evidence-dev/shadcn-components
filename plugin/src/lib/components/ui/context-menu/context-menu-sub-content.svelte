<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	type $$Props = ContextMenuPrimitive.SubContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = undefined;
	export { className as class };
</script>

<ContextMenuPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[8rem] rounded-md border bg-white p-1 text-gray-900 shadow-lg focus:outline-none',
		className
	)}
	{...$$restProps}
	on:keydown
	on:focusout
	on:pointermove
>
	<slot />
</ContextMenuPrimitive.SubContent>
