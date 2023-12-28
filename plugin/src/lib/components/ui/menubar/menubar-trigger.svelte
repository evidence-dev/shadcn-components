<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = MenubarPrimitive.TriggerProps;
	type $$Events = MenubarPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<MenubarPrimitive.Trigger
	class={cn(
		'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-gray-100 focus:text-gray-900 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900',
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
	on:pointerenter
>
	<slot />
</MenubarPrimitive.Trigger>
