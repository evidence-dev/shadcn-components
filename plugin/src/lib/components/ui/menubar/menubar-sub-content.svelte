<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn, flyAndScale } from '$lib/utils';

	type $$Props = MenubarPrimitive.SubContentProps;
	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		x: -10,
		y: 0
	};
	export { className as class };
</script>

<MenubarPrimitive.SubContent
	{transition}
	{transitionConfig}
	class={cn(
		'z-50 min-w-[8rem] rounded-md border bg-white p-1 text-gray-900 shadow-lg focus:outline-none',
		className
	)}
	{...$$restProps}
>
	<slot />
</MenubarPrimitive.SubContent>
